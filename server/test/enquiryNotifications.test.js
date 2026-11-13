const assert = require('node:assert/strict')
const { test } = require('node:test')
const express = require('express')
const Enquiry = require('../models/Enquiry')
const enquiryRoutes = require('../routes/enquiryRoutes')
const { buildHtml, escapeHtml } = require('../services/enquiryNotification')

const requestBody = {
  fullName: 'Test Recipient',
  phone: '+254712345678',
  email: 'customer@example.test',
  county: 'Test County',
  town: 'Test Town',
  serviceRequired: 'Borehole Drilling',
  projectDescription: '<script>not executable</script>',
  contactPreference: 'email',
}

function createTestModel() {
  const saved = new Map()

  class TestEnquiry {
    static async init() {}

    constructor(values) {
      Object.assign(this, values)
      this.reference = 'BH-TEST123'
      this.emailNotification = { status: 'pending' }
    }

    async save() {
      saved.set(this.reference, {
        status: this.emailNotification.status,
        attemptedAt: this.emailNotification.attemptedAt,
        sentAt: this.emailNotification.sentAt,
        error: this.emailNotification.error,
      })
    }
  }

  return { TestEnquiry, saved }
}

async function startTestServer(sendNotification) {
  const app = express()
  app.use(express.json())
  const { TestEnquiry, saved } = createTestModel()
  app.use(
    '/api/enquiries',
    enquiryRoutes.createEnquiryRouter({
      EnquiryModel: TestEnquiry,
      databaseConnected: () => true,
      sendNotification,
    }),
  )
  const server = app.listen(0)
  await new Promise((resolve) => server.once('listening', resolve))
  const address = server.address()

  return {
    saved,
    close: () =>
      new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()))
      }),
    submit: () =>
      fetch(`http://127.0.0.1:${address.port}/api/enquiries`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      }),
  }
}

test('email notification schema starts pending and constrains delivery status', () => {
  const enquiry = new Enquiry({
    ...requestBody,
    reference: 'BH-TEST123',
  })

  assert.equal(enquiry.emailNotification.status, 'pending')
  assert.deepEqual(
    Enquiry.schema.path('emailNotification').schema.path('status').enumValues,
    ['pending', 'sent', 'failed'],
  )
  assert.ok(Enquiry.schema.path('emailNotification').schema.path('attemptedAt'))
  assert.ok(Enquiry.schema.path('emailNotification').schema.path('sentAt'))
  assert.ok(Enquiry.schema.path('emailNotification').schema.path('error'))
})

test('a successfully sent notification is recorded and returns the existing 201 response', async (t) => {
  let notificationReceived
  const testServer = await startTestServer(async (enquiry) => {
    assert.ok(testServer.saved.has(enquiry.reference))
    notificationReceived = enquiry
  })
  t.after(() => testServer.close())

  const response = await testServer.submit()
  const body = await response.json()

  assert.equal(response.status, 201)
  assert.deepEqual(body, {
    success: true,
    message: 'Your enquiry has been received.',
    reference: 'BH-TEST123',
  })
  assert.equal(notificationReceived.reference, 'BH-TEST123')
  assert.equal(testServer.saved.get('BH-TEST123').status, 'sent')
  assert.ok(testServer.saved.get('BH-TEST123').attemptedAt instanceof Date)
  assert.ok(testServer.saved.get('BH-TEST123').sentAt instanceof Date)
})

test('an email failure preserves the enquiry, records a safe failure, and returns 201', async (t) => {
  const originalError = console.error
  const logMessages = []
  console.error = (...values) => logMessages.push(values.join(' '))
  t.after(() => {
    console.error = originalError
  })

  const testServer = await startTestServer(async () => {
    throw new Error('secret-api-key customer@example.test')
  })
  t.after(() => testServer.close())

  const response = await testServer.submit()
  const body = await response.json()
  const savedEnquiry = testServer.saved.get('BH-TEST123')

  assert.equal(response.status, 201)
  assert.equal(body.success, true)
  assert.equal(body.reference, 'BH-TEST123')
  assert.equal(savedEnquiry.status, 'failed')
  assert.ok(savedEnquiry.attemptedAt instanceof Date)
  assert.equal(savedEnquiry.sentAt, undefined)
  assert.equal(savedEnquiry.error, 'Email delivery failed.')
  assert.doesNotMatch(logMessages.join(' '), /secret-api-key|customer@example\.test/)
})

test('HTML escaping neutralizes special characters in untrusted values', () => {
  assert.equal(
    escapeHtml(`<tag attr="value">&'`),
    '&lt;tag attr=&quot;value&quot;&gt;&amp;&#39;',
  )

  const html = buildHtml({
    ...requestBody,
    reference: 'BH-TEST123',
  })
  assert.match(html, /Test Recipient/)
  assert.match(html, /customer@example\.test/)
  assert.match(html, /Contact preference/)
  assert.match(html, /&lt;script&gt;not executable&lt;\/script&gt;/)
  assert.doesNotMatch(html, /<script>/)
})

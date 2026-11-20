const assert = require('node:assert/strict')
const { test } = require('node:test')
const mongoose = require('mongoose')
const { connectDatabase } = require('../config/db')

test('database connection is optional during API initialization', async () => {
  assert.equal(await connectDatabase(null), false)
})

test('concurrent database connection requests share the same attempt', async (t) => {
  const originalConnect = mongoose.connect
  let resolveConnection
  let calls = 0
  mongoose.connect = () => {
    calls += 1
    return new Promise((resolve) => {
      resolveConnection = resolve
    })
  }
  t.after(() => {
    mongoose.connect = originalConnect
  })

  const firstAttempt = connectDatabase('mongodb://localhost/test')
  const secondAttempt = connectDatabase('mongodb://localhost/test')
  assert.equal(calls, 1)

  resolveConnection()
  assert.deepEqual(await Promise.all([firstAttempt, secondAttempt]), [true, true])
})

test('a failed connection attempt can be retried', async (t) => {
  const originalConnect = mongoose.connect
  const originalError = console.error
  const originalInfo = console.info
  let calls = 0
  mongoose.connect = async () => {
    calls += 1
    throw new Error('Connection failed.')
  }
  console.error = () => {}
  console.info = () => {}
  t.after(() => {
    mongoose.connect = originalConnect
    console.error = originalError
    console.info = originalInfo
  })

  assert.equal(await connectDatabase('mongodb://localhost/test'), false)
  assert.equal(await connectDatabase('mongodb://localhost/test'), false)
  assert.equal(calls, 2)
})

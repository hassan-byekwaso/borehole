const { Resend } = require('resend')
const config = require('../config/env')

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getValue(value) {
  return value || 'Not provided'
}

function buildHtml(enquiry) {
  const fields = [
    ['Reference', enquiry.reference],
    ['Customer name', enquiry.fullName],
    ['Phone', enquiry.phone],
    ['Email', enquiry.email],
    ['County', enquiry.county],
    ['Town', enquiry.town],
    ['Requested service', enquiry.serviceRequired],
    ['Contact preference', enquiry.contactPreference],
    ['Project description', enquiry.projectDescription],
  ]

  return `<h1>New borehole enquiry</h1><table>${fields
    .map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(getValue(value))}</td></tr>`,
    )
    .join('')}</table>`
}

function buildText(enquiry) {
  return [
    ['Reference', enquiry.reference],
    ['Customer name', enquiry.fullName],
    ['Phone', enquiry.phone],
    ['Email', enquiry.email],
    ['County', enquiry.county],
    ['Town', enquiry.town],
    ['Requested service', enquiry.serviceRequired],
    ['Contact preference', enquiry.contactPreference],
    ['Project description', enquiry.projectDescription],
  ]
    .map(([label, value]) => `${label}: ${getValue(value)}`)
    .join('\n')
}

async function sendEnquiryNotification(enquiry) {
  if (!config.resendApiKey || !config.enquiryNotificationEmail) {
    throw new Error('Email notifications are not configured.')
  }

  let result
  try {
    const resend = new Resend(config.resendApiKey)
    result = await resend.emails.send({
      from: config.resendFromEmail,
      to: config.enquiryNotificationEmail,
      subject: `New enquiry ${enquiry.reference}`,
      html: buildHtml(enquiry),
      text: buildText(enquiry),
    })
  } catch {
    throw new Error('Email delivery failed.')
  }

  if (!result || result.error) {
    throw new Error('Email delivery failed.')
  }
}

module.exports = { sendEnquiryNotification, escapeHtml, buildHtml }

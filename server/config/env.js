const path = require('node:path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

function readPositiveInteger(name, defaultValue) {
  const value = process.env[name]
  if (value === undefined || value.trim() === '') {
    return defaultValue
  }

  if (!/^\d+$/.test(value.trim())) {
    throw new Error(`Invalid configuration: ${name} must be a positive integer.`)
  }

  const parsed = Number(value)
  if (!Number.isSafeInteger(parsed) || parsed <= 0) {
    throw new Error(`Invalid configuration: ${name} must be a positive integer.`)
  }

  return parsed
}

function readOptional(name) {
  return process.env[name]?.trim() || null
}

function validateClientOrigin(value) {
  let url
  try {
    url = new URL(value)
  } catch {
    throw new Error('Invalid configuration: CLIENT_ORIGIN must be a valid origin.')
  }

  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  ) {
    throw new Error('Invalid configuration: CLIENT_ORIGIN must be a valid origin.')
  }

  return url.origin
}

const port = readPositiveInteger('PORT', 5000)
if (port > 65535) {
  throw new Error('Invalid configuration: PORT must be between 1 and 65535.')
}

const mongoUri = readOptional('MONGODB_URI')
const clientOrigin = readOptional('CLIENT_ORIGIN')

const config = Object.freeze({
  port,
  mongoUri,
  clientOrigin: clientOrigin ? validateClientOrigin(clientOrigin) : null,
  rateLimitWindowMs: readPositiveInteger('RATE_LIMIT_WINDOW_MS', 15 * 60 * 1000),
  rateLimitMaxRequests: readPositiveInteger('RATE_LIMIT_MAX_REQUESTS', 100),
  resendApiKey: process.env.RESEND_API_KEY?.trim() || null,
  enquiryNotificationEmail:
    process.env.ENQUIRY_NOTIFICATION_EMAIL?.trim() || null,
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL?.trim() || 'onboarding@resend.dev',
})

module.exports = config

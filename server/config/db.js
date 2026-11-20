const mongoose = require('mongoose')

let connectionPromise
let connectionPending = false
let connectionEventsConfigured = false

function getSafeErrorMessage(error) {
  const message = error instanceof Error ? error.message : String(error)
  return message.replace(
    /(mongodb(?:\+srv)?:\/\/)[^/\s@]+@/gi,
    '$1[redacted]@',
  )
}

function isDatabaseConnected() {
  return mongoose.connection.readyState === 1
}

function configureConnectionEvents() {
  if (connectionEventsConfigured) {
    return
  }
  connectionEventsConfigured = true

  mongoose.connection.on('connected', () => {
    console.info('MongoDB connection established.')
  })

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection unavailable.')
    if (!connectionPending) {
      connectionPromise = undefined
    }
  })

  mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error: ${getSafeErrorMessage(error)}`)
  })
}

async function connectDatabase(mongoUri) {
  if (isDatabaseConnected()) {
    return true
  }
  if (!mongoUri) {
    return false
  }

  configureConnectionEvents()

  if (connectionPromise) {
    return connectionPromise
  }

  connectionPending = true
  connectionPromise = mongoose
    .connect(mongoUri, { serverSelectionTimeoutMS: 10000 })
    .then(() => true)
    .catch((error) => {
      console.error(
        `Initial MongoDB connection failed: ${getSafeErrorMessage(error)}`,
      )
      console.info('The server will remain available.')
      return false
    })
    .finally(() => {
      connectionPending = false
      if (!isDatabaseConnected()) {
        connectionPromise = undefined
      }
    })

  return connectionPromise
}

module.exports = { connectDatabase, isDatabaseConnected }

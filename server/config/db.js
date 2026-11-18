const mongoose = require('mongoose')

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
  mongoose.connection.on('connected', () => {
    console.info('MongoDB connection established.')
  })

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection unavailable.')
  })

  mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error: ${getSafeErrorMessage(error)}`)
  })
}

async function connectDatabase(mongoUri) {
  configureConnectionEvents()

  try {
    await mongoose.connect(mongoUri)
    return true
  } catch (error) {
    console.error(
      `Initial MongoDB connection failed: ${getSafeErrorMessage(error)}`,
    )
    console.info('The server will remain available.')
    return false
  }
}

module.exports = { connectDatabase, isDatabaseConnected }

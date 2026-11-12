const mongoose = require('mongoose')

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

  mongoose.connection.on('error', () => {
    console.error('MongoDB connection error.')
  })
}

async function connectDatabase(mongoUri) {
  configureConnectionEvents()

  try {
    await mongoose.connect(mongoUri)
    return true
  } catch {
    console.error('Initial MongoDB connection failed; the server will remain available.')
    return false
  }
}

module.exports = { connectDatabase, isDatabaseConnected }

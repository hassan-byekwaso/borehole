const { app } = require('../server/server')
const config = require('../server/config/env')
const { connectDatabase, isDatabaseConnected } = require('../server/config/db')

let databaseConnection

async function handler(request, response) {
  if (!isDatabaseConnected()) {
    databaseConnection ||= connectDatabase(config.mongoUri)
    await databaseConnection
  }

  return app(request, response)
}

module.exports = handler

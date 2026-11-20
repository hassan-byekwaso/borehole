import server from '../server/server.js'
import config from '../server/config/env.js'
import database from '../server/config/db.js'

const { app } = server
const { connectDatabase, isDatabaseConnected } = database

export default async function handler(request, response) {
  if (!isDatabaseConnected() && config.mongoUri) {
    await connectDatabase(config.mongoUri)
  }

  return app(request, response)
}

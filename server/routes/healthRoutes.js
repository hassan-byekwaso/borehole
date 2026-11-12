const express = require('express')
const { isDatabaseConnected } = require('../config/db')

const router = express.Router()

router.get('/health', (request, response) => {
  const databaseConnected = isDatabaseConnected()

  response.status(databaseConnected ? 200 : 503).json({
    server: 'running',
    database: databaseConnected ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
})

module.exports = router

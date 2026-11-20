const cors = require('cors')
const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const config = require('./config/env')
const { connectDatabase } = require('./config/db')
const errorMiddleware = require('./middleware/errorMiddleware')
const notFoundMiddleware = require('./middleware/notFoundMiddleware')
const healthRoutes = require('./routes/healthRoutes')
const enquiryRoutes = require('./routes/enquiryRoutes')

const app = express()
const corsOptions = {
  origin(origin, callback) {
    if (!origin || origin === config.clientOrigin) {
      return callback(null, true)
    }

    const error = new Error('Request origin is not allowed.')
    error.status = 403
    return callback(error)
  },
  optionsSuccessStatus: 204,
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: false, limit: '10kb' }))
app.use(
  rateLimit({
    windowMs: config.rateLimitWindowMs,
    limit: config.rateLimitMaxRequests,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Too many requests. Please try again later.' },
  }),
)

app.use('/api', healthRoutes)
app.use('/api/enquiries', enquiryRoutes)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

let server

if (require.main === module) {
  server = app.listen(config.port, () => {
    console.info(`Backend listening on port ${config.port}.`)
    void connectDatabase(config.mongoUri)
  })
}

module.exports = { app, server }

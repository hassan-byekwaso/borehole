const express = require('express')
const rateLimit = require('express-rate-limit')
const { isDatabaseConnected } = require('../config/db')
const Enquiry = require('../models/Enquiry')
const validateEnquiry = require('../middleware/validateEnquiry')

const router = express.Router()

const submissionRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many enquiry submissions. Please try again later.',
  },
})

router.post(
  '/',
  submissionRateLimit,
  validateEnquiry,
  async (request, response, next) => {
    if (!isDatabaseConnected()) {
      return response.status(503).json({
        success: false,
        error:
          'Enquiry service is temporarily unavailable. Please try again later.',
      })
    }

    try {
      await Enquiry.init()
      const enquiry = new Enquiry(request.validatedEnquiry)
      await enquiry.save()

      return response.status(201).json({
        success: true,
        message: 'Your enquiry has been received.',
        reference: enquiry.reference,
      })
    } catch (error) {
      return next(error)
    }
  },
)

module.exports = router

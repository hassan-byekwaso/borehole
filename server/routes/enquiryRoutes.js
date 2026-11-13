const express = require('express')
const rateLimit = require('express-rate-limit')
const { isDatabaseConnected } = require('../config/db')
const Enquiry = require('../models/Enquiry')
const validateEnquiry = require('../middleware/validateEnquiry')
const { sendEnquiryNotification } = require('../services/enquiryNotification')

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

function createEnquiryRouter({
  EnquiryModel = Enquiry,
  databaseConnected = isDatabaseConnected,
  sendNotification = sendEnquiryNotification,
} = {}) {
  const router = express.Router()

  router.post(
    '/',
    submissionRateLimit,
    validateEnquiry,
    async (request, response, next) => {
      if (!databaseConnected()) {
        return response.status(503).json({
          success: false,
          error:
            'Enquiry service is temporarily unavailable. Please try again later.',
        })
      }

      let enquiry
      try {
        await EnquiryModel.init()
        enquiry = new EnquiryModel(request.validatedEnquiry)
        await enquiry.save()
      } catch (error) {
        return next(error)
      }

      const attemptedAt = new Date()
      enquiry.emailNotification.status = 'pending'
      enquiry.emailNotification.attemptedAt = attemptedAt
      enquiry.emailNotification.sentAt = undefined
      enquiry.emailNotification.error = undefined

      try {
        await enquiry.save()
      } catch {
        console.error('Could not update enquiry notification status.')
      }

      let notificationStatus = 'sent'
      let notificationError
      try {
        await sendNotification(enquiry)
      } catch {
        notificationStatus = 'failed'
        notificationError = 'Email delivery failed.'
        console.error('Enquiry notification delivery failed.')
      }

      enquiry.emailNotification.status = notificationStatus
      enquiry.emailNotification.sentAt =
        notificationStatus === 'sent' ? new Date() : undefined
      enquiry.emailNotification.error = notificationError

      try {
        await enquiry.save()
      } catch {
        console.error('Could not update enquiry notification status.')
      }

      return response.status(201).json({
        success: true,
        message: 'Your enquiry has been received.',
        reference: enquiry.reference,
      })
    }
  )

  return router
}

const router = createEnquiryRouter()
router.createEnquiryRouter = createEnquiryRouter

module.exports = router

const { randomBytes } = require('node:crypto')
const mongoose = require('mongoose')

const serviceOptions = [
  'Borehole Drilling',
  'Borehole Camera',
  'Borehole Equipping',
  'Solar Borehole Equipping',
  'Borehole Rehabilitation',
  'Borehole Test Pumping',
  'Pumps',
  'Accessories',
  'Towers and Steel Tanks',
]

const contactPreferences = ['email', 'whatsapp', 'either']

const emailNotificationSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['pending', 'sent', 'failed'],
      default: 'pending',
      required: true,
    },
    attemptedAt: { type: Date },
    sentAt: { type: Date },
    error: { type: String, maxlength: 200 },
  },
  { _id: false },
)

function generateReference() {
  return `BH-${randomBytes(6).toString('hex').toUpperCase()}`
}

const enquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, maxlength: 100, trim: true },
    phone: {
      type: String,
      required: true,
      match: /^\+[1-9]\d{1,14}$/,
    },
    email: {
      type: String,
      required: true,
      maxlength: 254,
      trim: true,
      lowercase: true,
    },
    county: { type: String, required: true, maxlength: 100, trim: true },
    town: { type: String, required: true, maxlength: 100, trim: true },
    serviceRequired: { type: String, required: true, enum: serviceOptions },
    projectDescription: { type: String, maxlength: 2000, trim: true },
    contactPreference: {
      type: String,
      required: true,
      enum: contactPreferences,
    },
    whatsappConsent: { type: Boolean, default: false },
    reference: {
      type: String,
      required: true,
      unique: true,
      default: generateReference,
    },
    status: { type: String, default: 'pending' },
    emailNotification: {
      type: emailNotificationSchema,
      default: () => ({}),
    },
  },
  { timestamps: true, strict: 'throw' },
)

module.exports =
  mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema)

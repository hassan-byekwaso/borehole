const { parsePhoneNumberFromString } = require('libphonenumber-js')

const allowedFields = new Set([
  'fullName',
  'phone',
  'email',
  'county',
  'town',
  'serviceRequired',
  'projectDescription',
  'contactPreference',
  'whatsappConsent',
])

const requiredFields = [
  'fullName',
  'phone',
  'email',
  'county',
  'town',
  'serviceRequired',
  'contactPreference',
]

const serviceOptions = new Set([
  'Borehole Drilling',
  'Borehole Camera',
  'Borehole Equipping',
  'Solar Borehole Equipping',
  'Borehole Rehabilitation',
  'Borehole Test Pumping',
  'Pumps',
  'Accessories',
  'Towers and Steel Tanks',
])

const contactPreferences = new Set(['email', 'whatsapp', 'either'])

function isValidEmail(value) {
  const [localPart, ...domainParts] = value.split('@')
  if (
    domainParts.length !== 1 ||
    !localPart ||
    localPart.length > 64 ||
    localPart.startsWith('.') ||
    localPart.endsWith('.') ||
    localPart.includes('..') ||
    !/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(localPart)
  ) {
    return false
  }

  const labels = domainParts[0].split('.')
  if (
    labels.length < 2 ||
    labels.some(
      (label) =>
        label.length > 63 ||
        !/^[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?$/i.test(label),
    )
  ) {
    return false
  }

  const topLevelDomain = labels[labels.length - 1]
  return (
    /^[A-Z]{2,63}$/i.test(topLevelDomain) ||
    /^xn--[A-Z0-9-]{2,59}$/i.test(topLevelDomain)
  )
}

function containsControlCharacters(value) {
  for (const character of value) {
    const codePoint = character.codePointAt(0)
    if (codePoint <= 31 || (codePoint >= 127 && codePoint <= 159)) {
      return true
    }
  }
  return false
}

function validateEnquiry(request, response, next) {
  if (!request.is('application/json')) {
    return response.status(400).json({
      success: false,
      errors: { body: 'Content-Type must be application/json.' },
    })
  }

  const body = request.body
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return response.status(400).json({
      success: false,
      errors: { body: 'A JSON object is required.' },
    })
  }

  const errors = {}
  const unknownFields = Object.keys(body).filter((key) => !allowedFields.has(key))
  if (unknownFields.length > 0) {
    errors.body = 'Unknown fields are not allowed.'
  }

  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null) {
      errors[field] = 'This field is required.'
    } else if (typeof body[field] !== 'string') {
      errors[field] = 'Must be a string.'
    }
  }

  const values = {}
  const limits = {
    fullName: 100,
    phone: 25,
    email: 254,
    county: 100,
    town: 100,
    serviceRequired: 100,
    contactPreference: 20,
    projectDescription: 2000,
  }

  for (const [field, maximum] of Object.entries(limits)) {
    if (body[field] === undefined) {
      continue
    }
    if (typeof body[field] !== 'string') {
      errors[field] = 'Must be a string.'
      continue
    }

    const value = body[field].trim()
    values[field] = value
    if (containsControlCharacters(value)) {
      errors[field] = 'Must not contain control characters.'
    } else if (value.length > maximum) {
      errors[field] = `Must be no more than ${maximum} characters.`
    } else if (field !== 'projectDescription' && value.length === 0) {
      errors[field] = 'Must not be empty.'
    }
  }

  if (values.email && !isValidEmail(values.email)) {
    errors.email = 'Must be a valid email address.'
  } else if (values.email) {
    values.email = values.email.toLowerCase()
  }

  if (values.phone && !errors.phone) {
    const phoneNumber = parsePhoneNumberFromString(values.phone, {
      defaultCountry: 'KE',
      extract: false,
    })
    if (
      !phoneNumber ||
      phoneNumber.ext ||
      !phoneNumber.isPossible() ||
      !phoneNumber.isValid()
    ) {
      errors.phone = 'Must be a valid Kenyan or international phone number.'
    } else {
      values.phone = phoneNumber.number
    }
  }

  if (values.serviceRequired && !serviceOptions.has(values.serviceRequired)) {
    errors.serviceRequired = 'Select an approved service option.'
  }

  if (
    values.contactPreference &&
    !contactPreferences.has(values.contactPreference)
  ) {
    errors.contactPreference = 'Select email, whatsapp, or either.'
  }

  if (
    body.whatsappConsent !== undefined &&
    typeof body.whatsappConsent !== 'boolean'
  ) {
    errors.whatsappConsent = 'Must be a Boolean.'
  }

  const whatsappConsent = body.whatsappConsent === true
  if (
    values.contactPreference === 'whatsapp' &&
    (body.whatsappConsent !== true || !whatsappConsent)
  ) {
    errors.whatsappConsent =
      'Explicit WhatsApp consent is required for this contact preference.'
  }

  if (Object.keys(errors).length > 0) {
    return response.status(400).json({ success: false, errors })
  }

  request.validatedEnquiry = {
    fullName: values.fullName,
    phone: values.phone,
    email: values.email,
    county: values.county,
    town: values.town,
    serviceRequired: values.serviceRequired,
    contactPreference: values.contactPreference,
    whatsappConsent,
  }
  if (values.projectDescription !== undefined) {
    request.validatedEnquiry.projectDescription = values.projectDescription
  }

  return next()
}

module.exports = validateEnquiry

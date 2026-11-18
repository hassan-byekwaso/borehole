import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

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
] as const

const contactOptions = [
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'either', label: 'Either' },
] as const

type ContactPreference = (typeof contactOptions)[number]['value']
type FormValues = {
  fullName: string
  phone: string
  email: string
  county: string
  town: string
  serviceRequired: string
  projectDescription: string
  contactPreference: ContactPreference | ''
  whatsappConsent: boolean
}
type FormField = keyof FormValues
type FieldErrors = Partial<Record<FormField, string>>
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'failure'

const initialValues: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  county: '',
  town: '',
  serviceRequired: '',
  projectDescription: '',
  contactPreference: '',
  whatsappConsent: false,
}

const apiBaseUrl = (
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
).replace(/\/+$/, '')

const inputClassName =
  'min-h-11 min-w-0 rounded-lg border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20'
const labelClassName = 'grid min-w-0 gap-2 text-sm font-medium text-slate-800'
const errorClassName = 'text-sm font-normal text-red-700'

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}
  const requiredFields: Array<keyof Pick<
    FormValues,
    | 'fullName'
    | 'phone'
    | 'email'
    | 'county'
    | 'town'
    | 'serviceRequired'
    | 'contactPreference'
  >> = [
    'fullName',
    'phone',
    'email',
    'county',
    'town',
    'serviceRequired',
    'contactPreference',
  ]

  for (const field of requiredFields) {
    if (!values[field].trim()) {
      errors[field] = 'This field is required.'
    }
  }

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.fullName.trim().length > 100) {
    errors.fullName = 'Name must be 100 characters or fewer.'
  }
  if (values.phone.trim().length > 25) {
    errors.phone = 'Phone number must be 25 characters or fewer.'
  }
  if (values.email.trim().length > 254) {
    errors.email = 'Email address must be 254 characters or fewer.'
  }
  if (values.county.trim().length > 100) {
    errors.county = 'County must be 100 characters or fewer.'
  }
  if (values.town.trim().length > 100) {
    errors.town = 'Town must be 100 characters or fewer.'
  }
  if (values.projectDescription.trim().length > 2000) {
    errors.projectDescription = 'Project details must be 2,000 characters or fewer.'
  }
  if (
    values.serviceRequired &&
    !serviceOptions.some((service) => service === values.serviceRequired)
  ) {
    errors.serviceRequired = 'Select one of the listed services.'
  }
  if (
    values.contactPreference === 'whatsapp' &&
    !values.whatsappConsent
  ) {
    errors.whatsappConsent =
      'Please agree to be contacted through WhatsApp, or choose another contact method.'
  }

  return errors
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [values, setValues] = useState(() => {
    const requestedService = searchParams.get('service')
    return {
      ...initialValues,
      serviceRequired: serviceOptions.find(
        (service) => service === requestedService,
      ) ?? '',
    }
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [reference, setReference] = useState('')
  const submissionInProgress = useRef(false)

  function updateField<Field extends FormField>(
    field: Field,
    value: FormValues[Field],
  ) {
    setValues((current) => ({ ...current, [field]: value }))
    setFieldErrors((current) => {
      if (!current[field] && !(field === 'contactPreference' && current.whatsappConsent)) {
        return current
      }

      const next = { ...current }
      delete next[field]
      if (field === 'contactPreference' || field === 'whatsappConsent') {
        delete next.whatsappConsent
      }
      return next
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submissionInProgress.current) {
      return
    }

    const errors = validate(values)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setStatus('failure')
      setStatusMessage('Please check the highlighted fields and try again.')
      return
    }

    submissionInProgress.current = true
    setStatus('submitting')
    setStatusMessage('')
    setFieldErrors({})

    try {
      const response = await fetch(`${apiBaseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          county: values.county.trim(),
          town: values.town.trim(),
          serviceRequired: values.serviceRequired,
          projectDescription: values.projectDescription.trim(),
          contactPreference: values.contactPreference,
          whatsappConsent: values.whatsappConsent,
        }),
      })

      let responseBody: unknown
      try {
        responseBody = await response.json()
      } catch {
        responseBody = null
      }

      if (
        response.status === 201 &&
        isRecord(responseBody) &&
        responseBody.success === true &&
        typeof responseBody.reference === 'string' &&
        responseBody.reference.length > 0
      ) {
        setReference(responseBody.reference)
        setStatus('success')
        setStatusMessage('Your enquiry has been received.')
        return
      }

      if (response.status === 400 && isRecord(responseBody)) {
        const apiErrors = isRecord(responseBody.errors)
          ? responseBody.errors
          : {}
        const validFields = new Set<FormField>([
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
        const mappedErrors: FieldErrors = {}
        for (const [field, message] of Object.entries(apiErrors)) {
          if (validFields.has(field as FormField) && typeof message === 'string') {
            mappedErrors[field as FormField] = message
          } else if (field === 'body' && typeof message === 'string') {
            setStatusMessage(message)
          }
        }
        setFieldErrors(mappedErrors)
      }

      if (response.status === 429) {
        setStatusMessage(
          isRecord(responseBody) && typeof responseBody.error === 'string'
            ? responseBody.error
            : 'Too many submissions. Please wait a little before trying again.',
        )
      } else if (response.status === 503) {
        setStatusMessage(
          isRecord(responseBody) && typeof responseBody.error === 'string'
            ? responseBody.error
            : 'The enquiry service is temporarily unavailable. Please try again later.',
        )
      } else if (response.status === 400) {
        setStatusMessage((current) =>
          current || 'Some information needs attention. Please review the highlighted fields.',
        )
      } else {
        setStatusMessage(
          'We could not submit your enquiry right now. Please try again.',
        )
      }
      setStatus('failure')
    } catch {
      setStatus('failure')
      setStatusMessage(
        'We could not reach the enquiry service. Check your connection and try again.',
      )
    } finally {
      submissionInProgress.current = false
      setStatus((current) => (current === 'submitting' ? 'failure' : current))
    }
  }

  function startAnotherEnquiry() {
    setValues(initialValues)
    setFieldErrors({})
    setStatus('idle')
    setStatusMessage('')
    setReference('')
  }

  function errorProps(field: FormField) {
    const message = fieldErrors[field]
    return {
      ...(message
        ? {
            'aria-invalid': true as const,
            'aria-describedby': `${field}-error`,
          }
        : {}),
    }
  }

  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            {siteContent.sections.contact.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {siteContent.contact.contactPageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {siteContent.contact.description}
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-xl bg-blue-950 p-6 text-white sm:p-8">
            <h2 className="text-xl font-semibold">
              {siteContent.footer.contactHeading}
            </h2>
            <p className="mt-3 text-sm leading-6 text-blue-100/75">
              Contact Drip Tech Solutions Ltd for borehole drilling and water
              equipment enquiries.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-3">
                <Mail
                  className="mt-0.5 shrink-0 text-sky-300"
                  aria-hidden="true"
                  size={18}
                />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-blue-100/65">
                    Email
                  </dt>
                  <dd className="mt-1 break-words text-sm">
                    {siteContent.contact.email}
                  </dd>
                </div>
              </div>
              {siteContent.contact.phone && (
                <div className="flex gap-3">
                  <Phone
                    className="mt-0.5 shrink-0 text-sky-300"
                    aria-hidden="true"
                    size={18}
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-blue-100/65">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm">
                      {siteContent.contact.phone}
                    </dd>
                  </div>
                </div>
              )}
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 shrink-0 text-sky-300"
                  aria-hidden="true"
                  size={18}
                />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-blue-100/65">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm">
                    {siteContent.contact.location}
                  </dd>
                </div>
              </div>
            </dl>
          </aside>

          <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-950">
              {siteContent.contact.formTitle}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {siteContent.contact.formDescription}
            </p>

            {status === 'success' ? (
              <div
                className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-emerald-950"
                role="status"
                aria-live="polite"
              >
                <p className="font-semibold">{statusMessage}</p>
                <p className="mt-2 text-sm">
                  Your reference is <strong>{reference}</strong>.
                </p>
                <button
                  className="mt-5 min-h-11 rounded-lg bg-blue-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  type="button"
                  onClick={startAnotherEnquiry}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                {statusMessage && (
                  <p
                    className={`mt-5 rounded-lg border px-4 py-3 text-sm leading-6 ${
                      status === 'failure'
                        ? 'border-red-200 bg-red-50 text-red-900'
                        : 'border-sky-200 bg-sky-50 text-sky-950'
                    }`}
                    role={status === 'failure' ? 'alert' : 'status'}
                    aria-live={status === 'failure' ? 'assertive' : 'polite'}
                  >
                    {statusMessage}
                  </p>
                )}
                <form
                  className="mt-6 grid min-w-0 gap-5 sm:grid-cols-2"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <label className={labelClassName}>
                    {siteContent.contact.nameLabel}
                    <input
                      {...errorProps('fullName')}
                      className={inputClassName}
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      required
                      value={values.fullName}
                      onChange={(event) => updateField('fullName', event.target.value)}
                      placeholder="Enter your name"
                    />
                    {fieldErrors.fullName && (
                      <span className={errorClassName} id="fullName-error">
                        {fieldErrors.fullName}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    {siteContent.contact.emailLabel}
                    <input
                      {...errorProps('email')}
                      className={inputClassName}
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      value={values.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder="you@example.com"
                    />
                    {fieldErrors.email && (
                      <span className={errorClassName} id="email-error">
                        {fieldErrors.email}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    {siteContent.contact.phoneLabel}
                    <input
                      {...errorProps('phone')}
                      className={inputClassName}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={25}
                      required
                      value={values.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder="e.g. 0712 345 678"
                    />
                    {fieldErrors.phone && (
                      <span className={errorClassName} id="phone-error">
                        {fieldErrors.phone}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    County
                    <input
                      {...errorProps('county')}
                      className={inputClassName}
                      name="county"
                      type="text"
                      autoComplete="address-level1"
                      maxLength={100}
                      required
                      value={values.county}
                      onChange={(event) => updateField('county', event.target.value)}
                      placeholder="Enter the county"
                    />
                    {fieldErrors.county && (
                      <span className={errorClassName} id="county-error">
                        {fieldErrors.county}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    Town / project location
                    <input
                      {...errorProps('town')}
                      className={inputClassName}
                      name="town"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={100}
                      required
                      value={values.town}
                      onChange={(event) => updateField('town', event.target.value)}
                      placeholder="Enter the town or site area"
                    />
                    {fieldErrors.town && (
                      <span className={errorClassName} id="town-error">
                        {fieldErrors.town}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    {siteContent.contact.serviceLabel}
                    <select
                      {...errorProps('serviceRequired')}
                      className={`${inputClassName} bg-white`}
                      name="serviceRequired"
                      required
                      value={values.serviceRequired}
                      onChange={(event) =>
                        updateField('serviceRequired', event.target.value)
                      }
                    >
                      <option value="" disabled>
                        {siteContent.contact.servicePlaceholder}
                      </option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.serviceRequired && (
                      <span
                        className={errorClassName}
                        id="serviceRequired-error"
                      >
                        {fieldErrors.serviceRequired}
                      </span>
                    )}
                  </label>
                  <label className={labelClassName}>
                    Preferred contact method
                    <select
                      {...errorProps('contactPreference')}
                      className={`${inputClassName} bg-white`}
                      name="contactPreference"
                      required
                      value={values.contactPreference}
                      onChange={(event) =>
                        updateField(
                          'contactPreference',
                          contactOptions.find(
                            (option) => option.value === event.target.value,
                          )?.value ?? '',
                        )
                      }
                    >
                      <option value="" disabled>
                        Choose a contact method
                      </option>
                      {contactOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.contactPreference && (
                      <span
                        className={errorClassName}
                        id="contactPreference-error"
                      >
                        {fieldErrors.contactPreference}
                      </span>
                    )}
                  </label>
                  <div className="grid min-w-0 gap-2 sm:col-span-2">
                    <label className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-800">
                      <input
                        className="mt-1 size-4 shrink-0 accent-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        name="whatsappConsent"
                        type="checkbox"
                        checked={values.whatsappConsent}
                        aria-invalid={Boolean(fieldErrors.whatsappConsent)}
                        aria-describedby={`whatsapp-consent-help${fieldErrors.whatsappConsent ? ' whatsappConsent-error' : ''}`}
                        onChange={(event) =>
                          updateField('whatsappConsent', event.target.checked)
                        }
                      />
                      <span>
                        I agree to be contacted about this enquiry through
                        WhatsApp. This does not sign me up for marketing messages.
                      </span>
                    </label>
                    <p
                      className="pl-7 text-xs leading-5 text-slate-500"
                      id="whatsapp-consent-help"
                    >
                      WhatsApp will only be used if you choose WhatsApp or
                      Either and provide consent. Without consent, email remains
                      available.
                    </p>
                    {fieldErrors.whatsappConsent && (
                      <p
                        className={`${errorClassName} pl-7`}
                        id="whatsappConsent-error"
                        role="alert"
                      >
                        {fieldErrors.whatsappConsent}
                      </p>
                    )}
                  </div>
                  <label
                    className={`${labelClassName} sm:col-span-2`}
                  >
                    {siteContent.contact.messageLabel} (optional)
                    <textarea
                      {...errorProps('projectDescription')}
                      className="min-h-32 min-w-0 resize-y rounded-lg border border-slate-300 px-3 py-2 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
                      name="projectDescription"
                      maxLength={2000}
                      placeholder="Describe the site and your water requirements"
                      rows={5}
                      value={values.projectDescription}
                      onChange={(event) =>
                        updateField('projectDescription', event.target.value)
                      }
                    />
                    {fieldErrors.projectDescription && (
                      <span
                        className={errorClassName}
                        id="projectDescription-error"
                      >
                        {fieldErrors.projectDescription}
                      </span>
                    )}
                  </label>
                  <div className="sm:col-span-2">
                    <button
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-wait disabled:bg-slate-400"
                      type="submit"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' && (
                        <span
                          className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                          aria-hidden="true"
                        />
                      )}
                      {status === 'submitting'
                        ? 'Sending enquiry…'
                        : siteContent.contact.submitLabel}
                    </button>
                  </div>
                </form>
              </>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

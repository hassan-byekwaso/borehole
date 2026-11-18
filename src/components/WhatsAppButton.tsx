import { MessageCircle } from 'lucide-react'
import { siteContent } from '../content/siteContent'

export function WhatsAppButton() {
  const phoneNumber = siteContent.contact.phone.replace(/\D/g, '')
  if (!phoneNumber) {
    return null
  }

  const message = encodeURIComponent(
    'Hello Drip Tech Solutions, I would like to enquire about your services.',
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Drip Tech Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-green-600 px-4 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 sm:bottom-7 sm:right-7 sm:px-5"
    >
      <MessageCircle aria-hidden="true" size={21} />
      <span>WhatsApp</span>
    </a>
  )
}

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden bg-blue-950 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
            {siteContent.sections.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {siteContent.contact.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/75">
            {siteContent.contact.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100/70">
            <span className="inline-flex items-center gap-2">
              <Mail aria-hidden="true" size={15} className="text-sky-300" />
              {siteContent.contact.email}
            </span>
            {siteContent.contact.phone && (
              <span className="inline-flex items-center gap-2">
                <Phone aria-hidden="true" size={15} className="text-sky-300" />
                {siteContent.contact.phone}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" size={15} className="text-sky-300" />
              {siteContent.contact.location}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            to="/contact"
            className="inline-flex min-h-13 items-center justify-center gap-3 rounded-lg bg-sky-400 px-6 text-sm font-bold text-blue-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteContent.labels.requestQuote}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteContent.labels.contactUs}
          </Link>
        </div>
      </div>
    </section>
  )
}

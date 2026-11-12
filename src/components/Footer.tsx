import { ArrowUpRight, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sky-300">
                <Droplets aria-hidden="true" size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold">
                  {siteContent.brand.name}
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {siteContent.brand.descriptor}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              {siteContent.footer.aboutPlaceholder}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">
              {siteContent.footer.quickLinksHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-slate-400 transition hover:text-white"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">
              {siteContent.footer.servicesHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              {siteContent.services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link
                    className="text-sm text-slate-400 transition hover:text-white"
                    to="/services"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact-details" className="scroll-mt-24">
            <h2 className="text-sm font-semibold">
              {siteContent.footer.contactHeading}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteContent.contact.email}
              <br />
              {siteContent.contact.phone}
              <br />
              {siteContent.contact.location}
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
              {siteContent.footer.socialPlaceholder}
              <ArrowUpRight aria-hidden="true" size={12} />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {siteContent.brand.name}.
            </p>
            <p>{siteContent.footer.pendingApproval}</p>
          </div>
          <p className="leading-6">
            {siteContent.labels.imageCredits}:{' '}
            {siteContent.footer.imageCredits.map((credit, index) => (
              <span key={credit.source}>
                {index > 0 && ' · '}
                <a
                  className="underline decoration-slate-600 underline-offset-2 transition hover:text-white"
                  href={credit.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {credit.label}
                </a>
                {' ('}
                <a
                  className="underline decoration-slate-600 underline-offset-2 transition hover:text-white"
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {credit.license}
                </a>
                {')'}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}

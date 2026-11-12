import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteContent } from '../content/siteContent'

export function ServicesPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            {siteContent.sections.services.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Water services for each stage of a project.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {siteContent.sections.services.description}
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="relative">
                <img
                  className="aspect-[16/10] w-full object-cover"
                  src={service.image.src}
                  alt={service.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                  Illustrative image
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Enquire about this service
                  <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

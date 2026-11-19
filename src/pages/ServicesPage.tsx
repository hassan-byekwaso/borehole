import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ResilientImage } from '../components/ResilientImage'
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
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <ResilientImage
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={service.image.src}
                  alt={service.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  {siteContent.labels.serviceEnquiry}
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

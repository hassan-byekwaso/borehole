import {
  ArrowUpRight,
  Droplets,
  Gauge,
  Layers3,
  Search,
  Sun,
  Waves,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const serviceIcons = {
  drilling: Droplets,
  survey: Search,
  geophysics: Layers3,
  equipment: Gauge,
  solar: Sun,
  treatment: Waves,
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={siteContent.sections.services.eyebrow}
            title={siteContent.sections.services.title}
            description={siteContent.sections.services.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.services.map((service, index) => {
            const Icon = serviceIcons[service.icon]

            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                    <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    {siteContent.labels.learnMore}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

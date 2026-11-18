import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ResilientImage } from './ResilientImage'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

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
          <Reveal>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src="/rig-casing.jpg"
                  alt="Industrial borehole drilling rig installing PVC casing pipe on site"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-slate-950">
                  Borehole casing installation
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  On-site installation of PVC casing as part of borehole
                  construction.
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="relative aspect-[4/3] overflow-hidden bg-blue-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/borehole-field-2.jpg"
                  preload="metadata"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                >
                  <source src="/team-field.mp4" type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0 bg-black/20"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-slate-950">
                  Field operations
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  Technical crews working on borehole casing and pump
                  installations.
                </p>
              </div>
            </article>
          </Reveal>
          {siteContent.services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-900/5">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <ResilientImage
                      src={service.image.src}
                      alt={service.image.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      {siteContent.labels.serviceEnquiry}
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

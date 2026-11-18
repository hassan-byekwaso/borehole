import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ResilientImage } from './ResilientImage'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={siteContent.sections.projects.eyebrow}
              title={siteContent.sections.projects.title}
              description={siteContent.sections.projects.description}
            />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="relative overflow-hidden">
                  <ResilientImage
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin aria-hidden="true" size={13} />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      Typical design profile:{' '}
                    </span>
                    {project.specifications}
                  </p>
                  <Link
                    to={`/contact?service=${encodeURIComponent(project.serviceRequired)}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    {siteContent.sections.projects.linkLabel}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

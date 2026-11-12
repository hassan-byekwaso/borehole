import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
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
            <span className="mb-1 inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-900">
              {siteContent.sections.projects.badge}
            </span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="relative overflow-hidden">
                  <img
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    src={project.image.src}
                    alt={project.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900 shadow-sm">
                    {siteContent.sections.projects.imageBadge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
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
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    {siteContent.labels.projectEnquiries}
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

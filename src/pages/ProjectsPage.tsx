import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { siteContent } from '../content/siteContent'

export function ProjectsPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            {siteContent.sections.projects.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Water project gallery
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {siteContent.sections.projects.description}
          </p>
          <p
            role="note"
            className="mt-7 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-950"
          >
            {siteContent.sections.projects.badge}
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className="relative">
                <img
                  className="aspect-[4/3] w-full object-cover"
                  src={project.image.src}
                  alt={project.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-950 shadow-sm">
                  {siteContent.sections.projects.imageBadge}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin aria-hidden="true" size={13} />
                    {project.location}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-950">
                  {project.name}
                </h2>
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
          ))}
        </div>
      </section>
    </main>
  )
}

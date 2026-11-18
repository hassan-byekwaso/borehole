import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { ResilientImage } from '../components/ResilientImage'
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
            Featured water solution showcases
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {siteContent.sections.projects.description}
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
            >
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
          ))}
        </div>
      </section>
    </main>
  )
}

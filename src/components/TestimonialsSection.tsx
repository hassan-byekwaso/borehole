import { BadgeCheck } from 'lucide-react'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              {siteContent.sections.testimonials.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {siteContent.testimonials.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {siteContent.testimonials.description}
            </p>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.testimonials.highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <BadgeCheck
                aria-hidden="true"
                className="text-sky-700"
                size={22}
              />
              <h3 className="mt-4 font-semibold text-slate-950">
                {highlight.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

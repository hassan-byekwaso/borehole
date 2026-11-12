import { MessageSquareQuote } from 'lucide-react'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-blue-900">
              <MessageSquareQuote aria-hidden="true" size={22} />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              {siteContent.sections.testimonials.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {siteContent.testimonials.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              {siteContent.testimonials.description}
            </p>
            <div className="mx-auto mt-8 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
              {siteContent.testimonials.placeholder}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

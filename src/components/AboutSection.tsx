import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-xl lg:mx-0">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[2rem] border-l border-t border-sky-300" />
            <img
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-blue-950/10"
              src={siteContent.about.image.src}
              alt={siteContent.about.image.alt}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-5 right-4 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {siteContent.sections.about.profileLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {siteContent.sections.about.profileStatus}
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="pt-4 lg:pt-0">
            <SectionHeading
              eyebrow={siteContent.about.eyebrow}
              title={siteContent.about.title}
              description={siteContent.about.introduction}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="border-l-2 border-sky-400 pl-4">
                <div className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 shrink-0 text-sky-700"
                    aria-hidden="true"
                    size={17}
                  />
                  <h3 className="text-sm font-semibold text-slate-900">
                    {siteContent.about.missionTitle}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {siteContent.about.mission}
                </p>
              </div>
              <div className="border-l-2 border-sky-400 pl-4">
                <div className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 shrink-0 text-sky-700"
                    aria-hidden="true"
                    size={17}
                  />
                  <h3 className="text-sm font-semibold text-slate-900">
                    {siteContent.about.expertiseTitle}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {siteContent.about.expertise}
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-blue-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {siteContent.labels.aboutCompany}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

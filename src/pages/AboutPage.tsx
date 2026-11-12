import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { siteContent } from '../content/siteContent'

export function AboutPage() {
  return (
    <main>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
            {siteContent.about.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {siteContent.about.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {siteContent.about.introduction}
          </p>
          <p
            role="note"
            className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950"
          >
            {siteContent.about.contentStatus}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {siteContent.about.overviewTitle}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {siteContent.about.introduction}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              {siteContent.about.expertise}
            </p>
          </div>
          <img
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg shadow-slate-900/10"
            src={siteContent.about.image.src}
            alt={siteContent.about.image.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {[
            {
              title: siteContent.about.missionTitle,
              description: siteContent.about.mission,
            },
            {
              title: siteContent.about.visionTitle,
              description: siteContent.about.vision,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            {siteContent.about.valuesTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Proposed working principles, subject to company approval.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.about.values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-blue-900">
                  <Check aria-hidden="true" size={19} />
                </span>
                <h3 className="mt-4 font-semibold text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {siteContent.about.capabilitiesTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Service descriptions are introductory; project scope and
              availability should be confirmed directly.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {siteContent.services.map((service) => (
                <li
                  key={service.title}
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              {siteContent.about.approachTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Proposed approach — confirm with the company before publication.
            </p>
            <ol className="mt-6 space-y-4">
              {siteContent.about.approach.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xs font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-slate-700">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blue-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Discuss a project
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

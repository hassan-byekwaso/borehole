import {
  ClipboardList,
  Drill,
  FileSearch,
  Handshake,
  MapPinned,
  TestTube2,
} from 'lucide-react'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const processIcons = [
  Handshake,
  MapPinned,
  FileSearch,
  Drill,
  TestTube2,
  ClipboardList,
]

export function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={siteContent.sections.process.eyebrow}
            title={siteContent.sections.process.title}
            description={siteContent.sections.process.description}
          />
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.process.map((step, index) => {
            const Icon = processIcons[index]

            return (
              <Reveal key={step.title} delay={(index % 3) * 0.06}>
                <li className="relative flex h-full min-h-48 gap-5 rounded-xl border border-slate-200 bg-white p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700">
                      {siteContent.sections.process.stepLabel}{' '}
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

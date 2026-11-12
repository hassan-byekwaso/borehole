import {
  ClipboardCheck,
  Headset,
  HardHat,
  Leaf,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const reasonIcons = {
  expertise: SlidersHorizontal,
  equipment: HardHat,
  safety: ShieldCheck,
  sustainability: Leaf,
  management: ClipboardCheck,
  support: Headset,
}

export function WhyChooseUs() {
  return (
    <section
      id="equipment"
      className="scroll-mt-20 bg-blue-950 px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={siteContent.sections.reasons.eyebrow}
            title={siteContent.sections.reasons.title}
            description={siteContent.sections.reasons.description}
            light
          />
          <p className="mt-8 text-sm leading-6 text-blue-100/60">
            {siteContent.sections.reasons.equipmentNote}
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {siteContent.reasons.map((reason, index) => {
            const Icon = reasonIcons[reason.icon]

            return (
              <Reveal key={reason.title} delay={(index % 2) * 0.07}>
                <article className="flex h-full min-h-36 gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-sky-300/40 hover:bg-white/[0.07] sm:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-300/10 text-sky-300">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-blue-100/65">
                      {reason.description}
                    </p>
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

import { BadgeCheck, BriefcaseBusiness, MapPinned, Timer } from 'lucide-react'
import { siteContent } from '../content/siteContent'
import { Reveal } from './Reveal'

const statisticIcons = [BriefcaseBusiness, Timer, MapPinned, BadgeCheck]

export function StatsSection() {
  return (
    <section
      id="statistics"
      aria-label="Company information"
      className="scroll-mt-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-4 md:divide-y-0">
        {siteContent.statistics.map((statistic, index) => {
          const Icon = statisticIcons[index]

          return (
            <Reveal key={statistic.label} className="h-full">
              <div className="flex h-full min-h-36 flex-col justify-center px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                  <Icon
                    className="shrink-0 text-sky-700"
                    aria-hidden="true"
                    size={19}
                    strokeWidth={1.8}
                  />
                  <span className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">
                    {statistic.value}
                  </span>
                </div>
                <p className="mt-3 text-xs font-medium text-slate-500 sm:text-sm">
                  {statistic.label}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

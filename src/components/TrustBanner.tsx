import { BadgeCheck } from 'lucide-react'

const trustHighlights = [
  'Hydrogeological Survey & Drilling',
  'WRA & NEMA Documentation Support',
  'Solar & Submersible Pump Systems',
  'Turnkey Water Supply Delivery',
]

export function TrustBanner() {
  return (
    <section
      aria-label="Company credentials and services"
      className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8"
    >
      <ul className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustHighlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
          >
            <BadgeCheck
              aria-hidden="true"
              className="shrink-0 text-sky-700"
              size={19}
            />
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  )
}

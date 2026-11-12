import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[640px] scroll-mt-20 items-center overflow-hidden bg-blue-950 sm:min-h-[700px]"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={siteContent.hero.image.src}
        alt={siteContent.hero.image.alt}
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/95 via-blue-950/75 to-blue-950/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-950/45 via-transparent to-blue-950/20"
        aria-hidden="true"
      />

      <motion.div
        className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-200 sm:text-sm">
            <span className="h-px w-9 bg-sky-300" aria-hidden="true" />
            {siteContent.hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {siteContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
            {siteContent.hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-sky-400 px-6 text-sm font-bold text-blue-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {siteContent.labels.requestQuote}
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {siteContent.labels.exploreServices}
              <ArrowDown aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </motion.div>

      <a
        href="#statistics"
        aria-label="Scroll to company information"
        className="absolute bottom-8 right-8 hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
      >
        <ArrowDown aria-hidden="true" size={19} />
      </a>
    </section>
  )
}

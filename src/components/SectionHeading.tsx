interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          light ? 'text-sky-300' : 'text-sky-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? 'text-blue-100/75' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

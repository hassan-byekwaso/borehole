import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <Link className="font-medium text-slate-700 underline" to="/">
        Return to the homepage
      </Link>
    </main>
  )
}

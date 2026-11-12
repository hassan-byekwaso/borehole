import { useState } from 'react'
import { ArrowUpRight, Droplets, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8"
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
          aria-label={`${siteContent.brand.name} home`}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-sky-300">
            <Droplets aria-hidden="true" size={23} strokeWidth={1.8} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-slate-950 sm:text-base">
              {siteContent.brand.name}
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {siteContent.brand.descriptor}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          id="primary-navigation"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col border-b border-slate-200 bg-white p-5 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-5">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-900 lg:px-0 lg:py-2 lg:hover:bg-transparent ${
                      isActive ? 'text-blue-950' : 'text-slate-600'
                    }`
                  }
                  to={item.href}
                  end={item.href === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:mt-0"
            onClick={() => setMenuOpen(false)}
          >
            {siteContent.labels.requestQuote}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

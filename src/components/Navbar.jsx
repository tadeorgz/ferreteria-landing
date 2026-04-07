import { useEffect, useState } from 'react'
import { Menu, Wrench, X } from 'lucide-react'

function Navbar({ companyName, navLinks, isMenuOpen, onToggleMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="group inline-flex items-center gap-3 transition-all duration-300"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-dark-color)] shadow-lg shadow-[var(--brand-color)]/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[var(--brand-color)]/40">
            <Wrench size={17} className="text-white" />
            <span className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
          </span>
          <span
            className={`text-base font-extrabold tracking-tight transition-colors duration-500 sm:text-lg ${
              scrolled ? 'text-white' : 'text-slate-900'
            }`}
          >
            {companyName}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                scrolled
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 rounded-xl bg-[var(--brand-color)] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[var(--brand-color)]/25 transition-all duration-300 hover:scale-105 hover:bg-[var(--brand-dark-color)] hover:shadow-lg hover:shadow-[var(--brand-color)]/35"
          >
            Contactar
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className={`inline-flex items-center rounded-xl border p-2 transition-all duration-200 md:hidden ${
            scrolled
              ? 'border-white/20 text-white hover:bg-white/10'
              : 'border-slate-300 text-slate-700 hover:bg-slate-100'
          }`}
          onClick={onToggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-slate-900/90 px-4 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onToggleMenu}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={onToggleMenu}
              className="mt-2 rounded-xl bg-[var(--brand-color)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contactar
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

import { useState, useEffect } from 'react'
import { navLinks } from '../data/content'
import Logo from './Logo'

const SCROLL_THRESHOLD = 60

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD
      setScrolled(isScrolled)
      if (!isScrolled) setMobileOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const linkClass = scrolled
    ? 'text-ink-600 hover:text-brand-600'
    : 'text-white/90 hover:text-white'

  const burgerClass = scrolled ? 'bg-ink-900' : 'bg-white'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'px-3 pt-3 sm:px-4 sm:pt-4' : 'px-0 pt-0'
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? 'h-12 max-w-4xl rounded-full border border-ink-200/70 bg-white/92 px-4 shadow-xl shadow-ink-900/10 backdrop-blur-xl sm:h-14 sm:px-6'
              : 'section-container h-16 px-4 sm:h-[4.5rem] sm:px-6 lg:h-20 lg:px-8'
          }`}
        >
          <a href="#" className="flex shrink-0 items-center">
            <Logo
              className={`transition-all duration-500 ease-out ${
                scrolled ? 'h-7 sm:h-8' : 'h-10 sm:h-12 lg:h-14'
              }`}
            />
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${linkClass}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition-all hover:bg-brand-600 lg:px-5 lg:py-2.5"
            >
              Join Waitlist
            </a>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 rounded-full p-2.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-5 transition-transform duration-200 ${burgerClass} ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 transition-opacity duration-200 ${burgerClass} ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 transition-transform duration-200 ${burgerClass} ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className={`fixed inset-x-3 z-40 overflow-hidden rounded-2xl border shadow-2xl md:hidden ${
            scrolled
              ? 'top-[4.25rem] border-ink-200 bg-white sm:top-[4.75rem]'
              : 'top-[4.5rem] border-white/20 bg-ink-950/90 backdrop-blur-xl sm:top-20'
          }`}
        >
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-3 text-base font-medium ${
                  scrolled
                    ? 'text-ink-700 active:bg-brand-50 active:text-brand-600'
                    : 'text-white/90 active:bg-white/10 active:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#early-access"
              className="mt-1 rounded-full bg-brand-500 px-5 py-3 text-center text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </>
  )
}

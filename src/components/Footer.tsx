import { navLinks } from '../data/content'
import { Link } from '../router'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-800 bg-ink-950 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] lg:py-16">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div className="sm:col-span-2">
            <a href="#" className="inline-block">
              <Logo variant="white" className="h-10 sm:h-11" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              AI-powered veterinary clinic management software. Helping clinics deliver better
              care through smarter workflows and clinical decision support.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#early-access"
                  className="text-sm text-white/60 transition-colors hover:text-brand-400"
                >
                  Early Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@vetcron.com"
                  className="text-sm text-white/60 transition-colors hover:text-brand-400"
                >
                  hello@vetcron.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {currentYear} VETCron. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link to="/privacy" className="transition-colors hover:text-brand-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-brand-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

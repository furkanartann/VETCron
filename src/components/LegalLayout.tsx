import type { ReactNode } from 'react'
import { Link } from '../router'
import Logo from './Logo'

type LegalLayoutProps = {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-ink-200 bg-white">
        <div className="section-container flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 sm:h-9" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-600"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="section-container py-12 sm:py-16 lg:py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: {lastUpdated}</p>
          <div className="legal-prose mt-10">{children}</div>
        </article>
      </main>

      <footer className="border-t border-ink-200 bg-ink-50 py-8">
        <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-ink-500">&copy; {new Date().getFullYear()} VETCron. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-ink-600 hover:text-brand-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ink-600 hover:text-brand-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

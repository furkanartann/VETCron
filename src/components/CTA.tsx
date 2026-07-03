import { useState, type FormEvent } from 'react'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [clinicName, setClinicName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email && clinicName) {
      setSubmitted(true)
    }
  }

  return (
    <section id="early-access" className="section-alt section-padding">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-6 sm:rounded-3xl sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Early Access
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Be Among the First Clinics to Try VETCron
            </h2>
            <p className="mt-4 text-base text-white/60 sm:text-lg">
              We&apos;re actively building VETCron and looking for forward-thinking veterinary
              clinics to join our early access program. Get priority onboarding, exclusive pricing,
              and a direct line to our product team.
            </p>

            {submitted ? (
              <div className="mt-10 rounded-2xl border border-brand-500/30 bg-brand-500/10 p-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20">
                  <svg className="h-7 w-7 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">You&apos;re on the list!</h3>
                <p className="mt-2 text-white/60">
                  Thank you for your interest. We&apos;ll reach out to{' '}
                  <span className="text-brand-400">{email}</span> when early access opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
                <div>
                  <label htmlFor="clinic-name" className="mb-2 block text-sm font-medium text-white/80">
                    Clinic Name
                  </label>
                  <input
                    id="clinic-name"
                    type="text"
                    required
                    value={clinicName}
                    onChange={(e) => setClinicName(e.target.value)}
                    placeholder="Sunrise Veterinary Clinic"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourclinic.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-500 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600"
                >
                  Join Early Access Waitlist
                </button>
                <p className="text-center text-xs text-white/40">
                  No spam. We&apos;ll only contact you about VETCron early access updates.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {[
            {
              title: 'Built for Clinics',
              desc: 'Every feature is designed around real veterinary workflows — from intake to checkout.',
            },
            {
              title: 'AI-Assisted Care',
              desc: 'Get diagnosis and treatment suggestions during consultations, right when you need them.',
            },
            {
              title: 'Currently in Development',
              desc: 'We are actively building VETCron. Join early access to try it first and help shape the product.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-6 text-center">
              <h3 className="font-semibold text-brand-600">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

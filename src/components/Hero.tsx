import { stats } from '../data/content'
import DashboardMockup from './DashboardMockup'

const HERO_VIDEO = '/vetcron-hero.webm'

export default function Hero() {
  return (
    <>
      {/* Hero — min viewport height, video covers entire area */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <div className="hero-bg" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={HERO_VIDEO} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-ink-950/40" />
        </div>

        <div className="relative z-10 w-full section-container px-4 py-20 pt-28 sm:px-6 sm:py-24 sm:pt-32 lg:px-8 lg:py-28 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              <span className="text-left leading-snug sm:text-center">
                <span className="sm:hidden">In Active Development</span>
                <span className="hidden sm:inline">
                  Currently in Active Development — Early Access Opening Soon
                </span>
              </span>
            </div>

            <h1 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-md min-[400px]:text-3xl sm:text-4xl sm:leading-tight lg:text-5xl xl:text-6xl">
              The AI-Powered Clinic Management Platform{' '}
              <span className="text-brand-400">Built for Veterinarians</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:text-xl">
              VETCron helps veterinary clinics manage patients, appointments, and billing — while
              AI assists with diagnosis, treatment planning, and faster patient intake. Less
              paperwork, more care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href="#early-access"
                className="w-full rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition-all hover:bg-brand-600 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Join Early Access Waitlist
              </a>
              <a
                href="#features"
                className="w-full rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-4 px-2 text-xs leading-relaxed text-white/70 sm:text-sm">
              Patient records · Appointments · AI-assisted care
            </p>
          </div>
        </div>
      </section>

      {/* Impact stats — with section heading */}
      <section id="impact" className="bg-white pt-20 sm:pt-24 lg:pt-28">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Why VETCron
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl lg:text-4xl">
              Smarter Workflows,{' '}
              <span className="text-gradient">Real Results</span>
            </h2>
            <p className="mt-4 text-base text-ink-600 sm:text-lg">
              Designed to reduce admin overhead and help your team spend more time with patients.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 min-[480px]:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-5 text-center shadow-md sm:p-6">
                <div className="text-2xl font-bold text-brand-600 sm:text-3xl">{stat.value}</div>
                <div className="mt-1.5 text-xs text-ink-600 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="relative bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-32 lg:pt-24">
        <div className="section-container">
          <DashboardMockup />
        </div>
      </section>
    </>
  )
}

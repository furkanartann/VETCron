const CLINIC_NAME = 'Sunrise Veterinary Clinic'

const navItems = [
  { label: 'Dashboard', active: true, icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z' },
  { label: 'Patients', active: false, icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' },
  { label: 'Appointments', active: false, icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5' },
  { label: 'AI Assistant', active: false, icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z' },
  { label: 'Billing', active: false, icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25m-17.25 0h17.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.75A1.125 1.125 0 0 1 2.625 18v-9.75A1.125 1.125 0 0 1 3.75 4.5Z' },
]

const dashStats = [
  { label: 'Appointments', value: '24', change: '+3', color: 'bg-blue-500' },
  { label: 'Patients', value: '1,284', change: '+12', color: 'bg-brand-500' },
  { label: 'Revenue', value: '₺18.4K', change: '+8%', color: 'bg-emerald-500' },
]

const appointments = [
  { time: '09:00', pet: 'Max', breed: 'Golden Retriever', owner: 'Sarah K.', type: 'Check-up', status: 'confirmed' },
  { time: '09:45', pet: 'Luna', breed: 'British Shorthair', owner: 'Emre Y.', type: 'Vaccination', status: 'confirmed' },
  { time: '10:30', pet: 'Rocky', breed: 'German Shepherd', owner: 'Aylin D.', type: 'Surgery Follow-up', status: 'in-progress' },
]

const diagnoses = [
  { name: 'Bacterial Infection', confidence: 87, color: 'bg-brand-500' },
  { name: 'Viral Gastroenteritis', confidence: 62, color: 'bg-amber-500' },
  { name: 'Systemic Inflammation', confidence: 41, color: 'bg-ink-300' },
]

const mobileAppointments = [
  { time: '09:00', pet: 'Max', type: 'Check-up', status: 'Confirmed' },
  { time: '09:45', pet: 'Luna', type: 'Vaccination', status: 'Confirmed' },
  { time: '10:30', pet: 'Rocky', type: 'Follow-up', status: 'Active' },
]

function NavIcon({ d }: { d: string }) {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

function SidebarBrand() {
  return (
    <div className="mb-5 flex flex-col gap-1.5 border-b border-ink-200/80 pb-4 px-1">
      <img src="/vetcron-logo.png" alt="VETCron" className="h-7 w-auto rounded-sm" />
      <span className="text-[10px] font-medium leading-tight text-ink-500">{CLINIC_NAME}</span>
    </div>
  )
}

function DesktopMockup() {
  return (
    <div className="min-w-[720px] card overflow-hidden shadow-2xl shadow-ink-900/15 ring-1 ring-ink-200/80">
      <div className="flex items-center gap-3 border-b border-ink-200 bg-ink-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto flex h-7 max-w-md flex-1 items-center rounded-md border border-ink-200 bg-white px-3">
          <svg className="mr-2 h-3 w-3 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4h8Z" />
          </svg>
          <span className="truncate text-[10px] text-ink-400">app.vetcron.com/clinic/dashboard</span>
        </div>
      </div>

      <div className="flex min-h-[420px] bg-white">
        <aside className="hidden w-44 shrink-0 border-r border-ink-100 bg-ink-50/70 p-3 sm:block">
          <SidebarBrand />
          <nav className="space-y-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  item.active
                    ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/30'
                    : 'text-ink-600'
                }`}
              >
                <NavIcon d={item.icon} />
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-ink-100 px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-ink-900 sm:text-xs">Good morning, Dr. Arslan</p>
              <p className="truncate text-[9px] text-ink-500 sm:text-[10px]">Saturday, July 4 · 8 appointments remaining</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-7 w-32 items-center rounded-lg border border-ink-200 bg-ink-50 px-2 sm:flex">
                <svg className="mr-1.5 h-3 w-3 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <span className="text-[10px] text-ink-400">Search patients...</span>
              </div>
              <div className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 bg-white">
                <svg className="h-3.5 w-3.5 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-500 text-[8px] font-bold text-white">
                  3
                </span>
              </div>
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
            </div>
          </div>

          <div className="grid gap-3 p-3 lg:grid-cols-12">
            <div className="grid grid-cols-3 gap-2 lg:col-span-7">
              {dashStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-ink-100 bg-ink-50/50 p-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${stat.color}`} />
                    <p className="text-[9px] text-ink-500">{stat.label}</p>
                  </div>
                  <p className="mt-1 text-sm font-bold text-ink-900">{stat.value}</p>
                  <p className="text-[9px] font-medium text-emerald-600">{stat.change}</p>
                </div>
              ))}

              <div className="col-span-3 rounded-xl border border-ink-100 bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-ink-900">Today&apos;s Schedule</p>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-medium text-brand-700">
                    Live
                  </span>
                </div>
                <div className="space-y-1.5">
                  {appointments.map((apt) => (
                    <div
                      key={apt.time}
                      className="flex items-center gap-2 rounded-lg border border-ink-50 bg-ink-50/40 px-2 py-1.5"
                    >
                      <span className="w-9 shrink-0 text-[10px] font-semibold text-brand-600">{apt.time}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-medium text-ink-900">
                          {apt.pet} · {apt.breed}
                        </p>
                        <p className="truncate text-[9px] text-ink-500">{apt.owner} · {apt.type}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                          apt.status === 'in-progress'
                            ? 'bg-brand-100 text-brand-700'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {apt.status === 'in-progress' ? 'Active' : 'Confirmed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="animate-fade-in-up h-full rounded-xl border border-brand-200 bg-gradient-to-b from-brand-50/80 to-white p-3 shadow-sm shadow-brand-500/5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-pulse rounded-full bg-emerald-400 ring-2 ring-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-ink-900">AI Clinical Assistant</p>
                      <p className="text-[9px] text-brand-600">Analyzing patient data...</p>
                    </div>
                  </div>
                  <span className="animate-pulse-soft rounded-full bg-brand-500 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                    Active
                  </span>
                </div>

                <div className="mb-2.5 rounded-lg border border-ink-100 bg-white p-2.5">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm">
                      🐕
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold text-ink-900">Max — Golden Retriever</p>
                      <p className="text-[9px] text-ink-500">4 yrs · 32 kg · Male · ID #2847</p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {['Lethargy', 'Fever 39.4°C', 'Low appetite'].map((tag) => (
                          <span key={tag} className="rounded-md bg-red-50 px-1.5 py-0.5 text-[8px] font-medium text-red-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-2.5 rounded-lg border border-ink-100 bg-white p-2.5">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-ink-500">
                    Differential Diagnosis
                  </p>
                  <div className="space-y-2">
                    {diagnoses.map((dx, i) => (
                      <div key={dx.name} className="animate-slide-in" style={{ animationDelay: `${i * 200}ms` }}>
                        <div className="mb-0.5 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-ink-800">{dx.name}</span>
                          <span className="text-[9px] font-bold text-brand-600">{dx.confidence}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-ink-100">
                          <div
                            className={`h-full rounded-full ${dx.color} animate-grow-bar`}
                            style={{ width: `${dx.confidence}%`, animationDelay: `${300 + i * 200}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-brand-100 bg-brand-50/50 p-2.5">
                  <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-brand-700">
                    Recommended Actions
                  </p>
                  <ul className="space-y-1">
                    {[
                      'CBC + chemistry panel — priority',
                      'Supportive IV fluids — 24h monitoring',
                      'Recheck temperature in 48 hours',
                    ].map((item, i) => (
                      <li
                        key={item}
                        className="animate-fade-in flex items-start gap-1.5 text-[9px] text-ink-700"
                        style={{ animationDelay: `${600 + i * 150}ms` }}
                      >
                        <svg className="mt-0.5 h-3 w-3 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockupFrame({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[200px] sm:max-w-[220px] ${className}`}>
      <div className="rounded-[1.75rem] border-[3px] border-ink-900 bg-ink-900 p-1 shadow-2xl shadow-ink-900/25">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-ink-50">
          <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-ink-900" />

          <div className="flex items-center justify-between bg-ink-950 px-4 pb-1 pt-6">
            <span className="text-[8px] font-medium text-white">9:41</span>
            <div className="flex gap-0.5">
              <div className="h-1.5 w-3 rounded-sm bg-white/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
            </div>
          </div>

          {/* Clinic header */}
          <div className="border-b border-ink-200 bg-white px-3 py-2.5">
            <img src="/vetcron-logo.png" alt="VETCron" className="h-4 rounded-sm" />
            <p className="mt-1 text-[7px] font-medium text-ink-500">{CLINIC_NAME}</p>
            <p className="mt-1.5 text-[9px] font-bold text-ink-900">Clinic Dashboard</p>
            <p className="text-[7px] text-ink-500">Saturday · 8 appointments left</p>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-1 p-2">
            {[
              { label: 'Today', value: '24' },
              { label: 'Patients', value: '1.2K' },
              { label: 'Revenue', value: '₺18K' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-ink-100 bg-white p-1.5 text-center">
                <p className="text-[8px] font-bold text-brand-600">{s.value}</p>
                <p className="text-[6px] text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Appointments */}
          <div className="mx-2 mb-2 rounded-lg border border-ink-100 bg-white p-2">
            <p className="mb-1.5 text-[7px] font-bold uppercase tracking-wide text-ink-500">
              Today&apos;s Schedule
            </p>
            <div className="space-y-1">
              {mobileAppointments.map((apt) => (
                <div key={apt.time} className="flex items-center gap-1.5 rounded-md bg-ink-50 px-1.5 py-1">
                  <span className="w-7 shrink-0 text-[7px] font-bold text-brand-600">{apt.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[7px] font-semibold text-ink-900">{apt.pet}</p>
                    <p className="truncate text-[6px] text-ink-500">{apt.type}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded px-1 py-0.5 text-[5px] font-bold ${
                      apt.status === 'Active'
                        ? 'bg-brand-100 text-brand-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="mx-2 mb-2 flex gap-1">
            {['+ Patient', 'Calendar', 'Records'].map((action) => (
              <div
                key={action}
                className="flex-1 rounded-md border border-ink-100 bg-white py-1 text-center text-[6px] font-medium text-ink-700"
              >
                {action}
              </div>
            ))}
          </div>

          {/* Bottom nav — Dashboard active */}
          <div className="flex justify-around border-t border-ink-200 bg-white px-2 py-2">
            {[
              { label: 'Dashboard', active: true },
              { label: 'Patients', active: false },
              { label: 'Schedule', active: false },
              { label: 'More', active: false },
            ].map((tab) => (
              <div key={tab.label} className="flex flex-col items-center gap-0.5">
                <div className={`h-1 w-1 rounded-full ${tab.active ? 'bg-brand-500' : 'bg-ink-300'}`} />
                <span className={`text-[6px] font-medium ${tab.active ? 'text-brand-600' : 'text-ink-400'}`}>
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockupFloating() {
  return (
    <div className="pointer-events-none absolute -right-2 -bottom-6 z-10 hidden w-[148px] lg:block xl:-right-6 xl:w-[160px]">
      <MobileMockupFrame />
    </div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto mt-10 max-w-6xl sm:mt-16">
      <div className="mb-4 flex flex-col items-center justify-center gap-2 px-2 text-center sm:flex-row">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Product Preview
        </span>
        <span className="text-xs text-ink-500">Desktop & Mobile · Clinic Management Panel</span>
      </div>

      <div className="mb-8 flex flex-col items-center lg:hidden">
        <p className="mb-4 text-xs font-medium text-ink-500">Mobile Clinic Panel</p>
        <MobileMockupFrame />
      </div>

      <div className="relative">
        <p className="scroll-hint mb-3 lg:hidden">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Swipe to explore dashboard
        </p>
        <div className="mockup-scroll">
          <DesktopMockup />
        </div>
        <MobileMockupFloating />
      </div>
    </div>
  )
}

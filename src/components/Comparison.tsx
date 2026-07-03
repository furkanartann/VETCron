import { comparisonRows } from '../data/content'

function StatusIcon({ value, size = 'md' }: { value: boolean | string; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'
  const icon = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  if (value === true) {
    return (
      <span className={`inline-flex ${dim} items-center justify-center rounded-full bg-brand-100 text-brand-600`}>
        <svg className={icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    )
  }
  if (value === 'partial') {
    return (
      <span className={`inline-flex ${dim} items-center justify-center rounded-full bg-amber-100 text-amber-600`}>
        <svg className={icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      </span>
    )
  }
  return (
    <span className={`inline-flex ${dim} items-center justify-center rounded-full bg-red-50 text-red-400`}>
      <svg className={icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </span>
  )
}

function MobileComparisonCards() {
  return (
    <div className="mt-10 space-y-3 md:hidden">
      {comparisonRows.map((row) => (
        <div key={row.feature} className="card p-4">
          <p className="mb-3 text-sm font-semibold text-ink-900">{row.feature}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center rounded-xl bg-brand-50 px-3 py-3">
              <span className="mb-2 text-[10px] font-bold uppercase tracking-wide text-brand-600">VETCron</span>
              <StatusIcon value={row.vetcron} size="sm" />
            </div>
            <div className="flex flex-col items-center rounded-xl bg-ink-50 px-3 py-3">
              <span className="mb-2 text-[10px] font-bold uppercase tracking-wide text-ink-500">Legacy</span>
              <StatusIcon value={row.legacy} size="sm" />
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] text-ink-500">
        <span className="flex items-center gap-1.5">
          <StatusIcon value={true} size="sm" />
          Supported
        </span>
        <span className="flex items-center gap-1.5">
          <StatusIcon value="partial" size="sm" />
          Limited
        </span>
        <span className="flex items-center gap-1.5">
          <StatusIcon value={false} size="sm" />
          None
        </span>
      </div>
    </div>
  )
}

export default function Comparison() {
  return (
    <section id="compare" className="section-alt section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Why VETCron
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            Built for Today,{' '}
            <span className="text-gradient">Not Yesterday</span>
          </h2>
          <p className="mt-4 text-base text-ink-600 sm:text-lg">
            See how VETCron compares to traditional veterinary clinic software — and why clinics
            are ready for a smarter alternative.
          </p>
        </div>

        <MobileComparisonCards />

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-lg shadow-ink-900/5 md:mt-16 md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-ink-200 bg-ink-950">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-white/80">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-brand-400">VETCron</span>
                      <span className="text-xs text-white/50">Modern · AI-powered</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-semibold text-white/60">
                        Legacy Software
                      </span>
                      <span className="text-xs text-white/40">Traditional · On-premise</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-ink-100 ${index % 2 === 0 ? 'bg-ink-50/50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-ink-800">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <StatusIcon value={row.vetcron} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <StatusIcon value={row.legacy} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 border-t border-ink-200 bg-ink-50 px-6 py-4 text-xs text-ink-500">
            <span className="flex items-center gap-2">
              <StatusIcon value={true} />
              Fully supported
            </span>
            <span className="flex items-center gap-2">
              <StatusIcon value="partial" />
              Limited / outdated
            </span>
            <span className="flex items-center gap-2">
              <StatusIcon value={false} />
              Not available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

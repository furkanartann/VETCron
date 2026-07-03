import { aiCapabilities } from '../data/content'

export default function AISection() {
  return (
    <section id="ai-assistant" className="relative section-padding">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white" />

      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              AI Clinical Assistant
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              Smarter Decisions,{' '}
              <span className="text-gradient">Faster Consultations</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              VETCron&apos;s AI engine supports veterinarians during every stage of the clinical
              workflow — from intake to diagnosis to treatment planning. It&apos;s not a
              replacement for your expertise; it&apos;s the tool that amplifies it.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-800">Important Disclaimer</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                VETCron AI provides clinical decision support only. All diagnoses and treatment
                decisions remain the responsibility of the licensed veterinarian. AI suggestions
                should always be validated against professional judgment and current standards of
                care.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {aiCapabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="card card-hover flex gap-5 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-sm font-bold text-brand-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { faqs } from '../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-ink-600 sm:text-lg">
            Everything you need to know about VETCron and our early access program.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`card overflow-hidden transition-all ${isOpen ? 'border-brand-200 shadow-md shadow-brand-500/5' : ''}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-ink-900 sm:text-base">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-sm leading-relaxed text-ink-600 sm:px-6 sm:pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Element 72 Vitality',
  description: 'Answers to common questions about shilajit, black seed oil, our sourcing standards, and when products will be available.',
}

export default function FaqPage() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <div className="mb-16">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Knowledge</p>
          <h1 className="font-serif text-4xl text-cream mb-4">Frequently Asked Questions</h1>
          <p className="font-sans text-cream/70 text-sm leading-relaxed">
            Everything you need to know about our products, sourcing, and standards.
          </p>
        </div>

        <FaqAccordion />

        <div className="mt-20 pt-12 border-t border-cream/[0.08]">
          <p className="font-sans text-cream/70 text-sm">
            Still have a question?{' '}
            <a href="/contact" className="text-gold hover:text-cream transition-colors duration-200">
              Contact us
            </a>
            {' '}and we will respond within 24 hours.
          </p>
        </div>

      </div>
    </div>
  )
}

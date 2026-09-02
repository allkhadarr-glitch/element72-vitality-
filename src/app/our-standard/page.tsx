import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Standard — Element 72 Vitality',
  description: 'How we source, test, and certify every Element 72 product.',
}

const standards = [
  {
    number: '01', label: 'Single-Origin', heading: 'You know exactly where it came from.',
    body: [
      'Every Element 72 product traces to a specific, named source — not a region, a farm. Not a country, a supplier. We know the altitude, the harvest season, the processing method. That specificity is the foundation of accountability.',
      'If we cannot trace the origin of something, we do not sell it. This rules out a significant portion of the supplement market, where ingredients are pooled from multiple undisclosed suppliers and sold under vague geographic labels.',
      'Our sourcing documentation is available on request for every product.',
    ],
  },
  {
    number: '02', label: 'Third-Party Tested', heading: 'A Certificate of Analysis for every batch.',
    body: [
      'We do not test our own products. We send every batch to an independent, NABL-accredited laboratory and publish the results.',
      'What we test for depends on the product, but always includes: heavy metals (lead, mercury, arsenic, cadmium), microbial safety, and potency markers specific to the product.',
      'The Certificate of Analysis is included in every order and available on our website. If a batch fails, it does not ship.',
    ],
  },
  {
    number: '03', label: 'Properly Certified', heading: 'No shortcuts on Kenya certification.',
    body: [
      'Kenya has a regulatory framework for food supplements governed by KEBS — the Kenya Bureau of Standards. The process involves technical documentation, facility inspection, and product testing before any permit is issued.',
      'We go through this process properly — through Teleo Lab, our technical and regulatory partner. We do not source, repackage, and sell products that have not cleared Kenyan regulatory requirements.',
      'This is not the easiest path. But it is the only credible one.',
    ],
  },
  {
    number: '04', label: 'Earth-Derived', heading: 'Ancient. Not artificial.',
    body: [
      'Every product in the Element 72 range is a naturally occurring substance with centuries of documented human use. We are not formulating supplements in a laboratory.',
      'This means we will never add synthetic fillers, artificial preservatives, or proprietary blends that obscure individual ingredient amounts. What is in the product is what we say is in the product.',
    ],
  },
]

export default function OurStandardPage() {
  return (
    <div className="bg-earth">

      {/* ── HERO ── */}
      <section className="relative px-6 pt-20 pb-28 md:pt-28 md:pb-40 border-b border-cream/[0.06] overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute select-none pointer-events-none font-serif leading-none right-[-2%] bottom-[-5%] text-cream/[0.025]"
          style={{ fontSize: 'clamp(12rem, 28vw, 20rem)' }}
        >
          72
        </span>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8 animate-fade-up delay-100">
            Our Standard
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,8vw,7rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200 max-w-4xl">
            We hold ourselves<br />to a higher standard.
          </h1>
          <p className="font-sans text-cream/55 text-[1rem] leading-[1.85] max-w-xl animate-fade-up delay-300">
            The wellness industry has a transparency problem. Vague sourcing, proprietary blends, and unverifiable claims are the norm. We built Element 72 to be the exception.
          </p>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      {standards.map((s, i) => (
        <section
          key={s.number}
          className={`px-6 py-24 md:py-40 border-b border-cream/[0.06] ${i % 2 === 1 ? 'bg-earth-card' : 'bg-earth'}`}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12 md:gap-20">
            <div className="reveal">
              <span className="font-serif text-[5rem] leading-none text-cream/[0.04] block mb-3">{s.number}</span>
              <div className="w-6 h-px bg-gold/35 mb-4" />
              <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase">{s.label}</p>
            </div>
            <div className="reveal reveal-d2">
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-cream leading-[1.15] mb-10">{s.heading}</h2>
              <div className="flex flex-col gap-6">
                {s.body.map((para, j) => (
                  <p key={j} className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CLOSE ── */}
      <section className="px-6 py-28 md:py-44 bg-earth-card">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="font-sans text-[10px] tracking-[0.45em] text-gold uppercase mb-10">The bottom line</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-cream leading-[1.1] mb-8">
            This is what it means<br />to do it properly.
          </h2>
          <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] mb-14 max-w-lg mx-auto">
            It takes longer. It costs more. But a product you can actually trust is worth more than one that just claims to be trustworthy.
          </p>
          <Link
            href="/#join"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.4em] uppercase text-cream/40 hover:text-gold transition-colors duration-300"
          >
            Join the Waitlist <span className="font-serif text-base">→</span>
          </Link>
        </div>
      </section>

    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Standard — Element 72 Vitality',
  description: 'How we source, test, and certify every Element 72 product. Single-origin, third-party tested, KEBS certified.',
}

const standards = [
  {
    number: '01',
    label: 'Single-Origin',
    heading: 'You know exactly where it came from.',
    body: [
      'Every Element 72 product traces to a specific, named source — not a region, a farm. Not a country, a supplier. We know the altitude, the harvest season, the processing method. That specificity is not marketing language. It is the foundation of accountability.',
      'If we cannot trace the origin of something, we do not sell it. This rules out a significant portion of the supplement market, where ingredients are pooled from multiple undisclosed suppliers and sold under vague geographic labels.',
      'Our sourcing documentation is available on request for every product.',
    ],
  },
  {
    number: '02',
    label: 'Third-Party Tested',
    heading: 'A Certificate of Analysis for every batch.',
    body: [
      'We do not test our own products. We send every batch to an ISO 17025 accredited laboratory — the international standard for testing and calibration competence — and publish the results.',
      'What we test for depends on the product, but always includes: heavy metals (lead, mercury, arsenic, cadmium), microbial safety (total plate count, E. coli, Salmonella), and potency markers specific to the product (fulvic acid content for shilajit, thymoquinone content for black seed oil).',
      'The Certificate of Analysis is included in every order and available on our website. If a batch fails, it does not ship.',
    ],
  },
  {
    number: '03',
    label: 'Properly Certified',
    heading: 'No shortcuts on Kenya certification.',
    body: [
      'Kenya has a regulatory framework for food supplements governed by KEBS — the Kenya Bureau of Standards. The process involves technical documentation, facility inspection, and product testing before any permit is issued.',
      'We go through this process properly — through Teleo Lab, our technical and regulatory partner. We do not source, repackage, and sell products that have not cleared Kenyan regulatory requirements.',
      'This is not the easiest path. But it is the only credible one for a brand that takes consumer safety seriously.',
    ],
  },
  {
    number: '04',
    label: 'Earth-Derived',
    heading: 'Ancient. Not artificial.',
    body: [
      'Every product in the Element 72 range is a naturally occurring substance with centuries of documented human use. We are not formulating supplements in a laboratory. We are sourcing substances that exist in nature, that humans have used for generations, and bringing them to you with modern testing and transparency standards.',
      'This means we will never add synthetic fillers, artificial preservatives, or proprietary blends that obscure individual ingredient amounts. What is in the product is what we say is in the product. Nothing more.',
    ],
  },
]

export default function OurStandardPage() {
  return (
    <div className="bg-obsidian">

      {/* ── HERO ── */}
      <section className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-36 border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gold/[0.02] blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-10 animate-fade-up delay-100">
            Our Standard
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,8vw,6rem)] text-ivory leading-none tracking-tight mb-10 animate-fade-up delay-200 max-w-3xl">
            We hold ourselves to a higher standard.
          </h1>
          <p className="font-sans text-ivory/35 text-lg leading-relaxed max-w-xl animate-fade-up delay-300">
            The wellness industry has a transparency problem. Vague sourcing, proprietary blends,
            and unverifiable claims are the norm. We built Element 72 to be the exception.
          </p>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      {standards.map((s, i) => (
        <section
          key={s.number}
          className="px-6 py-20 md:py-32 border-b border-white/[0.06]"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">

            <div className="reveal">
              <span className="font-serif text-[5rem] text-white/[0.04] leading-none block mb-2">{s.number}</span>
              <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase">{s.label}</p>
            </div>

            <div className="reveal reveal-d2">
              <h2 className="font-serif text-2xl md:text-3xl text-ivory leading-snug mb-8">
                {s.heading}
              </h2>
              <div className="flex flex-col gap-5">
                {s.body.map((para, j) => (
                  <p key={j} className="font-sans text-ivory/38 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CLOSE ── */}
      <section className="px-6 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-8">
            This is what it means to do it properly.
          </h2>
          <p className="font-sans text-ivory/35 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            It takes longer. It costs more. But a product that you can actually trust
            is worth more than a product that just claims to be trustworthy.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block font-sans text-[10px] tracking-[0.35em] uppercase text-obsidian bg-gold hover:bg-gold-light px-10 py-4 transition-colors duration-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>

    </div>
  )
}

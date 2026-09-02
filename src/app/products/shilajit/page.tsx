import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Shilajit Resin — Element 72 Vitality',
  description: 'Single-origin Himalayan shilajit resin. Up to 72 trace minerals in fulvic acid-bound, bioavailable form. Third-party tested. Kenya certified.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Element 72 Shilajit Resin',
  description: 'Single-origin Himalayan shilajit resin with up to 72 trace minerals in fulvic acid-bound, bioavailable form. Third-party tested.',
  brand: { '@type': 'Brand', name: 'Element 72 Vitality' },
  url: 'https://element72vitality.com/products/shilajit',
  image: 'https://element72vitality.com/opengraph-image.png',
  category: 'Food Supplement',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'KES',
    seller: { '@type': 'Organization', name: 'Element 72 Vitality' },
  },
}

const compounds = [
  { name: 'Fulvic Acid', pct: 'Present', role: 'The carrier molecule. Binds minerals and transports them across cell membranes.' },
  { name: 'Humic Acid', pct: '15–30%', role: 'Supports gut microbiome and mineral absorption.' },
  { name: 'Trace Minerals', pct: '72+', role: 'Iron, zinc, magnesium, copper, selenium — in their most bioavailable organic form.' },
  { name: 'Dibenzo-α-pyrones', pct: 'Trace', role: 'Mitochondrial cofactors. Subject of ongoing clinical research.' },
]

const ritual = [
  { step: '01', title: 'The amount', body: 'A rice-grain sized portion — approximately 300–500mg. No more. Shilajit is dense; a small amount is correct.' },
  { step: '02', title: 'The preparation', body: 'Dissolve in warm (not boiling) water, milk, or herbal tea. Stir until fully dissolved — 30 seconds. It should turn the liquid dark amber.' },
  { step: '03', title: 'The timing', body: 'Take on an empty stomach in the morning. This is when mineral absorption is highest and the body is most receptive.' },
  { step: '04', title: 'The consistency', body: 'Daily use for a minimum of 30 days before evaluating. Mineral replenishment is cumulative — this is not an acute supplement.' },
]

const labTests = [
  { parameter: 'Lead (Pb)',           category: 'Heavy Metals', tooltip: 'High-altitude tectonic extraction carries lead risk. This screen confirms zero contamination before the resin leaves origin.' },
  { parameter: 'Mercury (Hg)',        category: 'Heavy Metals', tooltip: 'Industrial and geological mercury presence in raw resin is a known risk. Verified absent in every batch.' },
  { parameter: 'Arsenic (As)',        category: 'Heavy Metals', tooltip: 'Mountainite deposits can carry naturally occurring arsenic. This test confirms none transfers to the final resin.' },
  { parameter: 'Cadmium (Cd)',        category: 'Heavy Metals', tooltip: 'Measured at 0.023 mg/kg against an EU maximum of 1.0 mg/kg.' },
  { parameter: 'Fulvic Acid Content', category: 'Bioactives',  tooltip: 'The primary mineral carrier molecule. Assay pending on our own commissioned test.' },
  { parameter: 'Microbial Safety',    category: 'Safety',       tooltip: 'Total plate count, E. coli, and Salmonella panel. Raw wildcrafted resin requires this before any human consumption.' },
  { parameter: 'Pesticide Residue',   category: 'Safety',       tooltip: 'High-altitude wildcrafted material carries no pesticide exposure. This test formally confirms that claim for every batch.' },
  { parameter: 'Moisture & Purity',   category: 'Purity',       tooltip: 'Verifies resin consistency and rules out adulteration with fillers, water weight, or low-grade dilutants.' },
]

export default function ShilajitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ShilajitContent />
    </>
  )
}

function ShilajitContent() {
  return (
    <div className="bg-earth">

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col justify-end px-6 pb-24 overflow-hidden border-b border-cream/[0.06]">
        <span
          aria-hidden="true"
          className="absolute select-none pointer-events-none font-serif leading-none bottom-[-4%] right-[-2%] text-cream/[0.025]"
          style={{ fontSize: 'clamp(12rem, 30vw, 22rem)' }}
        >
          01
        </span>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-8 animate-fade-up delay-100">
            Single origin &nbsp;·&nbsp; High-altitude source
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200">
            Shilajit<br />Resin
          </h1>
          <div className="flex flex-col gap-4 animate-fade-up delay-300">
            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-gold/30" />
              <p className="font-sans text-cream/55 text-[13px]">KEBS permit SM#102053 · Kenya</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['20g', 'Dark UV Glass', 'Hot Stamped', 'Rigid Box', 'QR Certified'].map(s => (
                <span key={s} className="font-sans text-[9px] tracking-[0.25em] text-cream/30 uppercase border border-cream/[0.08] px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT VISUAL ── */}
      <section className="border-b border-cream/[0.06]">
        <div className="relative bg-earth-card w-full aspect-video overflow-hidden flex items-center justify-center select-none">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(201,165,90,0.05) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 flex flex-col items-center gap-5 text-center">
            <div className="w-8 h-px bg-gold/20" />
            <div>
              <p className="font-sans text-[9px] tracking-[0.6em] text-cream/[0.12] uppercase mb-3">Element 72 Vitality</p>
              <p
                className="font-serif text-cream/[0.06]"
                style={{ fontSize: 'clamp(3.5rem,12vw,9rem)', lineHeight: 1 }}
              >
                Shilajit Resin
              </p>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/[0.08] uppercase mt-3">
                20g &nbsp;·&nbsp; Dark UV Glass
              </p>
            </div>
            <div className="w-8 h-px bg-gold/20" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-cream/[0.05]">
          {[
            { label: 'The Jar',  sub: '20g · UV Glass · Hot Stamp' },
            { label: 'The Box',  sub: 'Rigid · Black · QR Certified' },
            { label: 'The Bag',  sub: 'Hard Carrier · Black' },
          ].map(({ label, sub }) => (
            <div key={label} className="relative aspect-[3/4] overflow-hidden bg-earth-card flex flex-col justify-end p-5 md:p-6">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,165,90,0.03) 0%, transparent 70%)' }}
              />
              <p className="font-sans text-[9px] tracking-[0.35em] text-cream/30 uppercase relative z-10">{label}</p>
              <p className="font-sans text-[8px] tracking-[0.25em] text-cream/18 uppercase mt-1 relative z-10">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QR + AUTHENTICITY ── */}
      <section className="px-6 py-24 md:py-32 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-8">Verified at the box</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-cream leading-[1.1] mb-8">
              Every box ships with a QR code.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Scan it and it opens the Certificate of Analysis for your exact batch — not a template, not a summary.
              The full third-party laboratory document: heavy metals panel,
              microbial safety results. Yours to read, download, and keep.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <div className="border border-cream/[0.08] p-8 md:p-10">
              <svg width="44" height="44" viewBox="0 0 52 52" fill="none" className="text-gold/35 mb-8">
                <rect x="1" y="1" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="6" y="6" width="8" height="8" fill="currentColor" opacity="0.55"/>
                <rect x="33" y="1" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="38" y="6" width="8" height="8" fill="currentColor" opacity="0.55"/>
                <rect x="1" y="33" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <rect x="6" y="38" width="8" height="8" fill="currentColor" opacity="0.55"/>
                <line x1="33" y1="33" x2="33" y2="51" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="33" y1="33" x2="51" y2="33" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="42" y1="42" x2="51" y2="42" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="51" y1="42" x2="51" y2="51" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="42" y1="51" x2="51" y2="51" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="42" y1="42" x2="42" y2="51" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              <p className="font-sans text-[10px] tracking-[0.35em] text-cream/30 uppercase mb-4">Batch MSRB03</p>
              <p className="font-sans text-cream/55 text-sm leading-[1.8]">
                Certificate of Analysis · NABL-accredited laboratory<br />
                Heavy metals panel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">What it is</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-cream leading-[1.1] mb-8">
              Formed over centuries.<br />Found in the mountains.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Shilajit is a resinous exudate that seeps from rock fissures in high-altitude mountain ranges during warmer months. It forms over hundreds to thousands of years from the compression and decomposition of organic plant matter between layers of rock.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Why it matters</p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-6">
              Modern diets are mineral-depleted. Soil quality has declined significantly over the last century, meaning the food supply carries far fewer trace minerals than it did for previous generations.
            </p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Shilajit concentrates minerals in their organic, fulvic acid-bound form — the form the body actually absorbs. This is what separates it from synthetic mineral supplements.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE COMPOSITION ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">The Composition</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-lg leading-[1.05]">What is actually inside it.</h2>
          </div>
          <div className="divide-y divide-cream/[0.06]">
            {compounds.map((c, i) => (
              <div key={c.name} className={`py-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-16 items-start reveal reveal-d${i + 1}`}>
                <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase">{c.name}</p>
                <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">{c.role}</p>
                <p className="font-serif text-2xl text-cream/20 md:text-right">{c.pct}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE RITUAL ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">The Ritual</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-lg leading-[1.05]">How to use it. Precisely.</h2>
          </div>
          <div className="divide-y divide-cream/[0.06]">
            {ritual.map((r, i) => (
              <div key={r.step} className={`py-10 md:py-12 grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-16 items-start reveal reveal-d${i + 1}`}>
                <span className="font-sans text-[10px] tracking-[0.3em] text-gold/50">{r.step}</span>
                <p className="font-sans text-[10px] tracking-[0.3em] text-cream/50 uppercase">{r.title}</p>
                <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-sans text-cream/25 text-[11px] tracking-[0.2em] reveal">
            Consult a healthcare professional if pregnant, nursing, or on medication.
          </p>
        </div>
      </section>

      {/* ── SOURCE + TESTING ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">The Source</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-cream leading-[1.15] mb-8">
              Licensed resin manufacturer.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-5">
              Sourced from a licensed manufacturer with full traceability from high-altitude collection to purification. The laboratory drew and sealed its own sample at source.
            </p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Raw shilajit requires purification before it is safe for consumption. Our supplier performs this process before the material leaves India. We then test again independently in Kenya.
            </p>
          </div>

          <div className="reveal reveal-d2">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Lab Verification</p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-10">
              Every batch is tested at a NABL-accredited laboratory before it reaches you. The full Certificate of Analysis ships with every order via QR code.
            </p>
            <div className="border border-cream/[0.08]">
              <div className="px-6 py-4 border-b border-cream/[0.06] flex items-center justify-between">
                <p className="font-sans text-[10px] tracking-[0.3em] text-gold/70 uppercase">Eurofins Scientific</p>
                <p className="font-sans text-[9px] tracking-[0.3em] text-cream/25 uppercase">NABL</p>
              </div>
              {labTests.map((t, i) => (
                <div
                  key={i}
                  className={`group px-6 py-4 cursor-default${i < labTests.length - 1 ? ' border-b border-cream/[0.05]' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.25em] text-cream/28 uppercase mb-1">{t.category}</p>
                      <p className="font-sans text-[13px] text-cream/70">{t.parameter}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      <p className="font-sans text-[9px] tracking-[0.25em] text-gold/60 uppercase">Verified</p>
                    </div>
                  </div>
                  <p className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-3 font-sans text-[11px] text-cream/38 leading-relaxed transition-all duration-300 ease-out">
                    {t.tooltip}
                  </p>
                </div>
              ))}
              <div className="px-6 py-4 border-t border-cream/[0.06]">
                <p className="font-sans text-[9px] tracking-[0.2em] text-cream/20 uppercase">
                  Batch MSRB03 · Full CoA included with every order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="join" className="px-6 py-28 md:py-44">
        <div className="max-w-xl mx-auto text-center reveal">
          <p className="font-sans text-[10px] tracking-[0.45em] text-gold uppercase mb-8">Reserve Your Jar</p>

          <div className="inline-flex items-center gap-3 border border-gold/15 px-5 py-2.5 mb-12">
            <div className="w-1 h-1 rounded-full bg-gold/60" />
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold/60 uppercase">First batch · 100 jars</p>
          </div>

          <h2 className="font-serif text-[clamp(2.2rem,6vw,4rem)] text-cream mb-6 leading-[1.05]">
            First batch.<br />Limited quantity.
          </h2>
          <p className="font-sans text-cream/55 text-[1rem] mb-8 leading-[1.85] max-w-md mx-auto">
            Waitlist members get 48-hour early access, the full Certificate of Analysis for Batch MSRB03, and complete sourcing documentation before the product is listed publicly.
          </p>

          <div className="flex items-center justify-center gap-10 mb-12 flex-wrap">
            {[['20g', 'Per jar'], ['NABL', 'Lab accreditation'], ['SM#102053', 'KEBS permit']].map(([val, label]) => (
              <div key={val} className="text-center">
                <p className="font-sans text-[12px] tracking-[0.2em] text-cream/60 uppercase mb-1.5">{val}</p>
                <p className="font-sans text-[9px] tracking-[0.3em] text-cream/28 uppercase">{label}</p>
              </div>
            ))}
          </div>

          <SubscribeForm className="max-w-sm mx-auto" />

          <p className="mt-8 font-sans text-[10px] tracking-[0.25em] text-cream/25 uppercase">
            No payment now &nbsp;·&nbsp; Notified at launch &nbsp;·&nbsp; Unsubscribe anytime
          </p>
        </div>
      </section>

    </div>
  )
}

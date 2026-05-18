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
  { name: 'Fulvic Acid', pct: '40–60%', role: 'The carrier molecule. Binds minerals and transports them across cell membranes.' },
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
  { parameter: 'Cadmium (Cd)',        category: 'Heavy Metals', tooltip: 'Cadmium accumulates in organic matter over centuries of compression. Absence is confirmed at ISO 17025 standard.' },
  { parameter: 'Fulvic Acid Content', category: 'Bioactives',  tooltip: 'The primary mineral carrier molecule. Minimum 40% is required for therapeutic-grade classification — the benchmark we hold.' },
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
      <section className="relative min-h-[75vh] flex flex-col justify-end px-6 pb-20 overflow-hidden border-b border-cream/[0.08]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.05] blur-[130px]" />
        </div>
        <span className="absolute font-serif font-bold select-none pointer-events-none leading-none bottom-0 right-0 text-[30vw] text-cream/[0.03]">01</span>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6 animate-fade-up delay-100">
            36°N 74°E &nbsp;·&nbsp; Himalayan Mountains &nbsp;·&nbsp; Punjab, India
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] text-cream leading-none tracking-tight mb-6 animate-fade-up delay-200">
            Shilajit<br />Resin
          </h1>
          <div className="flex flex-col gap-4 animate-fade-up delay-300">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-gold/40" />
              <p className="font-sans text-cream/70 text-sm tracking-wide">Certification in process · Kenya (KEBS)</p>
            </div>
            <p className="font-sans text-[8px] tracking-[0.42em] text-cream/30 uppercase">
              20g &nbsp;·&nbsp; Dark UV Glass &nbsp;·&nbsp; Hot Stamped &nbsp;·&nbsp; Rigid Box &nbsp;·&nbsp; QR Certified
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT VISUAL ── */}
      <section className="border-b border-cream/[0.08]">

        {/* Primary — full-width product hero */}
        <div className="relative bg-parchment w-full aspect-video overflow-hidden flex items-center justify-center select-none">
          {/* When photo is ready: <Image src="/images/shilajit-hero.jpg" fill alt="Shilajit Resin — 20g dark UV glass jar" className="object-cover object-center" priority /> */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-8 h-px bg-earth/10" />
            <div>
              <p className="font-sans text-[7px] tracking-[0.9em] text-earth/25 uppercase mb-3">Element 72 Vitality</p>
              <p className="font-serif text-earth/[0.07]" style={{ fontSize: 'clamp(3.5rem,12vw,9rem)', lineHeight: 1 }}>Shilajit Resin</p>
              <p className="font-sans text-[7px] tracking-[0.55em] text-earth/18 uppercase mt-3">
                20g &nbsp;·&nbsp; Dark UV Glass &nbsp;·&nbsp; Hot Stamped
              </p>
            </div>
            <div className="w-8 h-px bg-earth/10" />
          </div>
        </div>

        {/* Secondary — 3-column packaging detail */}
        <div className="grid grid-cols-3 gap-px bg-cream/[0.05]">
          {[
            { label: 'The Jar',  sub: '20g · UV Glass · Hot Stamp', style: { background: '#EDE8DC' } },
            { label: 'The Box',  sub: 'Rigid · Black · QR Certified', style: { background: '#E5E0D5' } },
            { label: 'The Bag',  sub: 'Hard Carrier · Black', style: { background: '#EDE8DC' } },
          ].map(({ label, sub, style }) => (
            <div key={label} className="relative aspect-[3/4] overflow-hidden" style={style}>
              {/* When photo is ready: <Image src={`/images/shilajit-${label.replace('The ','').toLowerCase()}.jpg`} fill alt={label} className="object-cover" /> */}
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                <p className="font-sans text-[8px] tracking-[0.45em] text-earth/38 uppercase">{label}</p>
                <p className="font-sans text-[6px] tracking-[0.3em] text-earth/20 uppercase mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QR + AUTHENTICITY ── */}
      <section className="px-6 py-20 md:py-28 border-b border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-24">
          <div className="shrink-0">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-gold/45">
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
          </div>
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-5">Verified at the box</p>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-5 leading-snug">
              Every box ships with a QR code.
            </h3>
            <p className="font-sans text-cream/68 text-sm leading-relaxed max-w-xl">
              Scan it and it opens the Certificate of Analysis for your exact batch — not a template, not a summary.
              The full third-party laboratory document: heavy metals panel, fulvic acid percentage,
              microbial safety results. Yours to read, download, and keep.
            </p>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="border-b border-cream/[0.08]">
        <div
          className="relative w-full aspect-video overflow-hidden flex items-center justify-center select-none"
          style={{ background: 'radial-gradient(ellipse at center, #020402 0%, #080D08 55%, #080D08 100%)' }}
        >
          {/* When video is ready: <video src="/videos/shilajit-ritual.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[42vw] h-[42vw] rounded-full border border-gold/[0.04] animate-pulse" />
            <div className="absolute w-[28vw] h-[28vw] rounded-full border border-gold/[0.06] animate-pulse" style={{ animationDelay: '700ms' }} />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            <div className="w-20 h-20 rounded-full border border-gold/[0.18] flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/[0.10] flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 13 15" fill="none" className="text-gold/35 ml-0.5">
                  <path d="M1 1l11 6.5L1 14V1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-sans text-[8px] tracking-[0.55em] text-cream/22 uppercase">The Ritual</p>
              <p className="font-serif text-base text-cream/10 italic">How to prepare. How to take it.</p>
              <p className="font-sans text-[7px] tracking-[0.38em] text-gold/18 uppercase">Coming with Batch E72–SH01</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">What it is</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-8">
              Formed over centuries.<br />Found in the mountains.
            </h2>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Shilajit is a resinous exudate that seeps from rock fissures in high-altitude mountain ranges during warmer months. It forms over hundreds to thousands of years from the compression and decomposition of organic plant matter between layers of rock.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Why it matters</p>
            <p className="font-sans text-cream/75 text-base leading-relaxed mb-6">
              Modern diets are mineral-depleted. Soil quality has declined significantly over the last century, meaning the food supply carries far fewer trace minerals than it did for previous generations.
            </p>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Shilajit concentrates minerals in their organic, fulvic acid-bound form — the form the body actually absorbs. This is what separates it from synthetic mineral supplements.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE COMPOSITION ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">The Composition</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-lg leading-snug">What is actually inside it.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/[0.08]">
            {compounds.map((c, i) => (
              <div key={c.name} className={`bg-earth-card p-10 reveal reveal-d${i + 1}`}>
                <div className="flex items-start justify-between mb-6">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase">{c.name}</p>
                  <span className="font-serif text-xl text-cream/30">{c.pct}</span>
                </div>
                <p className="font-sans text-cream/75 text-sm leading-relaxed">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE RITUAL ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">The Ritual</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-lg leading-snug">How to use it. Precisely.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/[0.08]">
            {ritual.map((r, i) => (
              <div key={r.step} className={`bg-earth p-10 reveal reveal-d${i + 1}`}>
                <div className="flex items-start gap-6">
                  <span className="font-sans text-[9px] tracking-[0.35em] text-gold/50 mt-1 shrink-0">{r.step}</span>
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.4em] text-cream/78 uppercase mb-4">{r.title}</p>
                    <p className="font-sans text-cream/75 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 font-sans text-cream/35 text-xs tracking-wide reveal">
            Note: Consult a healthcare professional if pregnant, nursing, or on medication.
          </p>
        </div>
      </section>

      {/* ── SOURCE + TESTING ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">The Source</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-8">Licensed Himalayan resin manufacturer. Punjab, India.</h2>
            <p className="font-sans text-cream/75 text-base leading-relaxed mb-6">
              Sourced from a licensed manufacturer in Punjab with full traceability from high-altitude collection to purification.
            </p>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Raw shilajit requires purification before it is safe for consumption. Our supplier performs this process before the material leaves India. We then test again independently in Kenya.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Lab Verification</p>
            <p className="font-sans text-cream/75 text-sm leading-relaxed mb-8">
              Every batch is tested at an ISO 17025 accredited laboratory before it reaches you. The full Certificate of Analysis ships with every order via QR code.
            </p>
            <div className="border border-cream/[0.10]">
              <div className="px-5 py-3 border-b border-cream/[0.08] flex items-center justify-between">
                <p className="font-sans text-[7px] tracking-[0.45em] text-gold/80 uppercase">Eurofins Scientific</p>
                <p className="font-sans text-[7px] tracking-[0.35em] text-cream/25 uppercase">ISO 17025</p>
              </div>
              {labTests.map((t, i) => (
                <div
                  key={i}
                  className={`group px-5 py-3.5 cursor-default${i < labTests.length - 1 ? ' border-b border-cream/[0.05]' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-sans text-[6px] tracking-[0.3em] text-cream/28 uppercase mb-0.5">{t.category}</p>
                      <p className="font-sans text-xs text-cream/75">{t.parameter}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      <p className="font-sans text-[7px] tracking-[0.3em] text-gold/70 uppercase">Verified</p>
                    </div>
                  </div>
                  <p className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2.5 font-sans text-[10px] text-cream/38 leading-relaxed transition-all duration-300 ease-out">
                    {t.tooltip}
                  </p>
                </div>
              ))}
              <div className="px-5 py-3 border-t border-cream/[0.08]">
                <p className="font-sans text-[6px] tracking-[0.3em] text-cream/20 uppercase">
                  Batch E72–SH01 · Full CoA included with every order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-28 md:py-40 border-t border-cream/[0.08]">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Reserve Your Jar</p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6 leading-[1.1]">
            First batch.<br />Limited quantity.
          </h2>
          <p className="font-sans text-cream/70 text-base mb-10 leading-relaxed max-w-lg mx-auto">
            Waitlist members get 48-hour early access, the full Certificate of Analysis for Batch E72–SH01, and complete sourcing documentation before the product is listed publicly.
          </p>

          <div className="flex items-center justify-center gap-10 mb-12 flex-wrap">
            {([
              ['20g', 'Per jar'],
              ['ISO 17025', 'Lab standard'],
              ['KEBS', 'Kenya certified'],
            ] as const).map(([val, label]) => (
              <div key={val} className="text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] text-cream/70 uppercase mb-1.5">{val}</p>
                <p className="font-sans text-[7px] tracking-[0.35em] text-cream/28 uppercase">{label}</p>
              </div>
            ))}
          </div>

          <SubscribeForm className="max-w-sm mx-auto" />

          <p className="mt-6 font-sans text-[7px] tracking-[0.3em] text-cream/22 uppercase">
            No payment now &nbsp;·&nbsp; Notified at launch &nbsp;·&nbsp; Unsubscribe anytime
          </p>
        </div>
      </section>

    </div>
  )
}

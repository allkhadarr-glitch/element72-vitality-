import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Black Seed Oil — Element 72 Vitality',
  description: 'Cold-pressed Nigella sativa from East Africa. Single-origin, unrefined, third-party tested for thymoquinone content.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Element 72 Black Seed Oil',
  description: 'Cold-pressed Nigella sativa from East Africa. Single-origin, unrefined, third-party tested for thymoquinone content.',
  brand: { '@type': 'Brand', name: 'Element 72 Vitality' },
  url: 'https://element72vitality.com/products/black-seed-oil',
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
  { name: 'Thymoquinone', role: 'The primary active compound. Subject of extensive research into antioxidant and anti-inflammatory activity.' },
  { name: 'Omega Fatty Acids', role: 'Linoleic acid (Omega-6) and oleic acid (Omega-9) — essential fatty acids the body cannot produce.' },
  { name: 'Thymol', role: 'Natural antimicrobial compound found in high concentrations in quality cold-pressed oil.' },
  { name: 'Nigellone', role: 'A unique polymer of thymoquinone found only in Nigella sativa.' },
]

const ritual = [
  { step: '01', title: 'The dose', body: 'One teaspoon (5ml) daily. Do not exceed two teaspoons. The active compounds are potent — more is not better.' },
  { step: '02', title: 'How to take it', body: 'Take directly, or mix with a teaspoon of raw honey to balance the bitter, peppery taste. Swallow — do not add to hot liquids as heat degrades thymoquinone.' },
  { step: '03', title: 'The timing', body: 'Take on an empty stomach in the morning, or before bed. Both have documented benefits — choose the time you can be consistent with.' },
  { step: '04', title: 'Topical use', body: 'Can be applied directly to scalp or skin. A few drops massaged into the scalp, left for 30 minutes, then washed out. Used across East Africa and the Middle East for hair and skin for centuries.' },
]

const process = [
  'Seeds harvested and cleaned — no pesticide residue',
  'Cold-pressed at under 40°C to preserve thymoquinone content',
  'No hexane extraction — solvent-free process only',
  'Third-party tested: TQ content, peroxide value, purity',
  'Dark glass bottling — protects from UV degradation',
]

export default function BlackSeedOilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <BlackSeedOilContent />
    </>
  )
}

function BlackSeedOilContent() {
  return (
    <div className="bg-earth">

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end px-6 pb-20 overflow-hidden border-b border-cream/[0.08]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.04] blur-[140px]" />
        </div>
        <span className="absolute font-serif font-bold select-none pointer-events-none leading-none bottom-0 right-0 text-[30vw] text-cream/[0.03]">02</span>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6 animate-fade-up delay-100">
            0°N 37°E &nbsp;·&nbsp; East Africa
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,9vw,7rem)] text-cream leading-none tracking-tight mb-6 animate-fade-up delay-200">
            Black Seed<br />Oil
          </h1>
          <div className="flex flex-col gap-4 animate-fade-up delay-300">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-gold/40" />
              <p className="font-sans text-cream/70 text-sm tracking-wide">Sourcing underway · Cold-pressed · Single-Origin</p>
            </div>
            <p className="font-sans text-[8px] tracking-[0.42em] text-cream/30 uppercase">
              Dark Glass Bottle &nbsp;·&nbsp; Cold-Pressed &nbsp;·&nbsp; Rigid Box &nbsp;·&nbsp; QR Certified
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCT VISUAL ── */}
      <section className="border-b border-cream/[0.08]">

        {/* Primary — full-width product hero */}
        <div className="relative bg-parchment w-full aspect-video overflow-hidden flex items-center justify-center select-none">
          {/* When photo is ready: <Image src="/images/black-seed-oil-hero.jpg" fill alt="Black Seed Oil — dark glass bottle" className="object-cover object-center" priority /> */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="w-8 h-px bg-earth/10" />
            <div>
              <p className="font-sans text-[7px] tracking-[0.9em] text-earth/25 uppercase mb-3">Element 72 Vitality</p>
              <p className="font-serif text-earth/[0.07]" style={{ fontSize: 'clamp(3rem,11vw,8rem)', lineHeight: 1 }}>Black Seed Oil</p>
              <p className="font-sans text-[7px] tracking-[0.55em] text-earth/18 uppercase mt-3">
                Dark Glass &nbsp;·&nbsp; Cold-Pressed &nbsp;·&nbsp; Single-Origin
              </p>
            </div>
            <div className="w-8 h-px bg-earth/10" />
          </div>
        </div>

        {/* Secondary — 3-column packaging detail */}
        <div className="grid grid-cols-3 gap-px bg-cream/[0.05]">
          {[
            { label: 'The Bottle', sub: 'Dark Glass · Cold-Pressed', style: { background: '#E8E3D8' } },
            { label: 'The Box',    sub: 'Rigid · Black · QR Certified', style: { background: '#EDEBE4' } },
            { label: 'The Bag',    sub: 'Hard Carrier · Black', style: { background: '#E8E3D8' } },
          ].map(({ label, sub, style }) => (
            <div key={label} className="relative aspect-[3/4] overflow-hidden" style={style}>
              {/* When photo is ready: <Image src={`/images/bso-${label.replace('The ','').toLowerCase()}.jpg`} fill alt={label} className="object-cover" /> */}
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
              Scan it and it opens the Certificate of Analysis for your exact batch — thymoquinone percentage,
              peroxide value, heavy metals panel, microbial safety results.
              The full third-party laboratory document. Yours to read, download, and keep.
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
          {/* When video is ready: <video src="/videos/bso-ritual.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" /> */}
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
              <p className="font-sans text-[7px] tracking-[0.38em] text-gold/18 uppercase">Arriving with confirmed sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Two thousand years of use</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-8">
              Used before science had a name for it.
            </h2>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Nigella sativa has been used as a medicinal ingredient for over two thousand years — referenced in Islamic tradition, used in ancient Egyptian medicine, present in Ayurvedic practice. It is one of the most universally documented natural remedies in human history.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Why East Africa</p>
            <p className="font-sans text-cream/75 text-base leading-relaxed mb-6">
              East Africa produces Nigella sativa with naturally higher thymoquinone concentration than most other growing areas — a result of altitude, climate, and soil composition.
            </p>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Sourcing locally means a shorter supply chain, better traceability, and a provenance story that is genuinely ours.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPOSITION ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">The Composition</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream max-w-lg leading-snug">What makes it work.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/[0.08]">
            {compounds.map((c, i) => (
              <div key={c.name} className={`bg-earth-card p-10 reveal reveal-d${i + 1}`}>
                <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-5">{c.name}</p>
                <div className="w-6 h-px bg-gold/30 mb-5" />
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
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-6 py-24 md:py-36 border-b border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug mb-8">
              Cold-pressed.<br />Nothing added.<br />Everything verified.
            </h2>
            <p className="font-sans text-cream/75 text-base leading-relaxed">
              Thymoquinone drops sharply when heat is applied during extraction. Cold-pressing — keeping temperatures below 40°C — preserves the active compound profile. Most commercial black seed oil is not cold-pressed. Ours will be, and we will prove it.
            </p>
          </div>
          <div className="reveal reveal-d2 flex flex-col justify-center">
            <div className="flex flex-col gap-5">
              {process.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-gold/60 mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="font-sans text-cream/70 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 md:py-36">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6">Coming Soon</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4 leading-snug">Sourcing is underway.</h2>
          <p className="font-sans text-cream/70 text-base mb-12 leading-relaxed">
            Join the waitlist and be the first to know — with the full sourcing story and Certificate of Analysis.
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>
      </section>

    </div>
  )
}

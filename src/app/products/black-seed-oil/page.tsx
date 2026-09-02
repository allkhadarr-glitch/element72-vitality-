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
  { name: 'Thymoquinone', pct: '2–3%', role: 'The primary active compound. TQ concentration determines quality more than any other factor. Degrades with heat — cold-pressed only.' },
  { name: 'Omega Fatty Acids', pct: 'Major', role: 'Linoleic acid (omega-6) and oleic acid (omega-9). Essential fatty acids the body cannot produce. Form the carrier medium for TQ absorption.' },
  { name: 'Carvacrol & p-Cymene', pct: 'Trace', role: 'Secondary terpene compounds present in significant quantities. Both have documented antimicrobial properties.' },
  { name: 'Nigellone', pct: 'Trace', role: 'A unique polymer of thymoquinone found only in Nigella sativa. Found exclusively in this plant species.' },
]

const ritual = [
  { step: '01', title: 'The dose', body: 'One teaspoon (5ml) daily. Do not exceed two teaspoons. The active compounds are potent — more is not better.' },
  { step: '02', title: 'How to take it', body: 'Take directly, or mix with a teaspoon of raw honey to balance the bitter, peppery taste. Do not add to hot liquids — heat above 40°C degrades thymoquinone.' },
  { step: '03', title: 'The timing', body: 'Take on an empty stomach in the morning, or before bed. Both have documented benefits — choose the time you can be consistent with.' },
  { step: '04', title: 'Topical use', body: 'Apply directly to scalp or skin. A few drops massaged into the scalp, left for 30 minutes, then washed out. Used across East Africa and the Middle East for centuries.' },
]

const labTests = [
  { parameter: 'Thymoquinone (TQ)', category: 'Bioactives', tooltip: 'The primary active compound. TQ concentration determines product quality. Cold-pressing preserves it — heat destroys it. We test and publish the percentage.' },
  { parameter: 'Peroxide Value', category: 'Freshness', tooltip: 'Measures oxidation. High peroxide value means the oil has degraded. Cold-pressed, dark glass storage keeps this low. Verified before bottling.' },
  { parameter: 'Lead (Pb)', category: 'Heavy Metals', tooltip: 'Soil contamination risk in any agricultural product. Confirmed absent before any batch is released.' },
  { parameter: 'Mercury (Hg)', category: 'Heavy Metals', tooltip: 'Industrial contamination screen. Verified absent in every batch.' },
  { parameter: 'Arsenic (As)', category: 'Heavy Metals', tooltip: 'Naturally occurring in soils. This test confirms none transfers to the final oil.' },
  { parameter: 'Microbial Safety', category: 'Safety', tooltip: 'Total plate count, E. coli, and Salmonella panel. Required for any oil intended for human consumption.' },
  { parameter: 'Pesticide Residue', category: 'Safety', tooltip: 'Confirms no solvent or pesticide contamination. Cold-pressed and unrefined means nothing was added at any point.' },
  { parameter: 'Adulteration Screen', category: 'Purity', tooltip: 'Verifies the oil is 100% Nigella sativa — not blended with carrier oils to increase volume. Common practice in the market. Confirmed absent here.' },
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
      <section className="relative min-h-[80vh] flex flex-col justify-end px-6 pb-24 overflow-hidden border-b border-cream/[0.06]">
        <span
          aria-hidden="true"
          className="absolute select-none pointer-events-none font-serif leading-none bottom-[-4%] right-[-2%] text-cream/[0.025]"
          style={{ fontSize: 'clamp(12rem, 30vw, 22rem)' }}
        >
          02
        </span>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-8 animate-fade-up delay-100">
            0°N 37°E &nbsp;·&nbsp; East Africa &nbsp;·&nbsp; Nigella Sativa
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200">
            Black Seed<br />Oil
          </h1>
          <div className="flex flex-col gap-4 animate-fade-up delay-300">
            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-gold/30" />
              <p className="font-sans text-cream/55 text-[13px]">Sourcing underway · Cold-pressed · Single-Origin</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Dark Glass Bottle', 'Cold-Pressed', 'QR Certified', 'Rigid Box'].map(s => (
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
                Black Seed Oil
              </p>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/[0.08] uppercase mt-3">
                Dark Glass &nbsp;·&nbsp; Cold-Pressed &nbsp;·&nbsp; Single-Origin
              </p>
            </div>
            <div className="w-8 h-px bg-gold/20" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-cream/[0.05]">
          {[
            { label: 'The Bottle', sub: 'Dark Glass · Cold-Pressed' },
            { label: 'The Box',    sub: 'Rigid · Black · QR Certified' },
            { label: 'The Bag',    sub: 'Hard Carrier · Black' },
          ].map(({ label, sub }) => (
            <div key={label} className="relative aspect-[3/4] overflow-hidden bg-earth-card flex flex-col justify-end p-5 md:p-6">
              <div
                className="absolute inset-0 pointer-events-none"
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
              Every bottle ships with a QR code.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Scan it and it opens the Certificate of Analysis for your exact batch — thymoquinone percentage,
              peroxide value, heavy metals panel, microbial safety results.
              The full third-party laboratory document. Yours to read, download, and keep.
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
              <p className="font-sans text-[10px] tracking-[0.35em] text-cream/30 uppercase mb-4">Batch E72–BSO01</p>
              <p className="font-sans text-cream/55 text-sm leading-[1.8]">
                Certificate of Analysis · published when the first batch is tested<br />
                Thymoquinone · Peroxide value · Microbial safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Two thousand years of use</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-cream leading-[1.1] mb-8">
              Used before science<br />had a name for it.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Nigella sativa has been used as a medicinal ingredient for over two thousand years — referenced in Islamic tradition,
              used in ancient Egyptian medicine, present in Ayurvedic practice. It is one of the most universally documented
              natural remedies in human history.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Why East Africa</p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-6">
              East African Nigella sativa — particularly from Ethiopia and Eritrea — consistently yields higher
              thymoquinone concentrations than seeds from other regions. This is a function of soil composition,
              altitude, and climate.
            </p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              It is the same logic that makes Kenyan single-estate coffee chemically distinct from commodity-grade beans.
              Origin is not aesthetic. Origin is chemistry.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE COMPOSITION ── */}
      <section className="px-6 py-24 md:py-40 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-5">The Composition</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-lg leading-[1.05]">What makes it work.</h2>
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
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Our Process</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-cream leading-[1.15] mb-8">
              Cold-pressed.<br />Nothing added.<br />Everything verified.
            </h2>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-5">
              Thymoquinone drops sharply when heat is applied during extraction. Cold-pressing — keeping temperatures
              below 40°C — preserves the active compound profile. Most commercial black seed oil is not cold-pressed.
              Ours will be, and we will prove it.
            </p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              Sourcing from single-origin East African seed stock means every batch has a provenance trail we can name.
              Not a commodity blend. A specific source, a specific season, a specific test.
            </p>
          </div>

          <div className="reveal reveal-d2">
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase mb-10">Lab Verification</p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85] mb-10">
              Every batch will be tested at a NABL-accredited laboratory before it reaches you. The full Certificate
              of Analysis ships with every order via QR code.
            </p>
            <div className="border border-cream/[0.08]">
              <div className="px-6 py-4 border-b border-cream/[0.06] flex items-center justify-between">
                <p className="font-sans text-[10px] tracking-[0.3em] text-gold/70 uppercase">Third-Party Laboratory</p>
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
                  Batch E72–BSO01 · Full CoA included with every order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="join" className="px-6 py-28 md:py-44">
        <div className="max-w-xl mx-auto text-center reveal">
          <p className="font-sans text-[10px] tracking-[0.45em] text-gold uppercase mb-8">Coming Soon</p>

          <div className="inline-flex items-center gap-3 border border-gold/15 px-5 py-2.5 mb-12">
            <div className="w-1 h-1 rounded-full bg-gold/60" />
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold/60 uppercase">Sourcing underway · East Africa</p>
          </div>

          <h2 className="font-serif text-[clamp(2.2rem,6vw,4rem)] text-cream mb-6 leading-[1.05]">
            Sourcing is underway.<br />Join the list.
          </h2>
          <p className="font-sans text-cream/55 text-[1rem] mb-8 leading-[1.85] max-w-md mx-auto">
            Waitlist members receive the full sourcing story, Certificate of Analysis for the first batch,
            and 48-hour early access before public listing.
          </p>

          <div className="flex items-center justify-center gap-10 mb-12 flex-wrap">
            {[['Cold-Pressed', 'Extraction'], ['NABL', 'Lab accreditation'], ['Single-Origin', 'East Africa']].map(([val, label]) => (
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

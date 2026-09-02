import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Element 72 Vitality',
  description: 'Single-origin wellness products. Each SKU sourced with intention, third-party tested, and not sold before the KEBS permit is in place.',
}

const products = [
  {
    slug: 'shilajit',
    number: '01',
    name: 'Shilajit Resin',
    origin: 'Single origin · high-altitude source',
    tagline: 'Up to 72 trace minerals in fulvic acid-bound form.',
    detail: 'Raw Himalayan resin. Cold-extracted. Third-party tested for heavy metals, fulvic acid content, and microbial safety.',
    specs: ['20g resin', 'Heavy metals tested', 'NABL-accredited lab', 'KEBS permit SM#102053'],
    status: 'KEBS permit granted',
  },
  {
    slug: 'black-seed-oil',
    number: '02',
    name: 'Black Seed Oil',
    coords: '0°N 37°E',
    origin: 'East Africa',
    tagline: 'Cold-pressed Nigella sativa. High thymoquinone.',
    detail: 'Single-origin, unrefined. Tested for TQ concentration, heavy metals, and purity.',
    specs: ['Cold pressed', 'TQ verified', 'Single origin', 'Unrefined'],
    status: 'Sourcing underway',
  },
]

const pipeline = [
  { name: 'Sea Moss',    origin: 'Atlantic Coast',   category: 'Marine Botanical' },
  { name: 'Tongkat Ali', origin: 'Southeast Asia',   category: 'Root Extract' },
  { name: 'Purple Tea',  origin: 'Kenya Highlands',  category: 'Single-Estate Tea' },
  { name: 'White Tea',   origin: 'Kenya Highlands',  category: 'Single-Estate Tea' },
]

export default function ProductsPage() {
  return (
    <div className="bg-earth min-h-screen">

      {/* ── HEADER ── */}
      <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-36 border-b border-cream/[0.06] overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute select-none pointer-events-none font-serif leading-none right-[-2%] bottom-[-10%] text-cream/[0.025]"
          style={{ fontSize: 'clamp(14rem, 32vw, 24rem)' }}
        >
          72
        </span>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8 animate-fade-up delay-100">Our Range</p>
          <h1 className="font-serif text-[clamp(3rem,9vw,7rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200">
            Products
          </h1>
          <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] max-w-md animate-fade-up delay-300">
            Every product is single-origin, third-party tested, and will not be sold before KEBS certification is in place. No exceptions.
          </p>
        </div>
      </section>

      {/* ── ACTIVE PRODUCTS ── */}
      <section className="px-6 py-4 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto divide-y divide-cream/[0.06]">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className={`group flex flex-col md:flex-row py-16 md:py-20 gap-8 md:gap-20 hover:opacity-75 transition-opacity duration-700 reveal reveal-d${i + 1}`}
            >
              {/* Ghost number */}
              <div className="hidden md:flex items-start pt-1 shrink-0 w-20">
                <span className="font-serif text-[5rem] leading-none text-cream/[0.05] group-hover:text-cream/[0.09] transition-colors duration-700 select-none">
                  {p.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[10px] tracking-[0.35em] text-cream/30 uppercase mb-5">
                  {p.coords} &nbsp;·&nbsp; {p.origin}
                </p>
                <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] text-cream mb-4 leading-[1.05]">{p.name}</h2>
                <p className="font-sans text-cream/65 text-[1rem] leading-[1.85] max-w-lg mb-3">{p.tagline}</p>
                <p className="font-sans text-cream/40 text-[0.9rem] leading-[1.8] max-w-lg mb-8">{p.detail}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.specs.map(s => (
                    <span key={s} className="font-sans text-[9px] tracking-[0.25em] text-cream/30 uppercase border border-cream/[0.08] px-3 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-[11px] tracking-[0.4em] text-cream/35 uppercase group-hover:text-gold transition-colors duration-300">
                  Learn more →
                </p>
              </div>

              {/* Status */}
              <div className="flex md:items-start md:pt-2 shrink-0">
                <span className="font-sans text-[9px] tracking-[0.25em] text-gold/45 uppercase border border-gold/15 px-3 py-1.5 self-start">
                  {p.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section className="px-6 py-24 md:py-32 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-5">In Development</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-[1.1]">
              Four more products in the pipeline.
            </h2>
          </div>
          <div className="divide-y divide-cream/[0.06]">
            {pipeline.map((item, i) => (
              <div key={item.name} className={`py-8 flex items-center justify-between gap-8 reveal reveal-d${i + 1}`}>
                <div className="flex items-center gap-10">
                  <p className="font-sans text-[10px] tracking-[0.3em] text-cream/25 uppercase hidden md:block w-32 shrink-0">{item.category}</p>
                  <p className="font-serif text-xl md:text-2xl text-cream/55">{item.name}</p>
                </div>
                <p className="font-sans text-[10px] tracking-[0.25em] text-cream/25 uppercase shrink-0">{item.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD CALLOUT ── */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center reveal">
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-5">What we test for</p>
            <p className="font-serif text-2xl md:text-3xl text-cream leading-snug">
              Heavy metals. Active compounds. Microbial safety. Pesticide residues.
            </p>
          </div>
          <div>
            <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] mb-8">
              Every batch. Third-party verified. The Certificate of Analysis ships with every order.
            </p>
            <Link
              href="/our-standard"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.4em] uppercase text-cream/40 hover:text-gold transition-colors duration-300"
            >
              Our Standard <span className="font-serif text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

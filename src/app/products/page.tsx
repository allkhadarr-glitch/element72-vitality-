import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Element 72 Vitality',
  description: 'Single-origin wellness products. Each SKU sourced with intention, third-party tested, and KEBS certified before sale.',
}

const products = [
  {
    slug: 'shilajit',
    name: 'Shilajit Resin',
    origin: 'Punjab, India',
    tagline: 'Up to 72 trace minerals in fulvic acid-bound form.',
    detail: 'Raw Himalayan resin. Cold-extracted. Third-party tested for heavy metals, fulvic acid content, and microbial safety.',
    status: 'waitlist',
    category: 'Mineral Resin',
  },
  {
    slug: 'black-seed-oil',
    name: 'Black Seed Oil',
    origin: 'East Africa',
    tagline: 'Cold-pressed Nigella sativa. High thymoquinone.',
    detail: 'Single-origin from Ethiopia and Eritrea. Unrefined. Tested for TQ concentration, heavy metals, and purity.',
    status: 'waitlist',
    category: 'Cold-Pressed Oil',
  },
]

const comingSoon = [
  { name: 'Sea Moss', origin: 'Atlantic Coast', category: 'Marine Botanical' },
  { name: 'Tongkat Ali', origin: 'Southeast Asia', category: 'Root Extract' },
  { name: 'Purple Tea', origin: 'Kenya Highlands', category: 'Single-Estate Tea' },
  { name: 'White Tea', origin: 'Kenya Highlands', category: 'Single-Estate Tea' },
]

export default function ProductsPage() {
  return (
    <div className="bg-earth min-h-screen">

      {/* Header */}
      <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Our Range</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">Products</h1>
        <p className="font-sans text-cream/70 text-sm leading-relaxed max-w-md">
          Every product is single-origin, third-party tested, and will not be sold before KEBS certification is in place.
          No exceptions.
        </p>
      </section>

      {/* Active products */}
      <section className="px-6 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/[0.08] border border-cream/[0.08]">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-earth flex flex-col hover:bg-earth-card transition-colors duration-300"
            >
              {/* Image slot — swap placeholder div for <Image> when photos are ready */}
              <div className="relative bg-parchment w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center select-none">
                  <p className="font-sans text-[7px] tracking-[0.6em] text-earth/22 uppercase">{product.name}</p>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col gap-8 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-1">{product.category}</p>
                    <p className="font-sans text-[10px] tracking-wide text-cream/35">{product.origin}</p>
                  </div>
                  <span className="font-sans text-[9px] tracking-[0.3em] text-cream/30 uppercase border border-cream/[0.12] px-3 py-1.5">
                    Waitlist
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-cream mb-3 group-hover:text-cream/70 transition-colors duration-200">
                    {product.name}
                  </h2>
                  <p className="font-sans text-cream/78 text-sm leading-relaxed mb-2">{product.tagline}</p>
                  <p className="font-sans text-cream/58 text-xs leading-relaxed">{product.detail}</p>
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-cream/58 uppercase group-hover:text-gold transition-colors duration-200">
                    Learn more
                  </span>
                  <span className="text-cream/30 group-hover:text-gold transition-colors duration-200 text-sm">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="border-t border-cream/[0.08] pt-12">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-10">In Development</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/[0.06] border border-cream/[0.06]">
            {comingSoon.map((item) => (
              <div key={item.name} className="bg-earth p-8 flex flex-col gap-3">
                <p className="font-sans text-[9px] tracking-[0.3em] text-cream/30 uppercase">{item.category}</p>
                <p className="font-serif text-lg text-cream/70">{item.name}</p>
                <p className="font-sans text-[10px] text-cream/30">{item.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard callout */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="border-t border-cream/[0.08] pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-cream mb-2">What we test for</p>
            <p className="font-sans text-cream/48 text-sm leading-relaxed max-w-md">
              Heavy metals. Active compound content. Microbial safety. Pesticide residues. Every batch. Third-party verified.
            </p>
          </div>
          <Link
            href="/our-standard"
            className="font-sans text-[10px] tracking-[0.3em] text-cream/58 uppercase hover:text-gold transition-colors duration-200 shrink-0"
          >
            Our Standard →
          </Link>
        </div>
      </section>

    </div>
  )
}

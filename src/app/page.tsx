import Link from 'next/link'
import SubscribeForm from '@/components/SubscribeForm'
import HeroSection from './HeroSection'

const marqueeText = 'SINGLE ORIGIN · THIRD PARTY TESTED · KEBS CERTIFIED · MINERAL RICH · EARTH DERIVED · NOT MANUFACTURED · FOUND · NAIROBI, KENYA · '

const products = [
  {
    name: 'Shilajit Resin',
    coords: '36°N 74°E',
    origin: 'Himalayan Mountains · Punjab, India',
    desc: 'Formed over centuries from decomposed organic matter compressed between Himalayan rock. Contains up to 72 trace minerals in their most bioavailable form.',
    status: 'Certification in process',
    href: '/products/shilajit',
  },
  {
    name: 'Black Seed Oil',
    coords: '0°N 37°E',
    origin: 'East Africa',
    desc: 'Cold-pressed Nigella sativa. Used across the Middle East and Africa for over two thousand years. Single-origin, unrefined, third-party tested for thymoquinone content.',
    status: 'Sourcing underway',
    href: '/products/black-seed-oil',
  },
]

const pillars = [
  { label: 'Single-Origin', desc: 'Every product traces to a named source — farm, region, altitude, season.' },
  { label: 'Science-Backed', desc: 'We cite research, not claims. Every batch has a Certificate of Analysis.' },
  { label: 'Properly Certified', desc: 'Full Kenya regulatory certification. No shortcuts. No grey markets.' },
  { label: 'Earth-Derived', desc: 'Ancient substances formed over centuries. Nothing synthesised. Nothing artificial.' },
]

export default function Home() {
  return (
    <div className="bg-earth">

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── MARQUEE ── */}
      <div className="border-y border-cream/[0.08] py-4 overflow-hidden bg-earth-card">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map(i => (
            <span key={i} className="font-sans text-[9px] tracking-[0.5em] text-cream/35 uppercase">
              {marqueeText.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      {/* ── THE NAME ── */}
      <section className="px-6 py-28 md:py-40 max-w-4xl mx-auto">
        <div className="reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-10">The Name</p>
          <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] text-cream leading-[1.15] mb-10 max-w-2xl">
            72 is not a number.<br />It is a composition.
          </h2>
          <p className="font-sans text-cream/75 text-base md:text-lg leading-relaxed max-w-xl">
            Shilajit — our founding product — is one of the most complex substances found in nature.
            Formed over centuries in the Himalayan mountains, compressed between ancient rock, it contains
            up to 72 trace minerals in their most bioavailable form: bound to fulvic acid, the carrier
            molecule that allows minerals to pass through cell membranes. We named Element 72 after every one of them.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="px-6 pb-28 md:pb-40 border-t border-cream/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="pt-16 md:pt-24 mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">Arriving Soon</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">Two products. Neither sold yet.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/[0.08]">
            {products.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group bg-earth flex flex-col hover:bg-earth-card transition-colors duration-500 reveal reveal-d${i + 1}`}
              >
                {/* Image slot — swap for <Image> when photos are ready */}
                <div className="relative bg-earth-card w-full aspect-video overflow-hidden border-b border-cream/[0.06]">
                  <div className="absolute inset-0 flex items-center justify-center select-none">
                    <p className="font-sans text-[7px] tracking-[0.6em] text-cream/[0.07] uppercase">{p.name}</p>
                  </div>
                </div>
                <div className="p-10 md:p-14 flex flex-col flex-1">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-8">{p.coords}</p>
                  <div className="flex items-center justify-between mb-10">
                    <span className="font-sans text-[8px] tracking-[0.4em] text-gold uppercase border border-gold/30 px-3 py-1.5">
                      Coming Soon
                    </span>
                    <span className="font-sans text-[8px] tracking-[0.25em] text-cream/35 uppercase">{p.status}</span>
                  </div>
                  <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-cream mb-3 leading-tight">{p.name}</h3>
                  <p className="font-sans text-[9px] tracking-[0.35em] text-gold uppercase mb-8">{p.origin}</p>
                  <p className="font-sans text-cream/70 text-sm leading-relaxed flex-1 mb-10">{p.desc}</p>
                  <div className="flex items-center gap-3 text-cream/35 group-hover:text-gold transition-colors duration-300">
                    <span className="font-sans text-[9px] tracking-[0.4em] uppercase">Learn more</span>
                    <span className="font-serif text-base">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STANDARD ── */}
      <section className="px-6 py-28 md:py-40 border-t border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">Our Standard</p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream max-w-lg leading-snug">
              We hold ourselves to a higher standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/[0.08]">
            {pillars.map((p, i) => (
              <div key={p.label} className={`bg-earth-card p-10 md:p-12 reveal reveal-d${i + 1}`}>
                <div className="w-6 h-px bg-gold/50 mb-8" />
                <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase mb-5">{p.label}</p>
                <p className="font-sans text-cream/75 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal">
            <Link href="/our-standard"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.4em] uppercase text-cream/70 hover:text-gold transition-colors duration-300">
              Read our full standard <span className="font-serif text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEDIA / COMMUNITY ── */}
      <section className="px-6 py-28 md:py-40 border-t border-cream/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">Follow the Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream leading-snug max-w-xl">
              170,000 people followed before we had a single product for sale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/[0.08] mb-10">
            {/* TikTok */}
            <a href="https://tiktok.com/@element72vitality" target="_blank" rel="noopener noreferrer"
              className="group bg-earth p-10 flex flex-col gap-6 hover:bg-earth-card transition-colors duration-300 reveal">
              <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase">TikTok</p>
              <p className="font-serif text-4xl text-cream">170K+</p>
              <p className="font-sans text-cream/48 text-sm leading-relaxed">
                Follow the sourcing journey, product development, and the story of building Element 72 from Nairobi.
              </p>
              <p className="font-sans text-[9px] tracking-[0.35em] text-cream/35 uppercase group-hover:text-gold transition-colors duration-200">
                @element72vitality →
              </p>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/element72vitality" target="_blank" rel="noopener noreferrer"
              className="group bg-earth-card p-10 flex flex-col gap-6 hover:bg-earth transition-colors duration-300 reveal reveal-d2">
              <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase">Instagram</p>
              <p className="font-serif text-4xl text-cream">Behind<br />the brand.</p>
              <p className="font-sans text-cream/48 text-sm leading-relaxed">
                Sourcing visits, certification process, product testing — documented in real time.
              </p>
              <p className="font-sans text-[9px] tracking-[0.35em] text-cream/35 uppercase group-hover:text-gold transition-colors duration-200">
                @element72vitality →
              </p>
            </a>

            {/* Journal teaser */}
            <Link href="/journal/what-is-shilajit"
              className="group bg-earth p-10 flex flex-col gap-6 hover:bg-earth-card transition-colors duration-300 reveal reveal-d3">
              <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase">From the Journal</p>
              <p className="font-serif text-2xl text-cream/80 leading-snug group-hover:text-cream transition-colors duration-300">
                What is Shilajit and why does it matter?
              </p>
              <p className="font-sans text-cream/45 text-sm leading-relaxed flex-1">
                Formed over centuries in the Himalayan mountains — what the science says about the most mineral-dense substance in nature.
              </p>
              <p className="font-sans text-[9px] tracking-[0.35em] text-cream/32 uppercase group-hover:text-gold transition-colors duration-200">
                Read →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section className="px-6 py-28 md:py-40 border-t border-cream/[0.08]">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-14">From the Founder</p>
          <blockquote className="font-serif text-2xl md:text-3xl text-cream/75 leading-relaxed italic mb-12">
            &ldquo;I built Element 72 because I wanted products that are genuinely
            sourced, genuinely tested, and genuinely explained — not just marketed.
            Everything we do starts at the source and ends with a document you can read.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="h-px w-8 bg-gold/30" />
            <p className="font-sans text-cream/58 text-[10px] tracking-[0.35em] uppercase">
              Haji · Founder, Element 72 Vitality · Nairobi, Kenya
            </p>
            <div className="h-px w-8 bg-gold/30" />
          </div>
          <Link href="/founder"
            className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.4em] uppercase text-cream/48 hover:text-gold transition-colors duration-300">
            Our story <span className="font-serif text-base">→</span>
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="join" className="px-6 py-28 md:py-40 border-t border-cream/[0.08] bg-earth-card">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Join the Waitlist</p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6 leading-snug">You won&apos;t find this in a pharmacy.</h2>
          <p className="font-sans text-cream/70 text-base mb-12 leading-relaxed">
            Waitlist members receive access 48 hours before public release,
            along with the full sourcing story and Certificate of Analysis for every product.
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>
      </section>

    </div>
  )
}

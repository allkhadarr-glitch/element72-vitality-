import Link from 'next/link'
import SubscribeForm from '@/components/SubscribeForm'

const marqueeText = 'SINGLE ORIGIN · THIRD PARTY TESTED · KEBS CERTIFIED · MINERAL RICH · EARTH DERIVED · NAIROBI, KENYA · '

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
    <div className="bg-cream">

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[160px]" />
        </div>
        <span className="absolute font-serif font-bold select-none pointer-events-none leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] text-obsidian/[0.03]">
          72
        </span>

        <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
          <p className="animate-fade-up delay-100 font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-10">
            Kenya &nbsp;·&nbsp; Premium Wellness
          </p>

          <div className="animate-fade-up delay-200 mb-10">
            <div className="flex items-center justify-center gap-5 mb-2">
              <div className="h-px w-10 bg-gold/40" />
              <span className="font-sans text-[9px] tracking-[0.6em] text-obsidian/30 uppercase">Est. 2026</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-serif text-[clamp(3.5rem,12vw,7rem)] text-obsidian tracking-tight leading-none">
              Element 72
            </h1>
            <p className="font-sans text-[10px] tracking-[0.7em] text-obsidian/30 uppercase mt-3">
              Vitality
            </p>
          </div>

          <p className="animate-fade-up delay-300 font-sans text-obsidian/50 text-lg md:text-xl leading-relaxed mb-12">
            Earth-derived. Mineral-rich. Built in Kenya.
          </p>

          <div id="waitlist" className="animate-fade-up delay-400 mb-5">
            <SubscribeForm />
          </div>

          <p className="animate-fade-up delay-500 font-sans text-obsidian/25 text-[10px] tracking-[0.4em] uppercase">
            Be first &nbsp;·&nbsp; No spam &nbsp;·&nbsp; Ever
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-obsidian/20 animate-fade-in delay-800">
          <span className="font-sans text-[8px] tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/30 to-transparent" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-obsidian/[0.08] py-4 overflow-hidden bg-parchment">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map(i => (
            <span key={i} className="font-sans text-[9px] tracking-[0.5em] text-obsidian/25 uppercase">
              {marqueeText.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      {/* ── THE NAME ── */}
      <section className="px-6 py-28 md:py-40 max-w-4xl mx-auto">
        <div className="reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-10">The Name</p>
          <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] text-obsidian leading-[1.15] mb-10 max-w-2xl">
            72 is not a number.<br />It is a composition.
          </h2>
          <p className="font-sans text-obsidian/45 text-base md:text-lg leading-relaxed max-w-xl">
            Shilajit — our founding product — is one of the most complex substances found in nature.
            Formed over centuries in the Himalayan mountains, compressed between ancient rock, it contains
            up to 72 trace minerals in their most bioavailable form: bound to fulvic acid, the carrier
            molecule that allows minerals to pass through cell membranes. We named Element 72 after every one of them.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="px-6 pb-28 md:pb-40 border-t border-obsidian/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="pt-16 md:pt-24 mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">Arriving Soon</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian">The founding collection</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-obsidian/[0.08]">
            {products.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group bg-cream p-10 md:p-14 flex flex-col hover:bg-parchment transition-colors duration-500 reveal reveal-d${i + 1}`}
              >
                <p className="font-sans text-[9px] tracking-[0.4em] text-obsidian/20 uppercase mb-8">{p.coords}</p>
                <div className="flex items-center justify-between mb-10">
                  <span className="font-sans text-[8px] tracking-[0.4em] text-gold uppercase border border-gold/30 px-3 py-1.5">
                    Coming Soon
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.25em] text-obsidian/25 uppercase">{p.status}</span>
                </div>
                <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-obsidian mb-3 leading-tight">{p.name}</h3>
                <p className="font-sans text-[9px] tracking-[0.35em] text-gold uppercase mb-8">{p.origin}</p>
                <p className="font-sans text-obsidian/40 text-sm leading-relaxed flex-1 mb-10">{p.desc}</p>
                <div className="flex items-center gap-3 text-obsidian/25 group-hover:text-gold transition-colors duration-300">
                  <span className="font-sans text-[9px] tracking-[0.4em] uppercase">Learn more</span>
                  <span className="font-serif text-base">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STANDARD ── */}
      <section className="px-6 py-28 md:py-40 border-t border-obsidian/[0.08] bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">Our Standard</p>
            <h2 className="font-serif text-3xl md:text-5xl text-obsidian max-w-lg leading-snug">
              We hold ourselves to a higher standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-obsidian/[0.08]">
            {pillars.map((p, i) => (
              <div key={p.label} className={`bg-parchment p-10 md:p-12 reveal reveal-d${i + 1}`}>
                <div className="w-6 h-px bg-gold/50 mb-8" />
                <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase mb-5">{p.label}</p>
                <p className="font-sans text-obsidian/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal">
            <Link href="/our-standard"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.4em] uppercase text-obsidian/40 hover:text-gold transition-colors duration-300">
              Read our full standard <span className="font-serif text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section className="px-6 py-28 md:py-40 border-t border-obsidian/[0.08]">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-14">From the Founder</p>
          <blockquote className="font-serif text-2xl md:text-3xl text-obsidian/60 leading-relaxed italic mb-12">
            &ldquo;I built Element 72 because I wanted products that are genuinely
            sourced, genuinely tested, and genuinely explained — not just marketed.
            Everything we do starts at the source and ends with a document you can read.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="h-px w-8 bg-gold/30" />
            <p className="font-sans text-obsidian/30 text-[10px] tracking-[0.35em] uppercase">
              Mohamed Haji · Founder, Element 72 Vitality · Nairobi
            </p>
            <div className="h-px w-8 bg-gold/30" />
          </div>
          <Link href="/founder"
            className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.4em] uppercase text-obsidian/35 hover:text-gold transition-colors duration-300">
            Our story <span className="font-serif text-base">→</span>
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="join" className="px-6 py-28 md:py-40 border-t border-obsidian/[0.08] bg-parchment">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Join the Waitlist</p>
          <h2 className="font-serif text-3xl md:text-5xl text-obsidian mb-6 leading-snug">Be first.</h2>
          <p className="font-sans text-obsidian/40 text-base mb-12 leading-relaxed">
            Waitlist members receive access 48 hours before public release,
            along with the full sourcing story and Certificate of Analysis for every product.
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>
      </section>

    </div>
  )
}

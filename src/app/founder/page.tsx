import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Founder — Element 72 Vitality',
  description: 'Haji, Nairobi. Why Element 72 was built, and what it stands for.',
}

const beliefs = [
  {
    label: 'Transparency is not a feature',
    body: 'Every brand says they are transparent. We decided to actually be it — CoA on every batch, the laboratory sealing its own sample, full regulatory process documented.',
  },
  {
    label: 'East Africa is underestimated',
    body: 'Kenya grows the only commercial purple tea in the world. East Africa produces some of the highest-quality black seed in the world. We are not a market to be sold to. We are a source the world does not know it needs.',
  },
  {
    label: 'The best products explain themselves',
    body: 'If you need marketing to sell it, the product is not doing the work. We invest in sourcing and testing, not in persuasion. The CoA is our sales pitch.',
  },
]

export default function FounderPage() {
  return (
    <div className="bg-earth">

      {/* ── HERO — QUOTE ── */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 border-b border-cream/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(201,165,90,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-16 animate-fade-up delay-100">
            The Founder
          </p>
          <blockquote className="font-serif text-[clamp(1.6rem,3.5vw,2.6rem)] text-cream/75 leading-[1.6] italic mb-16 animate-fade-up delay-200">
            &ldquo;I wanted to bring products that are genuinely sourced, genuinely tested, and genuinely explained — not just marketed. Everything starts at the source and ends with a document you can read.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-6 animate-fade-up delay-300">
            <div className="h-px w-10 bg-gold/20" />
            <p className="font-sans text-cream/45 text-[12px] tracking-[0.25em] uppercase">
              Haji · Founder, Element 72 Vitality · Nairobi, Kenya
            </p>
            <div className="h-px w-10 bg-gold/20" />
          </div>
        </div>
      </section>

      {/* ── THE STORY ── */}
      <section className="px-6 py-28 md:py-44 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12 md:gap-20">
          <div className="reveal">
            <div className="w-6 h-px bg-gold/35 mb-4" />
            <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase">The Story</p>
          </div>
          <div className="reveal reveal-d2 flex flex-col gap-7">
            <p className="font-sans text-cream/75 text-[1.05rem] md:text-[1.1rem] leading-[1.85]">
              Element 72 was built from a simple frustration: the wellness products available in Kenya were either imported generics with no sourcing transparency, or local products with no third-party testing. Neither option earned genuine trust.
            </p>
            <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85]">
              I started looking at what we actually had access to — what East Africa and the wider region could supply with full traceability. Shilajit from the Himalayas through established Indian suppliers. Black seed from East Africa itself. Purple tea, a crop that Kenya holds a global monopoly on.
            </p>
            <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85]">
              The supply was there. What was missing was the standard — the commitment to test everything, certify properly, and explain rather than just claim.
            </p>
            <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85]">
              Element 72 is built to be that brand. Not the cheapest option. Not the most convenient. The one you can actually trust, because we show our work.
            </p>
          </div>
        </div>
      </section>

      {/* ── BELIEFS ── */}
      <section className="px-6 py-28 md:py-44 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal">
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-5">What we believe</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream max-w-lg leading-[1.05]">
              The principles behind the brand.
            </h2>
          </div>
          <div className="divide-y divide-cream/[0.06]">
            {beliefs.map((b, i) => (
              <div key={b.label} className={`py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24 reveal reveal-d${i + 1}`}>
                <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase">{b.label}</p>
                <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="px-6 py-28 md:py-44 border-b border-cream/[0.06]">
        <div className="max-w-4xl mx-auto reveal">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-10">The Vision</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-cream leading-[1.1] mb-10">
            East Africa as a source<br />of premium global wellness.
          </h2>
          <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] max-w-2xl">
            The long-term vision for Element 72 is not just a Kenyan wellness brand. It is a brand that demonstrates what East Africa can produce for the world — premium, traceable, rigorously tested products that compete with the best brands in Japan, Europe, and North America. Not as an imitation of those markets, but as the source they come to trust.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-28 md:py-44 bg-earth-card">
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-cream mb-6 leading-[1.1]">
            Build this with us.
          </h2>
          <p className="font-sans text-cream/55 text-[1rem] mb-12 leading-[1.85]">
            Join the waitlist. Be first when the products launch.
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

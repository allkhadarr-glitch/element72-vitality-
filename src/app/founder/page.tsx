import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Founder — Element 72 Vitality',
  description: 'Mohamed Haji, Nairobi. Why Element 72 was built, and what it stands for.',
}

const beliefs = [
  {
    label: 'Transparency is not a feature',
    body: 'Every brand says they are transparent. We decided to actually be it — CoA on every batch, named supplier on every product, full regulatory process documented.',
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
    <div className="bg-cream">

      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 border-b border-obsidian/[0.08] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-14 animate-fade-up delay-100">The Founder</p>
          <blockquote className="font-serif text-2xl md:text-4xl text-obsidian/65 leading-relaxed italic mb-14 animate-fade-up delay-200">
            &ldquo;I wanted to bring products that are genuinely sourced, genuinely tested, and genuinely explained — not just marketed. Everything starts at the source and ends with a document you can read.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-5 animate-fade-up delay-300">
            <div className="h-px w-8 bg-gold/30" />
            <p className="font-sans text-obsidian/30 text-[10px] tracking-[0.4em] uppercase">Founder, Element 72 Vitality &nbsp;·&nbsp; Nairobi, Kenya</p>
            <div className="h-px w-8 bg-gold/30" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mt-1">The Story</p>
          </div>
          <div className="reveal reveal-d2 flex flex-col gap-6">
            <p className="font-sans text-obsidian/50 text-base md:text-lg leading-relaxed">
              Element 72 was built from a simple frustration: the wellness products available in Kenya were either imported generics with no sourcing transparency, or local products with no third-party testing. Neither option earned genuine trust.
            </p>
            <p className="font-sans text-obsidian/42 text-base leading-relaxed">
              I started looking at what we actually had access to — what East Africa and the wider region could supply with full traceability. Shilajit from the Himalayas through established Indian suppliers. Black seed from East Africa itself. Purple tea, a crop that Kenya holds a global monopoly on.
            </p>
            <p className="font-sans text-obsidian/42 text-base leading-relaxed">
              The supply was there. What was missing was the standard — the commitment to test everything, certify properly, and explain rather than just claim.
            </p>
            <p className="font-sans text-obsidian/42 text-base leading-relaxed">
              Element 72 is built to be that brand. Not the cheapest option. Not the most convenient. The one you can actually trust, because we show our work.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08] bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">What we believe</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian max-w-lg leading-snug">The principles behind the brand.</h2>
          </div>
          <div className="flex flex-col divide-y divide-obsidian/[0.08]">
            {beliefs.map((b, i) => (
              <div key={b.label} className={`py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-24 reveal reveal-d${i + 1}`}>
                <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase">{b.label}</p>
                <p className="font-sans text-obsidian/42 text-base leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08]">
        <div className="max-w-4xl mx-auto reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-10">The Vision</p>
          <h2 className="font-serif text-3xl md:text-5xl text-obsidian leading-[1.15] mb-10">
            East Africa as a source of premium global wellness.
          </h2>
          <p className="font-sans text-obsidian/42 text-base leading-relaxed max-w-2xl">
            The long-term vision for Element 72 is not just a Kenyan wellness brand. It is a brand that demonstrates what East Africa can produce for the world — premium, traceable, rigorously tested products that compete with the best brands in Japan, Europe, and North America. Not as an imitation of those markets, but as the source they come to trust.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 bg-parchment">
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-8 leading-snug">Build this with us.</h2>
          <p className="font-sans text-obsidian/40 text-base mb-12 leading-relaxed">
            Join the waitlist. Be first when the products launch.
          </p>
          <Link href="/#waitlist"
            className="inline-block font-sans text-[10px] tracking-[0.35em] uppercase text-ivory bg-obsidian hover:bg-gold px-10 py-4 transition-colors duration-300">
            Join the Waitlist
          </Link>
        </div>
      </section>

    </div>
  )
}

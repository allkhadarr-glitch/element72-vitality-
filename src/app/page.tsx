import SubscribeForm from '@/components/SubscribeForm'

const pillars = [
  {
    label: 'Single-Origin',
    desc: 'Every product traces back to a specific source — named, verified, documented.',
  },
  {
    label: 'Science-Backed',
    desc: 'We cite research, not vague claims. Every product has a clean Certificate of Analysis.',
  },
  {
    label: 'Properly Certified',
    desc: 'We go through full Kenya certification. No shortcuts. No grey markets.',
  },
  {
    label: 'Earth-Derived',
    desc: 'Ancient substances formed over centuries. Nothing synthesised. Nothing artificial.',
  },
]

const products = [
  {
    name: 'Shilajit Resin',
    origin: 'Himalayan Mountains · Punjab, India',
    desc: 'One of nature\'s most mineral-dense substances. Contains up to 72 trace minerals in their most bioavailable form — fulvic acid-bound and tested.',
    status: 'Certification in progress',
    badge: 'Coming Soon',
  },
  {
    name: 'Black Seed Oil',
    origin: 'East Africa',
    desc: 'Cold-pressed Nigella Sativa. Used for millennia. Single-origin, unrefined, third-party tested for purity and potency.',
    status: 'Sourcing underway',
    badge: 'Coming Soon',
  },
]

export default function Home() {
  return (
    <main className="bg-obsidian min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px]" />
        </div>

        {/* Background 72 */}
        <span className="absolute font-serif font-bold text-[32vw] text-white/[0.025] select-none pointer-events-none leading-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          72
        </span>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto w-full">

          {/* Eyebrow */}
          <p className="animate-fade-up delay-100 text-gold text-[10px] tracking-[0.5em] uppercase mb-10 font-sans">
            Kenya &nbsp;·&nbsp; Premium Wellness
          </p>

          {/* Wordmark */}
          <div className="animate-fade-up delay-200 mb-10">
            <div className="flex items-center justify-center gap-4 mb-1">
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-serif text-[11px] tracking-[0.6em] text-gold/70 uppercase">Est. 2026</span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl text-ivory tracking-tight leading-none">
              Element 72
            </h1>
            <p className="font-sans text-[11px] tracking-[0.6em] text-ivory/40 uppercase mt-3">
              Vitality
            </p>
          </div>

          {/* Tagline */}
          <p className="animate-fade-up delay-300 font-sans text-ivory/55 text-lg md:text-xl leading-relaxed mb-12 px-4">
            Earth-derived. Mineral-rich. Built in Kenya.
          </p>

          {/* Form */}
          <div className="animate-fade-up delay-400 mb-4">
            <SubscribeForm />
          </div>

          <p className="animate-fade-up delay-500 font-sans text-ivory/20 text-[11px] tracking-widest uppercase">
            Be first &nbsp;·&nbsp; No spam &nbsp;·&nbsp; Ever
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/20 animate-fade-in delay-600">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
        </div>
      </section>

      {/* ── THE NAME ── */}
      <section className="px-6 py-24 md:py-32 max-w-3xl mx-auto text-center border-t border-border">
        <p className="font-sans text-[10px] tracking-[0.5em] text-gold uppercase mb-8">The Name</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-snug mb-8">
          72 is not a number.<br />It is a composition.
        </h2>
        <p className="font-sans text-ivory/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Shilajit — our founding product — is one of the most complex substances found in nature.
          Formed over centuries in the Himalayan mountains, it contains up to 72 trace minerals in
          their most bioavailable form. We named Element 72 after every one of them.
        </p>
        <div className="mt-16 h-px w-16 bg-gold/30 mx-auto" />
      </section>

      {/* ── PILLARS ── */}
      <section className="px-6 pb-24 md:pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {pillars.map((p) => (
            <div key={p.label} className="bg-obsidian p-8 md:p-10">
              <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4">
                {p.label}
              </p>
              <p className="font-sans text-ivory/45 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="px-6 py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] tracking-[0.5em] text-gold uppercase mb-4">
              Arriving Soon
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory">
              The founding collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {products.map((product) => (
              <div key={product.name} className="bg-card p-8 md:p-10 flex flex-col">

                {/* Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase border border-gold/20 px-3 py-1.5">
                    {product.badge}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.3em] text-ivory/20 uppercase">
                    {product.status}
                  </span>
                </div>

                {/* Product info */}
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                  {product.name}
                </h3>
                <p className="font-sans text-[10px] tracking-[0.3em] text-gold/60 uppercase mb-6">
                  {product.origin}
                </p>
                <p className="font-sans text-ivory/40 text-sm leading-relaxed flex-1">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-sans text-xs text-ivory/25 tracking-wide">
                    Join the waitlist to be notified first.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second email capture */}
          <div className="mt-16 text-center">
            <p className="font-sans text-ivory/40 text-sm mb-6">
              Waitlist members are notified 48 hours before public release.
            </p>
            <SubscribeForm className="max-w-sm" />
          </div>
        </div>
      </section>

      {/* ── FROM THE FOUNDER ── */}
      <section className="px-6 py-24 md:py-32 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.5em] text-gold uppercase mb-12">
            From the Founder
          </p>
          <blockquote className="font-serif text-xl md:text-2xl text-ivory/70 leading-relaxed italic mb-10">
            &ldquo;I built Element 72 because I wanted to bring products that are genuinely
            sourced, genuinely tested, and genuinely explained — not just marketed.
            Everything we do starts at the source and ends with a document you can read.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gold/30" />
            <p className="font-sans text-ivory/30 text-xs tracking-[0.3em] uppercase">
              Founder, Element 72 Vitality · Nairobi, Kenya
            </p>
            <div className="h-px w-8 bg-gold/30" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Wordmark */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-ivory/70">Element 72</p>
            <p className="font-sans text-[9px] tracking-[0.4em] text-ivory/25 uppercase mt-0.5">
              Vitality
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="https://tiktok.com/@element72vitality"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ivory/30 hover:text-gold transition-colors duration-200 group"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z"/>
              </svg>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">TikTok</span>
            </a>

            <a
              href="https://instagram.com/element72vitality"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ivory/30 hover:text-gold transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Instagram</span>
            </a>
          </div>

          {/* Legal */}
          <p className="font-sans text-ivory/15 text-[10px] tracking-wide">
            © 2026 Element 72 Vitality. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  )
}

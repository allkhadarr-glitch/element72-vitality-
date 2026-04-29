import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Black Seed Oil — Element 72 Vitality',
  description: 'Cold-pressed Nigella sativa from East Africa. Single-origin, unrefined, third-party tested for thymoquinone content.',
}

const compounds = [
  { name: 'Thymoquinone', role: 'The primary active compound. Subject of extensive research into antioxidant and anti-inflammatory activity.' },
  { name: 'Omega Fatty Acids', role: 'Linoleic acid (Omega-6) and oleic acid (Omega-9) — essential fatty acids the body cannot produce.' },
  { name: 'Thymol', role: 'Natural antimicrobial compound found in high concentrations in quality cold-pressed oil.' },
  { name: 'Nigellone', role: 'A unique polymer of thymoquinone found only in Nigella sativa. Acts as a bronchodilator in traditional use.' },
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
    <div className="bg-cream">

      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 pb-20 overflow-hidden border-b border-obsidian/[0.08]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.04] blur-[140px]" />
        </div>
        <span className="absolute font-serif font-bold select-none pointer-events-none leading-none bottom-0 right-0 text-[30vw] text-obsidian/[0.03]">
          02
        </span>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6 animate-fade-up delay-100">
            0°N 37°E &nbsp;·&nbsp; East Africa
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,9vw,7rem)] text-obsidian leading-none tracking-tight mb-6 animate-fade-up delay-200">
            Black Seed<br />Oil
          </h1>
          <div className="flex items-center gap-6 animate-fade-up delay-300">
            <div className="h-px w-16 bg-gold/40" />
            <p className="font-sans text-obsidian/40 text-sm tracking-wide">Sourcing underway · Cold-pressed · Single-Origin</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Two thousand years of use</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian leading-snug mb-8">
              Used before science had a name for it.
            </h2>
            <p className="font-sans text-obsidian/45 text-base leading-relaxed">
              Nigella sativa has been used as a medicinal and culinary ingredient for over two thousand years — referenced in Islamic tradition, used in ancient Egyptian medicine, present in Ayurvedic practice. It is one of the most universally documented natural remedies in human history.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Why East Africa</p>
            <p className="font-sans text-obsidian/45 text-base leading-relaxed mb-6">
              East Africa — particularly Ethiopia and Eritrea — is among the world&apos;s highest-quality producers of Nigella sativa. The climate, altitude, and soil composition produce seeds with naturally higher thymoquinone concentration than most other growing areas.
            </p>
            <p className="font-sans text-obsidian/45 text-base leading-relaxed">
              Sourcing from East Africa means a shorter supply chain, better traceability, and a provenance story that is genuinely ours.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08] bg-parchment">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">The Composition</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian max-w-lg leading-snug">What makes it work.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-obsidian/[0.08]">
            {compounds.map((c, i) => (
              <div key={c.name} className={`bg-parchment p-10 reveal reveal-d${i + 1}`}>
                <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-5">{c.name}</p>
                <div className="w-6 h-px bg-gold/30 mb-5" />
                <p className="font-sans text-obsidian/45 text-sm leading-relaxed">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 border-b border-obsidian/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian leading-snug mb-8">
              Cold-pressed.<br />Nothing added.<br />Everything verified.
            </h2>
            <p className="font-sans text-obsidian/45 text-base leading-relaxed">
              Thymoquinone content drops sharply when heat is applied during extraction. Cold-pressing — keeping temperatures below 40°C — preserves the active compound profile that makes the oil genuinely effective. Most commercial black seed oil is not cold-pressed. Ours will be, and we will prove it with third-party testing on every batch.
            </p>
          </div>
          <div className="reveal reveal-d2 flex flex-col justify-center">
            <div className="flex flex-col gap-5">
              {process.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-gold/60 mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="font-sans text-obsidian/40 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-36 bg-parchment">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6">Coming Soon</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4 leading-snug">Sourcing is underway.</h2>
          <p className="font-sans text-obsidian/40 text-base mb-12 leading-relaxed">
            Join the waitlist and be the first to know when Black Seed Oil is ready — along with the full sourcing story and Certificate of Analysis.
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>
      </section>

    </div>
  )
}

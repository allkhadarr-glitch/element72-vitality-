import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Shilajit Resin — Element 72 Vitality',
  description: 'Single-origin Himalayan shilajit resin. Up to 72 trace minerals in fulvic acid-bound, bioavailable form. Third-party tested. Kenya certified.',
}

const compounds = [
  { name: 'Fulvic Acid', pct: '40–60%', role: 'The carrier molecule. Binds minerals and transports them across cell membranes.' },
  { name: 'Humic Acid', pct: '15–30%', role: 'Supports gut microbiome and mineral absorption.' },
  { name: 'Trace Minerals', pct: '72+', role: 'Iron, zinc, magnesium, copper, selenium — in their most bioavailable organic form.' },
  { name: 'Dibenzo-α-pyrones', pct: 'Trace', role: 'Mitochondrial cofactors. Subject of ongoing clinical research.' },
]

const testing = [
  'Heavy metals panel — lead, mercury, arsenic, cadmium',
  'Fulvic acid content — minimum 40%',
  'Microbial safety — total plate count, E. coli, Salmonella',
  'Pesticide residue screen',
  'Moisture content and purity',
]

export default function ShilajitPage() {
  return (
    <div className="bg-obsidian">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 pb-20 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.025] blur-[120px]" />
        </div>
        <span className="absolute font-serif font-bold select-none pointer-events-none leading-none bottom-0 right-0 text-[30vw] text-white/[0.015]">
          01
        </span>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-6 animate-fade-up delay-100">
            36°N 74°E &nbsp;·&nbsp; Himalayan Mountains &nbsp;·&nbsp; Punjab, India
          </p>
          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] text-ivory leading-none tracking-tight mb-6 animate-fade-up delay-200">
            Shilajit<br />Resin
          </h1>
          <div className="flex items-center gap-6 animate-fade-up delay-300">
            <div className="h-px w-16 bg-gold/30" />
            <p className="font-sans text-ivory/35 text-sm tracking-wide">
              Certification in process &nbsp;·&nbsp; Kenya (KEBS)
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="px-6 py-24 md:py-36 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">What it is</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-8">
              Formed over centuries.<br />Found in the mountains.
            </h2>
            <p className="font-sans text-ivory/40 text-base leading-relaxed">
              Shilajit is a resinous exudate that seeps from rock fissures in high-altitude mountain ranges —
              primarily the Himalayas — during warmer months. It forms over hundreds to thousands of years
              from the compression and decomposition of organic plant matter between layers of rock.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Why it matters</p>
            <p className="font-sans text-ivory/40 text-base leading-relaxed mb-6">
              Modern diets are mineral-depleted. Soil quality has declined significantly over the last century,
              meaning the food supply carries far fewer trace minerals than it did for previous generations.
            </p>
            <p className="font-sans text-ivory/40 text-base leading-relaxed">
              Shilajit is one of the few naturally occurring substances that concentrates minerals in their
              organic, fulvic acid-bound form — the form that the body actually absorbs. This is what separates
              it from mineral supplements manufactured in a lab.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE COMPOUND ── */}
      <section className="px-6 py-24 md:py-36 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-4">The Composition</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory max-w-lg leading-snug">
              What is actually inside it.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
            {compounds.map((c, i) => (
              <div key={c.name} className={`bg-obsidian p-10 reveal reveal-d${i + 1}`}>
                <div className="flex items-start justify-between mb-6">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase">{c.name}</p>
                  <span className="font-serif text-xl text-ivory/20">{c.pct}</span>
                </div>
                <p className="font-sans text-ivory/40 text-sm leading-relaxed">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SOURCE ── */}
      <section className="px-6 py-24 md:py-36 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">The Source</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory leading-snug mb-8">
              Aveda Ayur.<br />Punjab, India.
            </h2>
            <p className="font-sans text-ivory/40 text-base leading-relaxed mb-6">
              Our shilajit is sourced from Aveda Ayur in Punjab, India — an established supplier with
              full traceability from high-altitude collection to purification.
            </p>
            <p className="font-sans text-ivory/40 text-base leading-relaxed">
              Raw shilajit requires purification before it is safe for consumption — removal of heavy metals,
              mycotoxins, and other contaminants that accumulate in mountain environments. Our supplier
              performs this process before the material leaves India. We then test again independently in Kenya.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8">Our Testing</p>
            <p className="font-sans text-ivory/40 text-sm leading-relaxed mb-8">
              Every batch is tested at an ISO 17025 accredited laboratory before it reaches you.
              The Certificate of Analysis is available for every product we sell.
            </p>
            <div className="flex flex-col gap-4">
              {testing.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-gold/50 mt-2 shrink-0" />
                  <p className="font-sans text-ivory/35 text-sm">{t}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4 leading-snug">
            Currently going through<br />Kenya certification.
          </h2>
          <p className="font-sans text-ivory/35 text-base mb-12 leading-relaxed">
            Waitlist members are notified first — along with the full Certificate of Analysis and sourcing documentation.
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>
      </section>

    </div>
  )
}

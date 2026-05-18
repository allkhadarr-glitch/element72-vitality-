'use client'

import { useState, useEffect } from 'react'
import SubscribeForm from '@/components/SubscribeForm'

const PARTICLES = [
  { id: 1,  l: '4%',  b: '5%',  s: 1.5, o: 0.28, d: '9s',  de: '0s'   },
  { id: 2,  l: '12%', b: '25%', s: 2,   o: 0.18, d: '12s', de: '1.5s' },
  { id: 3,  l: '22%', b: '10%', s: 1,   o: 0.32, d: '8s',  de: '0.8s' },
  { id: 4,  l: '30%', b: '40%', s: 1,   o: 0.20, d: '11s', de: '2.2s' },
  { id: 5,  l: '38%', b: '15%', s: 2,   o: 0.24, d: '10s', de: '1.0s' },
  { id: 6,  l: '45%', b: '30%', s: 1,   o: 0.15, d: '13s', de: '3.0s' },
  { id: 7,  l: '52%', b: '8%',  s: 1,   o: 0.30, d: '9s',  de: '0.5s' },
  { id: 8,  l: '60%', b: '45%', s: 2,   o: 0.18, d: '11s', de: '2.8s' },
  { id: 9,  l: '68%', b: '20%', s: 1,   o: 0.26, d: '8s',  de: '1.8s' },
  { id: 10, l: '75%', b: '35%', s: 1,   o: 0.20, d: '12s', de: '0.3s' },
  { id: 11, l: '82%', b: '12%', s: 2,   o: 0.22, d: '10s', de: '2.5s' },
  { id: 12, l: '90%', b: '28%', s: 1,   o: 0.16, d: '9s',  de: '1.2s' },
  { id: 13, l: '7%',  b: '55%', s: 1,   o: 0.12, d: '14s', de: '4.0s' },
  { id: 14, l: '18%', b: '62%', s: 1,   o: 0.14, d: '11s', de: '3.5s' },
  { id: 15, l: '28%', b: '50%', s: 2,   o: 0.16, d: '13s', de: '2.0s' },
  { id: 16, l: '42%', b: '67%', s: 1,   o: 0.10, d: '15s', de: '5.0s' },
  { id: 17, l: '55%', b: '55%', s: 1,   o: 0.12, d: '12s', de: '1.0s' },
  { id: 18, l: '65%', b: '60%', s: 2,   o: 0.14, d: '10s', de: '3.2s' },
  { id: 19, l: '78%', b: '52%', s: 1,   o: 0.11, d: '13s', de: '4.5s' },
  { id: 20, l: '88%', b: '65%', s: 1,   o: 0.13, d: '11s', de: '2.8s' },
  { id: 21, l: '35%', b: '73%', s: 1,   o: 0.09, d: '16s', de: '6.0s' },
  { id: 22, l: '50%', b: '78%', s: 2,   o: 0.10, d: '14s', de: '5.5s' },
  { id: 23, l: '95%', b: '42%', s: 1,   o: 0.16, d: '10s', de: '3.8s' },
  { id: 24, l: '2%',  b: '70%', s: 1,   o: 0.12, d: '12s', de: '2.3s' },
  { id: 25, l: '72%', b: '75%', s: 1,   o: 0.09, d: '15s', de: '7.0s' },
]

export default function HeroSection() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3200),
      setTimeout(() => setPhase(4), 4200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const reveal = (min: number) =>
    `transition-all duration-[1100ms] ease-out ${
      phase >= min
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-4 pointer-events-none'
    }`

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="absolute rounded-full bg-gold"
            style={{
              left: p.l,
              bottom: p.b,
              width: `${p.s}px`,
              height: `${p.s}px`,
              opacity: p.o,
              animation: `float-particle ${p.d} ${p.de} infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Ambient gold glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/[0.06] blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-3xl mx-auto">

        {/* Origin label */}
        <p className="font-sans text-[13px] tracking-[0.5em] text-gold uppercase mb-8 animate-fade-in delay-300">
          Kenya &nbsp;·&nbsp; Premium Wellness
        </p>

        {/* "72." — the hook */}
        <div className="animate-breathe mb-4">
          <span className="font-serif text-[clamp(6rem,27vw,16rem)] text-cream leading-[0.9] tracking-tight">
            72.
          </span>
        </div>

        {/* Phase 1 — what 72 means */}
        <div className={`${reveal(1)} mb-10`}>
          <div className="w-8 h-px bg-gold/50 mx-auto mb-6" />
          <p className="font-sans text-[14px] tracking-[0.35em] text-cream/80 uppercase leading-relaxed">
            trace minerals &nbsp;·&nbsp; formed over millions of years
          </p>
        </div>

        {/* Phase 2 — brand name reveal */}
        <div className={`${reveal(2)} mb-10`}>
          <p className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] text-cream tracking-tight mb-2">
            Element 72
          </p>
          <p className="font-sans text-[13px] tracking-[0.6em] text-gold/70 uppercase">
            Vitality
          </p>
        </div>

        {/* Phase 3 — the philosophical hook */}
        <div className={`${reveal(3)} mb-14`}>
          <p className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] text-cream/90 italic">
            Not manufactured. Found.
          </p>
        </div>

        {/* Phase 4 — CTA */}
        <div className={`${reveal(4)} w-full`}>
          <p className="font-sans text-[13px] tracking-[0.3em] text-cream/55 uppercase mb-6">
            First access &nbsp;·&nbsp; Full sourcing story &nbsp;·&nbsp; Certificate of Analysis
          </p>
          <SubscribeForm className="max-w-sm mx-auto" />
        </div>

      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${
        phase >= 4 ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="font-sans text-[11px] tracking-[0.4em] text-cream/40 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>

    </section>
  )
}

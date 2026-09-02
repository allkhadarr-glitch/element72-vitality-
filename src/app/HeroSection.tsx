'use client'

import { useState, useEffect } from 'react'
import SubscribeForm from '@/components/SubscribeForm'

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
    `transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) ${
      phase >= min
        ? 'opacity-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 translate-y-2 pointer-events-none'
    }`

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(201,165,90,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-3xl mx-auto">

        {/* Origin */}
        <p className="font-sans text-[12px] tracking-[0.45em] text-gold/80 uppercase mb-8 animate-fade-in delay-300">
          Kenya &nbsp;·&nbsp; Premium Wellness
        </p>

        {/* The number */}
        <div className="animate-breathe mb-6">
          <span className="font-serif text-[clamp(7rem,28vw,18rem)] text-cream leading-[0.88] tracking-tight">
            72.
          </span>
        </div>

        {/* Phase 1 — what 72 means */}
        <div className={`${reveal(1)} w-full mb-10`}>
          <div
            className="w-16 h-px bg-gold/40 mx-auto mb-6 origin-center"
            style={{ animation: phase >= 1 ? 'line-grow 0.8s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}
          />
          <p className="font-sans text-[13px] tracking-[0.3em] text-cream/65 uppercase">
            trace minerals &nbsp;·&nbsp; formed over millions of years
          </p>
        </div>

        {/* Phase 2 — brand name */}
        <div className={`${reveal(2)} mb-10`}>
          <p className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] text-cream tracking-tight mb-2">
            Element 72
          </p>
          <p className="font-sans text-[12px] tracking-[0.55em] text-gold/60 uppercase">
            Vitality
          </p>
        </div>

        {/* Phase 3 — the hook */}
        <div className={`${reveal(3)} mb-10`}>
          <p className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] text-cream/85 italic">
            Not manufactured. Found.
          </p>
        </div>

        {/* Phase 4 — tension, then form */}
        <div className={`${reveal(4)} w-full flex flex-col items-center gap-7`}>

          {/* Category doubt — the sentence that creates separation */}
          <p className="font-sans text-[13px] text-cream/50 leading-relaxed max-w-sm">
            Every supplement brand claims third-party tested.
            We publish the actual document.
          </p>

          {/* Social proof + scarcity — the two lines that make leaving feel like a loss */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cream/30" />
              <span className="font-sans text-[10px] tracking-[0.35em] text-cream/35 uppercase">170,000 following</span>
            </div>
            <span className="text-cream/15">·</span>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gold/50" />
              <span className="font-sans text-[10px] tracking-[0.35em] text-gold/55 uppercase">First batch · 100 jars</span>
            </div>
          </div>

          {/* Form */}
          <SubscribeForm className="max-w-sm mx-auto w-full" />

        </div>

      </div>

    </section>
  )
}

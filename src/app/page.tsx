'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SubscribeForm from '@/components/SubscribeForm'

/* ─────────────────────────────────────────────────
   INTRO OVERLAY
───────────────────────────────────────────────── */
function IntroOverlay() {
  const [show, setShow] = useState(false)
  const [out, setOut]   = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('e72-intro')) return
    setShow(true)
    const t1 = setTimeout(() => setOut(true), 1900)
    const t2 = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('e72-intro', '1')
    }, 2700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!show) return null
  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
      style={{ background: '#09090B' }}
      animate={{ opacity: out ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, rgba(199,146,62,0.14) 0%, transparent 65%)' }} />
      </div>
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Image src="/e72-logo.png" alt="" aria-hidden width={48} height={48} className="opacity-80" />
        <p className="font-mono text-[11px] tracking-[0.6em] uppercase" style={{ color: 'rgba(245,245,240,0.45)' }}>
          Proof before price.
        </p>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────
   SCROLL PROGRESS
───────────────────────────────────────────────── */
function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div
      className="fixed top-0 left-0 z-[250] h-[2px]"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(90deg, #B87333, #C7923E)',
        transition: 'width 0.1s linear',
      }}
    />
  )
}

/* ─────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────── */
function Counter({ target = 1.57, duration = 2000 }: { target?: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      const t0 = Date.now()
      const tick = () => {
        const t = Math.min((Date.now() - t0) / duration, 1)
        setVal(parseFloat((target * (1 - Math.pow(1 - t, 3))).toFixed(2)))
        if (t < 1) requestAnimationFrame(tick); else setVal(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref} className="tabular-nums">{val.toFixed(2)}</span>
}

/* ─────────────────────────────────────────────────
   METAL BAR
───────────────────────────────────────────────── */
function MetalBar({ pct, delay = 0 }: { pct: number; delay?: number }) {
  const [w, setW] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      setTimeout(() => setW(pct), delay)
      obs.disconnect()
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct, delay])
  return (
    <div ref={ref} className="flex-1 h-[1px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
      <div className="h-full" style={{ width: `${w}%`, background: '#5a9e6f', transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }} />
    </div>
  )
}

/* ─────────────────────────────────────────────────
   COUNTDOWN
───────────────────────────────────────────────── */
function useCountdown(iso: string) {
  const [t, setT] = useState({ days: '000', hrs: '00', min: '00', sec: '00' })
  useEffect(() => {
    const ms = new Date(iso).getTime()
    const tick = () => {
      let d = Math.max(0, ms - Date.now())
      const days = Math.floor(d / 86400000); d -= days * 86400000
      const hrs  = Math.floor(d / 3600000);  d -= hrs * 3600000
      const min  = Math.floor(d / 60000);    d -= min * 60000
      const sec  = Math.floor(d / 1000)
      setT({ days: String(days).padStart(3, '0'), hrs: String(hrs).padStart(2, '0'), min: String(min).padStart(2, '0'), sec: String(sec).padStart(2, '0') })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [iso])
  return t
}

/* ─────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────── */
const TICKER = 'HEAVY METALS TESTED  ·  SAMPLED AND SEALED BY THE LAB  ·  EUROFINS ANALYTICAL  ·  BATCH MSRB03  ·  PROOF BEFORE PRICE  ·  NABL ACCREDITED  ·  SINGLE ORIGIN  ·  '

const COA_ROWS = [
  { label: 'Report No.',     value: 'AR-260-2026-00018035-01-01', green: false },
  { label: 'Batch',          value: 'MSRB03',             green: false },
  { label: 'Sample',         value: 'Shilajit Resin',     green: false },
  { label: 'Laboratory',     value: 'Eurofins Analytical', green: false },
  { label: 'Accreditation',  value: 'NABL-accredited',    green: false },
  { label: 'Sampling',       value: 'Sealed by the lab',  green: false },
  { label: 'Lead (Pb)',      value: '0.047 mg/kg',        green: true  },
  { label: 'Cadmium (Cd)',   value: '0.032 mg/kg',        green: true  },
  { label: 'Mercury (Hg)',   value: '<0.010 mg/kg',       green: true  },
  { label: 'Arsenic (As)',   value: '0.112 mg/kg',        green: false },
]

const METALS = [
  { name: 'Lead (Pb)',    bar: 1.6, share: '1.6%'  },
  { name: 'Cadmium (Cd)', bar: 3.2, share: '3.2%'  },
  { name: 'Mercury (Hg)', bar: 10,  share: '<10%'  },
  { name: 'Arsenic (As)', bar: 0,   share: 'NO EU LIMIT' },
]

const COMPOUNDS = [
  {
    name: 'Shilajit Resin',
    status: 'CLEARED',
    pill: { bg: 'rgba(90,158,111,0.12)', border: 'rgba(90,158,111,0.3)', color: '#5a9e6f' },
    facts: [
      ['Report', 'AR-260-2026-00018035-01-01'],
      ['Lab', 'Eurofins Analytical (NABL-accredited)'],
      ['Sampling', 'Drawn and sealed by the laboratory at source'],
      ['Heavy Metals', 'Four tested · lead at 1.6% of the EU maximum'],
      ['Origin', 'Single origin'],
    ],
  },
  {
    name: 'Sea Moss',
    status: 'IN ANALYSIS',
    pill: { bg: 'rgba(184,115,51,0.12)', border: 'rgba(184,115,51,0.3)', color: '#B87333' },
    facts: [
      ['Status', 'Sample submitted, results pending'],
      ['Lab', 'Eurofins Analytical'],
      ['Origin', 'Zanzibar, Tanzania'],
    ],
  },
  {
    name: 'Tongkat Ali',
    status: 'QUEUED',
    pill: { bg: 'rgba(245,245,240,0.04)', border: 'rgba(245,245,240,0.10)', color: 'rgba(245,245,240,0.3)' },
    facts: [
      ['Status', 'Pending regulatory pre-clearance'],
      ['Blocker', 'PPB classification review required'],
    ],
  },
  {
    name: 'Berberine',
    status: 'QUEUED',
    pill: { bg: 'rgba(245,245,240,0.04)', border: 'rgba(245,245,240,0.10)', color: 'rgba(245,245,240,0.3)' },
    facts: [
      ['Status', 'Supplier outreach pending'],
      ['Next step', 'Source selection → testing'],
    ],
  },
]

const STEPS = [
  ['SOURCE',       'Single-origin supplier with documented chain of custody. Named origin, named region, documented altitude and season.'],
  ['TEST',         'Sent to Eurofins Analytical before any other step. Full heavy metal panel, fulvic acid quantification, microbial safety screen.'],
  ['PUBLISH COA',  'The Certificate of Analysis is made public before a price is set. The document exists before anything is sold.'],
  ['SET PRICE',    'Price is calculated after the cost of testing and sourcing are accounted for. The number reflects reality.'],
  ['SHIP',         'Product ships only after all of the above. No exceptions. KEBS certification must clear before anything leaves.'],
]

/* ─────────────────────────────────────────────────
   SECTION WRAPPER — glow divider at top
───────────────────────────────────────────────── */
function Section({ id, bg = '#09090B', children, className = '' }: { id?: string; bg?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative px-6 py-28 md:py-44 overflow-hidden ${className}`} style={{ background: bg }}>
      <div className="glow-divider absolute top-0 left-0 right-0" />
      {children}
    </section>
  )
}

/* ─────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────── */
export default function Home() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const countdown = useCountdown('2026-09-30T00:00:00+03:00')
  const toggle = useCallback((i: number) => setOpenIdx(p => p === i ? null : i), [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target) } })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const heroVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  }
  const heroItem = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }

  return (
    <>
      <IntroOverlay />
      <ScrollProgress />

      <div className="-mt-[72px]">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex flex-col overflow-hidden"
          style={{ background: '#09090B' }}
        >
          {/* Ambient right glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-[-5%] top-[10%] w-[55%] h-[80%]"
              style={{ background: 'radial-gradient(ellipse at right center, rgba(199,146,62,0.055) 0%, transparent 65%)' }} />
          </div>

          <div className="h-[72px] shrink-0" />

          <motion.div
            className="flex-1 flex flex-col justify-center"
            variants={heroVariants}
            initial="hidden"
            animate="show"
          >
            <div className="max-w-7xl mx-auto px-6 w-full py-12">
              <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-0">

                {/* ── Left: copy ── */}
                <div className="relative z-10">
                  <motion.div variants={heroItem} className="flex items-center gap-3 mb-10">
                    <span className="block w-6 h-px" style={{ background: '#B87333' }} />
                    <p className="font-mono text-[9px] tracking-[0.55em] uppercase" style={{ color: 'rgba(184,115,51,0.7)' }}>
                      Batch MSRB03 · Shilajit Resin · Himalayan Origin
                    </p>
                  </motion.div>

                  <motion.h1
                    variants={heroItem}
                    className="font-serif leading-[0.92] mb-10"
                    style={{ fontSize: 'clamp(4.5rem,9vw,8rem)', color: '#F5F5F0' }}
                  >
                    Proof<br />
                    before<br />
                    <em style={{ color: '#C7923E' }}>price.</em>
                  </motion.h1>

                  <motion.p
                    variants={heroItem}
                    className="font-sans leading-relaxed mb-12 max-w-xs"
                    style={{ fontSize: 'clamp(0.9rem,1.4vw,1.05rem)', color: 'rgba(245,245,240,0.38)' }}
                  >
                    Every batch is tested before priced. The certificate
                    exists before the product ships. Always.
                  </motion.p>

                  <motion.div variants={heroItem} className="flex flex-wrap gap-3">
                    <a
                      href="#batch"
                      className="group relative inline-flex items-center px-7 py-3.5 font-sans text-[11px] tracking-[0.28em] uppercase font-medium overflow-hidden"
                      style={{ background: '#C7923E', color: '#09090B' }}
                    >
                      <span className="relative z-10">JOIN THE WAITLIST</span>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#B87333' }} />
                    </a>
                    <a
                      href="#proof"
                      className="inline-flex items-center px-7 py-3.5 font-sans text-[11px] tracking-[0.28em] uppercase transition-colors duration-300"
                      style={{ border: '1px solid rgba(245,245,240,0.10)', color: 'rgba(245,245,240,0.45)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.8)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.22)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,240,0.45)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,245,240,0.10)' }}
                    >
                      VIEW COA
                    </a>
                  </motion.div>
                </div>

                {/* ── Right: jar with studio spotlight ── */}
                <motion.div
                  variants={heroItem}
                  className="flex items-center justify-center relative"
                >
                  {/* Studio spotlight — handles any jar background color */}
                  <div
                    className="absolute w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(255,252,245,0.06) 0%, rgba(199,146,62,0.04) 45%, transparent 72%)',
                    }}
                  />
                  {/* Copper glow ring */}
                  <div
                    className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full animate-glow-pulse pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(184,115,51,0.10) 0%, rgba(184,115,51,0.03) 55%, transparent 72%)' }}
                  />
                  {/* Floating jar */}
                  <div className="animate-float relative z-10">
                    <Image
                      src="/e72-jar.png"
                      alt="Element 72 Shilajit Resin — Batch MSRB03"
                      width={440}
                      height={440}
                      className="w-[260px] md:w-[320px] lg:w-[380px]"
                      style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(184,115,51,0.08))' }}
                      priority
                    />
                  </div>
                  {/* Lab spec overlay — bottom right */}
                  <div className="absolute bottom-4 right-0 text-right space-y-1 pointer-events-none">
                    <p className="font-mono text-[8px] tracking-[0.32em]" style={{ color: 'rgba(245,245,240,0.22)' }}>HEAVY METALS TESTED</p>
                    <p className="font-mono text-[8px] tracking-[0.32em]" style={{ color: 'rgba(245,245,240,0.22)' }}>LEAD 1.6% OF EU MAX</p>
                    <p className="font-mono text-[8px] tracking-[0.32em]" style={{ color: 'rgba(245,245,240,0.22)' }}>NABL ACCREDITED</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Metadata strip */}
            <div style={{ borderTop: '1px solid rgba(245,245,240,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[['BATCH','MSRB03'],['REPORT','AR-260-2026-00018035-01-01'],['LAB','Eurofins Analytical'],['STATUS','KEBS SM#102053']].map(([k, v]) => (
                  <div key={k}>
                    <p className="font-mono text-[8px] tracking-[0.45em] mb-1.5" style={{ color: 'rgba(184,115,51,0.5)' }}>{k}</p>
                    <p className="font-mono text-[11px]" style={{ color: 'rgba(245,245,240,0.5)' }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            TICKER
        ══════════════════════════════════════════ */}
        <div className="overflow-hidden py-[10px]" style={{ background: 'linear-gradient(90deg, #B87333 0%, #C7923E 50%, #B87333 100%)' }}>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-mono text-[10px] tracking-[0.3em]" style={{ color: 'rgba(9,9,11,0.7)' }}>{TICKER}</span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            THE STANDARD
        ══════════════════════════════════════════ */}
        <Section id="standard">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-[9px] tracking-[0.55em] uppercase mb-6 reveal" style={{ color: 'rgba(184,115,51,0.7)' }}>THE STANDARD</p>
            <h2 className="font-serif text-paper leading-[1.05] max-w-3xl mb-20 reveal" style={{ fontSize: 'clamp(2rem,5vw,4rem)' }}>
              Most supplements are priced before tested.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Industry */}
              <div className="glass p-8 md:p-10 reveal">
                <p className="font-mono text-[9px] tracking-[0.45em] mb-8" style={{ color: 'rgba(245,245,240,0.28)' }}>THE INDUSTRY</p>
                <div className="space-y-0">
                  {['Price is set first. Testing is optional.','Suppliers are rarely named. Origins are vague.','"Third-party tested" appears on labels with no document.','Certification is marketing, not evidence.'].map((item, i) => (
                    <div key={i} className="flex gap-4 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="font-mono text-[9px] shrink-0 pt-0.5" style={{ color: 'rgba(245,245,240,0.18)' }}>0{i+1}</span>
                      <p className="font-sans text-[0.9rem] leading-relaxed" style={{ color: 'rgba(245,245,240,0.35)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Position */}
              <div className="glass-copper p-8 md:p-10 reveal reveal-d2">
                <p className="font-mono text-[9px] tracking-[0.45em] text-copper mb-8">OUR POSITION</p>
                <div className="space-y-0">
                  {['Test first. Publish the result. Then set the price.','Single-origin, documented chain of custody, sample sealed by the laboratory.','Certificate of Analysis is published in full before launch.','KEBS certification is a regulatory requirement, not a badge.'].map((item, i) => (
                    <div key={i} className="flex gap-4 py-5" style={{ borderBottom: '1px solid rgba(184,115,51,0.08)' }}>
                      <span className="font-mono text-[9px] text-copper/50 shrink-0 pt-0.5">0{i+1}</span>
                      <p className="font-sans text-[0.9rem] leading-relaxed font-medium" style={{ color: 'rgba(245,245,240,0.82)' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            THE PROOF
        ══════════════════════════════════════════ */}
        <Section id="proof" bg="#0D0D0F">
          {/* Left ambient glow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,115,51,0.07) 0%, transparent 70%)' }} />

          <div className="max-w-7xl mx-auto relative">
            <p className="font-mono text-[9px] tracking-[0.55em] uppercase mb-8 reveal" style={{ color: 'rgba(184,115,51,0.7)' }}>THE PROOF</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

              {/* Counter + bars */}
              <div>
                <div className="mb-3 flex items-end leading-none">
                  <span className="font-mono" style={{ fontSize: 'clamp(5rem,15vw,10.5rem)', lineHeight: 0.85, color: '#F5F5F0' }}>
                    <Counter />
                  </span>
                  <span className="font-mono pb-2 pl-1" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#B87333' }}>%</span>
                </div>
                <p className="font-mono text-[9px] tracking-[0.42em] uppercase mb-16" style={{ color: 'rgba(245,245,240,0.28)' }}>
                  LEAD, AS A SHARE OF THE EU MAXIMUM · BATCH MSRB03 · EUROFINS TESTED
                </p>

                <p className="font-mono text-[9px] tracking-[0.45em] uppercase mb-6" style={{ color: 'rgba(184,115,51,0.6)' }}>HEAVY METAL PANEL</p>
                <div className="space-y-5">
                  {METALS.map((m, i) => (
                    <div key={m.name} className="flex items-center gap-4">
                      <span className="font-mono text-[10px] w-28 shrink-0" style={{ color: 'rgba(245,245,240,0.32)' }}>{m.name}</span>
                      <MetalBar pct={m.bar} delay={i * 120} />
                      <span className="font-mono text-[10px] w-24 shrink-0 text-right" style={{ color: m.bar === 0 ? 'rgba(245,245,240,0.32)' : '#5a9e6f' }}>{m.share}</span>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[8px] tracking-[0.22em] uppercase mt-5" style={{ color: 'rgba(245,245,240,0.18)' }}>
                  SHARE OF THE EU 2023/915 MAXIMUM · ARSENIC HAS NO EU LIMIT IN THIS MATRIX
                </p>
              </div>

              {/* Glass CoA card */}
              <div className="relative">
                <div className="absolute -inset-6 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(184,115,51,0.05) 0%, transparent 70%)' }} />
                <div className="relative glass">
                  <div className="px-7 py-5 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <p className="font-mono text-[9px] tracking-[0.38em] text-copper uppercase">Certificate of Analysis</p>
                    <span className="font-mono text-[8px] tracking-[0.2em] px-3 py-1" style={{ color: 'rgba(245,245,240,0.28)', border: '1px solid rgba(255,255,255,0.08)' }}>NABL</span>
                  </div>
                  <div className="px-7">
                    {COA_ROWS.map(r => (
                      <div key={r.label} className="py-[13px] flex items-center justify-between gap-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <span className="font-mono text-[10px]" style={{ color: 'rgba(245,245,240,0.28)' }}>{r.label}</span>
                        <span className="font-mono text-[10px]" style={{ color: r.green ? '#5a9e6f' : 'rgba(245,245,240,0.58)' }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-7 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <p className="font-mono text-[8px] tracking-[0.15em] uppercase leading-relaxed" style={{ color: 'rgba(245,245,240,0.18)' }}>
                      Full CoA shared with waitlist members at launch. Tested before priced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            THE LIBRARY
        ══════════════════════════════════════════ */}
        <Section id="library">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-[9px] tracking-[0.55em] uppercase mb-6 reveal" style={{ color: 'rgba(184,115,51,0.7)' }}>THE LIBRARY</p>
            <h2 className="font-serif text-paper leading-[1.08] max-w-xl mb-4 reveal" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
              Every compound. Every status.
            </h2>
            <p className="font-sans text-[0.9rem] leading-relaxed mb-16 reveal" style={{ color: 'rgba(245,245,240,0.32)' }}>
              We track each compound from sourcing to certification. Nothing ships until it clears.
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {COMPOUNDS.map((c, i) => (
                <div key={c.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-[9px] w-5 shrink-0" style={{ color: 'rgba(245,245,240,0.18)' }}>0{i+1}</span>
                      <span
                        className="font-serif transition-colors duration-300"
                        style={{ fontSize: 'clamp(1.05rem,2.5vw,1.4rem)', color: openIdx === i ? '#F5F5F0' : 'rgba(245,245,240,0.7)' }}
                      >
                        {c.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      <span
                        className="font-mono text-[8px] tracking-[0.35em] uppercase px-3 py-1"
                        style={{ background: c.pill.bg, border: `1px solid ${c.pill.border}`, color: c.pill.color }}
                      >
                        {c.status}
                      </span>
                      <span className="font-mono text-xl w-5 text-center leading-none" style={{ color: 'rgba(245,245,240,0.2)' }}>
                        {openIdx === i ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-11 pb-8 pt-4" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                            {c.facts.map(([k, v]) => (
                              <div key={k}>
                                <p className="font-mono text-[8px] tracking-[0.4em] uppercase mb-1.5" style={{ color: 'rgba(245,245,240,0.26)' }}>{k}</p>
                                <p className="font-mono text-[11px]" style={{ color: 'rgba(245,245,240,0.60)' }}>{v}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            THE PROTOCOL
        ══════════════════════════════════════════ */}
        <Section id="protocol" bg="#0D0D0F">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-[9px] tracking-[0.55em] uppercase mb-6 reveal" style={{ color: 'rgba(184,115,51,0.7)' }}>THE PROTOCOL</p>
            <h2 className="font-serif text-paper leading-[1.08] mb-20 reveal" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
              Five steps. In order.<br />No exceptions.
            </h2>

            <div>
              {STEPS.map(([title, body], i) => (
                <motion.div
                  key={title}
                  className="grid grid-cols-[32px_1fr] gap-6 md:gap-12 py-8 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col items-center gap-0 pt-0.5">
                    <span className="font-mono text-[10px] text-copper/55 block">{String(i+1).padStart(2,'0')}</span>
                    {i < STEPS.length - 1 && (
                      <div className="flex-1 w-px mt-3" style={{ background: 'rgba(255,255,255,0.05)', minHeight: '32px' }} />
                    )}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.38em] uppercase mb-3 group-hover:text-copper transition-colors duration-300" style={{ color: 'rgba(245,245,240,0.42)' }}>
                      {title}
                    </p>
                    <p className="font-sans text-[0.92rem] leading-relaxed max-w-2xl" style={{ color: 'rgba(245,245,240,0.42)' }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════
            THE BATCH
        ══════════════════════════════════════════ */}
        <Section id="batch">
          {/* Bottom ambient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at bottom, rgba(199,146,62,0.06) 0%, transparent 70%)' }} />

          <div className="max-w-7xl mx-auto relative">
            <p className="font-mono text-[9px] tracking-[0.55em] uppercase mb-6 reveal" style={{ color: 'rgba(184,115,51,0.7)' }}>THE BATCH</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Copy + countdown */}
              <div>
                <h2 className="font-serif text-paper leading-[1.05] mb-5 reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)' }}>
                  When you&apos;re ready.<br />Not before.
                </h2>
                <p className="font-sans text-[0.92rem] leading-relaxed mb-16 reveal" style={{ color: 'rgba(245,245,240,0.35)' }}>
                  Batch MSRB03 is the first fill. You&apos;ll receive 48 hours advance notice, the full Certificate of Analysis, and first access to pricing.
                </p>

                {/* Countdown */}
                <div className="flex items-start gap-4 sm:gap-6 mb-16">
                  {[{ v: countdown.days, l: 'DAYS', a: false }, { v: countdown.hrs, l: 'HRS', a: false }, { v: countdown.min, l: 'MIN', a: false }, { v: countdown.sec, l: 'SEC', a: true }].map((u, i) => (
                    <div key={u.l} className="flex items-start gap-4 sm:gap-6">
                      {i > 0 && (
                        <span className="font-mono" style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', color: 'rgba(184,115,51,0.28)', lineHeight: 0.88 }}>:</span>
                      )}
                      <div className="flex flex-col items-center gap-2">
                        <span className="font-mono font-light tabular-nums" style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', lineHeight: 0.88, color: u.a ? '#C7923E' : '#F5F5F0' }}>
                          {u.v}
                        </span>
                        <span className="font-mono text-[8px] tracking-[0.42em]" style={{ color: 'rgba(245,245,240,0.24)' }}>{u.l}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(245,245,240,0.30)' }}>Reserved</p>
                    <p className="font-mono text-[10px] text-copper">382 / 500</p>
                  </div>
                  <div className="h-[1px] overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-full bg-copper" style={{ width: '76%' }} />
                  </div>
                  <p className="font-mono text-[8px] tracking-[0.28em] uppercase mt-3" style={{ color: 'rgba(245,245,240,0.18)' }}>
                    76% of first batch reserved
                  </p>
                </div>
              </div>

              {/* Glass form */}
              <div className="relative">
                <div className="absolute -inset-4 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(199,146,62,0.05) 0%, transparent 70%)' }} />
                <div className="relative glass p-8 md:p-10">
                  <p className="font-mono text-[9px] tracking-[0.45em] text-copper uppercase mb-5">Reserve Your Spot</p>
                  <h3 className="font-serif text-paper mb-3" style={{ fontSize: '1.55rem' }}>Join the waitlist</h3>
                  <p className="font-sans text-[0.88rem] leading-relaxed mb-8" style={{ color: 'rgba(245,245,240,0.33)' }}>
                    No payment now. You&apos;ll receive the full CoA, sourcing story, and 48-hour early access when the batch is released.
                  </p>
                  <SubscribeForm />
                  <p className="font-mono text-[8px] tracking-[0.28em] uppercase mt-6" style={{ color: 'rgba(245,245,240,0.16)' }}>
                    No payment · No spam · Unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

      </div>
    </>
  )
}

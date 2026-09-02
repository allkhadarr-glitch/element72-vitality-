import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lab — Element 72 Vitality',
  description: 'Every batch of Element 72 products is third-party tested. This is where the results live — publicly, permanently, by batch.',
}

const batches = [
  {
    id: 'MSRB03',
    product: 'Shilajit Resin',
    status: 'Verified · July 2026',
    statusColor: 'text-gold/80',
    dotColor: 'bg-gold',
  },
  {
    id: 'E72-BSO01',
    product: 'Black Seed Oil',
    status: 'Sourcing underway',
    statusColor: 'text-cream/40',
    dotColor: 'bg-cream/25',
  },
]

export default function LabPage() {
  return (
    <div className="bg-earth min-h-screen">

      {/* ── HEADER ── */}
      <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-36 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8 animate-fade-up delay-100">
            Transparency
          </p>
          <h1 className="font-serif text-[clamp(3rem,9vw,7rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200">
            The Lab
          </h1>
          <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] max-w-md animate-fade-up delay-300">
            Every batch is third-party tested before it ships. The results live here — publicly, permanently,
            by batch number.
          </p>
          <p className="font-sans text-cream/40 text-[0.875rem] leading-[1.85] max-w-md mt-5 animate-fade-up delay-300">
            Your batch number is stamped on the base of your box, after <span className="text-cream/70">LOT</span>.
            Find it in the list below.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 py-20 md:py-28 border-b border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/[0.05]">
          {[
            { n: '01', title: 'Batch produced', body: 'Raw material received from verified supplier. Purified or processed at origin before arrival in Kenya.' },
            { n: '02', title: 'Independent lab test', body: 'Every batch is sent to a NABL-accredited third-party laboratory. We do not test our own products.' },
            { n: '03', title: 'Results published here', body: 'Full test parameters, results, and limits are published on this page — linked from the QR code on every jar.' },
          ].map(item => (
            <div key={item.n} className="bg-earth-card p-10">
              <p className="font-sans text-[9px] tracking-[0.4em] text-gold/50 uppercase mb-6">{item.n}</p>
              <p className="font-sans text-[10px] tracking-[0.3em] text-cream/60 uppercase mb-4">{item.title}</p>
              <p className="font-sans text-cream/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BATCH LIST ── */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto divide-y divide-cream/[0.06]">
          <div className="py-8">
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-2">All Batches</p>
          </div>
          {batches.map(b => (
            <Link
              key={b.id}
              href={`/lab/${b.id}`}
              className="group flex items-center justify-between gap-8 py-10 hover:opacity-75 transition-opacity duration-300"
            >
              <div className="flex items-center gap-5">
                <div className={`w-1.5 h-1.5 rounded-full ${b.dotColor} shrink-0`} />
                <div>
                  <p className="font-sans text-[9px] tracking-[0.35em] text-gold uppercase mb-1">{b.product}</p>
                  <p className="font-serif text-xl text-cream leading-none">{b.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span className={`font-sans text-[10px] tracking-[0.2em] uppercase hidden sm:block ${b.statusColor}`}>{b.status}</span>
                <span className="font-serif text-cream/25 group-hover:text-gold transition-colors duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY PUBLIC ── */}
      <section className="px-6 py-20 md:py-28 border-t border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8">Why we publish this</p>
            <p className="font-serif text-2xl md:text-3xl text-cream leading-snug">
              The supplement industry survives on vagueness.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              "Third-party tested" is on almost every label. Almost none of them show you the document.
              They use it as a claim without giving you the evidence.
            </p>
            <p className="font-sans text-cream/60 text-[0.95rem] leading-[1.85]">
              We publish the test parameters, the results, and the limits for every batch —
              before it ships and after it sells. If a batch fails any parameter, this page
              will say so, and the batch will not ship.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// ── Batch database ────────────────────────────────────────────────────────────
// Add new batches here as they ship. The QR code on every carton points to
// element72vitality.com/verify, which lands on /lab. The customer reads the LOT
// stamped on the base of their box and opens that batch here.
//
// RULES FOR THIS FILE — read before adding a batch:
//  1. Only MEASURED RESULTS go in `tests`. Never a manufacturer specification.
//  2. Name the METHOD, always. A number without a method is not evidence.
//  3. Never write "ISO 17025". The reports state a NABL scope. Say NABL.
//  4. Never name the supplier or the sampling town. Publish sampling INTEGRITY
//     (the lab drew and sealed its own sample) — that is the stronger fact and
//     it does not trace back to a manufacturer.
//  5. Anything outside the lab's accredited scope goes in `composition`, not in
//     `tests`, and says so on its face.

const BATCHES: Record<string, BatchData> = {
  // ── LIVE BATCH — first commercial import, cleared Nairobi 20 Aug 2026 ──
  MSRB03: {
    id: 'MSRB03',
    product: 'Shilajit Resin',
    origin: 'Sample drawn and sealed by the testing laboratory at source',
    custody: 'Laboratory seal 420888 · sampled 8 July 2026',
    batchDate: 'Manufactured July 2026 · Best before June 2028',
    labName: 'Eurofins Analytical Services India',
    labStandard: 'NABL-accredited scope · ULR TC640026000027514F',
    status: 'VERIFIED',
    tests: [
      // Heavy metals — report AR-260-2026-00018035-01-01, LOQ 0.01 mg/kg on all four.
      { category: 'Heavy Metals',   parameter: 'Arsenic (As)',        result: '0.112 mg/kg',      limit: 'No EU maximum set',        method: 'ICP-MS',            status: 'PASS' },
      { category: 'Heavy Metals',   parameter: 'Lead (Pb)',           result: '0.047 mg/kg',      limit: 'EU maximum 3.0 mg/kg',     method: 'ICP-MS',            status: 'PASS' },
      { category: 'Heavy Metals',   parameter: 'Cadmium (Cd)',        result: '0.032 mg/kg',      limit: 'EU maximum 1.0 mg/kg',     method: 'ICP-MS',            status: 'PASS' },
      { category: 'Heavy Metals',   parameter: 'Mercury (Hg)',        result: 'Below 0.010 mg/kg', limit: 'EU maximum 0.1 mg/kg',    method: 'ICP-MS',            status: 'PASS' },
      // Microbiology — same report, accredited pages.
      { category: 'Microbiology',   parameter: 'Aerobic plate count', result: 'Below 10 cfu/g',   limit: 'Limit of quantification 10 cfu/g', method: 'ISO 4833-1:2013',  status: 'PASS' },
      { category: 'Microbiology',   parameter: 'Escherichia coli',    result: 'Below 10 cfu/g',   limit: 'Limit of quantification 10 cfu/g', method: 'ISO 16649-2:2001', status: 'PASS' },
      { category: 'Microbiology',   parameter: 'Salmonella',          result: 'Absent in 25 g',   limit: 'Must be absent',           method: 'ISO 6579-1:2017',   status: 'PASS' },
      { category: 'Microbiology',   parameter: 'Yeasts and moulds',   result: 'Below 10 cfu/g',   limit: 'Limit of quantification 10 cfu/g', method: 'ISO 21527-2:2008', status: 'PASS' },
      // Sterilant residue — separate accredited report AR-260-2026-00017846-01,
      // ULR TC640026000026760F, same sampling event.
      { category: 'Sterilant Residue', parameter: 'Ethylene oxide, as the sum of ethylene oxide and 2-chloroethanol', result: 'Below 0.010 mg/kg', limit: 'EU maximum residue level', method: 'Accredited report, ULR TC640026000026760F', status: 'PASS' },
    ],
    // Outside the laboratory's accredited scope. Kept separate from `tests` on
    // purpose: it is a composition measurement, not a safety pass/fail, and the
    // method it was measured by changes the number materially.
    composition: {
      parameter: 'Fulvic acid',
      result: '76.62',
      unit: 'g / 100 g',
      method: 'Titrimetric determination, laboratory method EASI-CHE-SOP-361',
      accredited: false,
      reportRef: 'Report annex AR-260-2026-00018035-01-02',
      explainer: [
        'This figure was produced by titration, which measures the total acid-base capacity of the material. Humic acid and other organic acids present in genuine resin respond to that test alongside fulvic acid, so it describes the whole family rather than the fulvic fraction on its own.',
        'The international standard method, ISO 19822:2018, separates the fulvic fraction and weighs it dry and ash-free. It returns a lower number for the same material. Both can be true of the same jar — they measure different things.',
      ],
      closer: 'Most shilajit prints a figure in the seventies and never says how it was measured. We would rather give you the method than let you assume one.',
    },
    notes: 'Heavy metals and microbiology: report AR-260-2026-00018035-01-01, 17 July 2026, report locator TC640026000027514F. Ethylene oxide: a separate accredited report, locator TC640026000026760F, from the same sampling event, tested as the sum of ethylene oxide and 2-chloroethanol — the full European definition rather than ethylene oxide alone. The laboratory drew and sealed the sample itself at source. Limit of quantification 0.01 mg/kg on all four metals. Arsenic is shown against no European maximum because none is set for this category. The laboratory concluded that the tested analytes meet Commission Regulation (EU) 2023/915, with respect to the tested analytes only. No mineral profile, dibenzo-alpha-pyrone content, pesticide screen or identity test is claimed here, because none was performed on this batch.',
  },

  'E72-BSO01': {
    id: 'E72-BSO01',
    product: 'Black Seed Oil',
    origin: 'Not yet sourced',
    custody: 'Not yet appointed',
    batchDate: 'Not yet produced',
    labName: 'Not yet appointed',
    labStandard: 'Not yet appointed',
    status: 'PENDING',
    tests: [],
    notes: 'Sourcing underway. Nothing is tested yet, so nothing is published yet. When the first batch is produced and tested, the measured results and the laboratory report reference will appear on this page.',
  },
}

type TestResult = {
  category: string
  parameter: string
  result: string
  limit: string
  method?: string
  status: 'PASS' | 'FAIL' | 'PENDING'
}

type Composition = {
  parameter: string
  result: string
  unit: string
  method: string
  accredited: boolean
  reportRef: string
  explainer: string[]
  closer?: string
}

type BatchData = {
  id: string
  product: string
  origin: string
  custody: string
  batchDate: string
  labName: string
  labStandard: string
  status: 'VERIFIED' | 'PENDING' | 'FAILED'
  tests: TestResult[]
  composition?: Composition
  notes: string
}

export function generateStaticParams() {
  return Object.keys(BATCHES).map(batch => ({ batch }))
}

export async function generateMetadata({ params }: { params: Promise<{ batch: string }> }): Promise<Metadata> {
  const { batch } = await params
  const data = BATCHES[batch.toUpperCase()]
  if (!data) return { title: 'Batch Not Found — Element 72 Vitality' }
  return {
    title: `Batch ${data.id} — ${data.product} · Element 72 Lab`,
    description: `Third-party test results for Element 72 ${data.product}, batch ${data.id}. ${data.labName} · ${data.labStandard}.`,
  }
}

export default async function LabBatchPage({ params }: { params: Promise<{ batch: string }> }) {
  const { batch } = await params
  const data = BATCHES[batch.toUpperCase()]

  if (!data) notFound()

  const passed   = data.tests.filter(t => t.status === 'PASS').length
  const pending  = data.tests.filter(t => t.status === 'PENDING').length
  const failed   = data.tests.filter(t => t.status === 'FAIL').length
  const verified = data.status === 'VERIFIED'

  const categories = [...new Set(data.tests.map(t => t.category))]

  return (
    <div className="min-h-screen bg-earth" style={{ fontFamily: 'inherit' }}>

      {/* ── Top bar ── */}
      <div
        className="sticky top-0 z-20 border-b border-cream/[0.08]"
        style={{ background: 'rgba(18,14,9,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{ background: 'rgba(201,165,90,0.12)', border: '1px solid rgba(201,165,90,0.2)' }}
            >
              <span className="font-serif text-gold text-xs font-bold">72</span>
            </div>
            <div>
              <div className="font-sans text-cream text-sm font-semibold leading-none tracking-wide">Element 72</div>
              <div className="font-sans text-cream/35 text-[10px] leading-none mt-0.5 tracking-widest uppercase">Lab Verification</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${verified ? 'bg-gold' : pending > 0 ? 'bg-cream/30' : 'bg-red-400'}`} />
            <span className={`font-sans text-[10px] tracking-[0.25em] uppercase ${verified ? 'text-gold/80' : pending > 0 ? 'text-cream/35' : 'text-red-400'}`}>
              {verified ? 'Verified' : pending > 0 ? 'Pending' : 'Review'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-8 space-y-5">

        {/* ── Batch header ── */}
        <div className="border border-cream/[0.08] bg-earth-card">
          <div className="px-6 py-5 border-b border-cream/[0.06]">
            <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-1">{data.product}</p>
            <h1 className="font-serif text-2xl text-cream leading-none mb-0.5">Batch {data.id}</h1>
            <p className="font-sans text-cream/35 text-xs tracking-wide">{data.batchDate}</p>
          </div>
          <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-1.5">Sampling</p>
              <p className="font-sans text-cream/70 text-sm leading-relaxed">{data.origin}</p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-1.5">Chain of custody</p>
              <p className="font-sans text-cream/70 text-sm leading-relaxed">{data.custody}</p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-1.5">Laboratory</p>
              <p className="font-sans text-cream/70 text-sm">{data.labName}</p>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-1.5">Standard</p>
              <p className="font-sans text-cream/70 text-sm">{data.labStandard}</p>
            </div>
          </div>
        </div>

        {/* ── Summary stats ── */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard val={passed}  label="Passed"  color={passed > 0 ? 'text-gold' : 'text-cream/30'} />
          <StatCard val={pending} label="Pending" color={pending > 0 ? 'text-cream/50' : 'text-cream/30'} />
          <StatCard val={failed}  label="Failed"  color={failed > 0 ? 'text-red-400' : 'text-cream/30'} />
        </div>

        {/* ── Test results by category ── */}
        {categories.map(cat => {
          const catTests = data.tests.filter(t => t.category === cat)
          return (
            <div key={cat} className="border border-cream/[0.08]">
              <div className="px-5 py-3 border-b border-cream/[0.06] flex items-center justify-between bg-earth-card">
                <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">{cat}</p>
                <p className="font-sans text-[9px] tracking-[0.3em] text-cream/25 uppercase">
                  {catTests.filter(t => t.status === 'PASS').length}/{catTests.length} passed
                </p>
              </div>
              {catTests.map((t, i) => (
                <div
                  key={i}
                  className={`px-5 py-4 flex items-start justify-between gap-4${i < catTests.length - 1 ? ' border-b border-cream/[0.05]' : ''}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[13px] text-cream/75 leading-snug">{t.parameter}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <span className="font-sans text-[10px] text-cream/45">{t.result}</span>
                      <span className="text-cream/20 text-[10px]">·</span>
                      <span className="font-sans text-[10px] text-cream/25">{t.limit}</span>
                      {t.method && (
                        <>
                          <span className="text-cream/20 text-[10px]">·</span>
                          <span className="font-sans text-[10px] text-cream/25">{t.method}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <StatusBadge status={t.status} />
                </div>
              ))}
            </div>
          )
        })}

        {/* ── Composition — the fulvic acid figure, with its method ── */}
        {data.composition && <CompositionBlock c={data.composition} />}

        {/* ── Notes ── */}
        {data.notes && (
          <div className="border border-cream/[0.08] px-5 py-4 bg-earth-card">
            <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase mb-2">Lab Notes</p>
            <p className="font-sans text-cream/50 text-[12px] leading-relaxed">{data.notes}</p>
          </div>
        )}

        {/* ── CoA request ── */}
        <div className="border border-cream/[0.08] px-5 py-6 text-center bg-earth-card">
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold/60 uppercase mb-3">Full Document</p>
          <p className="font-serif text-lg text-cream mb-2 leading-snug">Certificate of Analysis</p>
          <p className="font-sans text-cream/45 text-xs leading-relaxed mb-5 max-w-xs mx-auto">
            The complete laboratory reports — every parameter, every method, the accreditation
            and the report locators. Sent to any customer who asks.
          </p>
          <a
            href={`mailto:HQ@element72vitality.com?subject=CoA Request — Batch ${data.id}`}
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70 border border-gold/20 px-5 py-3 hover:text-gold hover:border-gold/40 transition-colors duration-200"
          >
            Request Full CoA
          </a>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between pt-2 pb-6">
          <Link
            href="/"
            className="font-sans text-[10px] tracking-[0.3em] text-cream/25 uppercase hover:text-cream/50 transition-colors duration-200"
          >
            ← element72vitality.com
          </Link>
          <p className="font-sans text-[9px] text-cream/20 tracking-wide">
            Batch {data.id} · {data.batchDate}
          </p>
        </div>

      </div>
    </div>
  )
}

function CompositionBlock({ c }: { c: Composition }) {
  return (
    <div className="border border-gold/20">
      <div className="px-5 py-3 border-b border-cream/[0.06] flex items-center justify-between bg-earth-card">
        <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Composition</p>
        <p className="font-sans text-[9px] tracking-[0.3em] text-cream/25 uppercase">
          {c.accredited ? 'Accredited' : 'Outside accredited scope'}
        </p>
      </div>

      {/* the number */}
      <div className="px-6 py-7 border-b border-cream/[0.06] text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] text-cream/40 uppercase mb-3">{c.parameter}</p>
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-serif text-[3.25rem] leading-none text-gold">{c.result}</span>
          <span className="font-sans text-cream/40 text-sm tracking-wide">{c.unit}</span>
        </div>
        <p className="font-sans text-cream/45 text-[11px] leading-relaxed max-w-sm mx-auto">{c.method}</p>
        <p className="font-sans text-cream/25 text-[10px] mt-1.5 tracking-wide">{c.reportRef}</p>
      </div>

      {/* what the number means */}
      <div className="px-6 py-6 space-y-4 bg-earth-card">
        <p className="font-sans text-[9px] tracking-[0.4em] text-cream/30 uppercase">What this number means</p>
        {c.explainer.map((p, i) => (
          <p key={i} className="font-sans text-cream/55 text-[12.5px] leading-[1.85]">{p}</p>
        ))}
        {c.closer && (
          <p className="font-serif text-cream/85 text-[15px] leading-[1.65] pt-2 border-t border-cream/[0.06]">
            {c.closer}
          </p>
        )}
      </div>
    </div>
  )
}

function StatCard({ val, label, color }: { val: number; label: string; color: string }) {
  return (
    <div className="border border-cream/[0.08] bg-earth-card p-4 text-center">
      <div className={`font-serif text-2xl leading-none mb-1 ${color}`}>{val}</div>
      <div className="font-sans text-[9px] tracking-[0.3em] text-cream/25 uppercase">{label}</div>
    </div>
  )
}

function StatusBadge({ status }: { status: 'PASS' | 'FAIL' | 'PENDING' }) {
  if (status === 'PASS') return (
    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
      <div className="w-1 h-1 rounded-full bg-gold/70" />
      <span className="font-sans text-[9px] tracking-[0.25em] text-gold/70 uppercase">Pass</span>
    </div>
  )
  if (status === 'FAIL') return (
    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
      <div className="w-1 h-1 rounded-full bg-red-400" />
      <span className="font-sans text-[9px] tracking-[0.25em] text-red-400 uppercase">Fail</span>
    </div>
  )
  return (
    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
      <div className="w-1 h-1 rounded-full bg-cream/25" />
      <span className="font-sans text-[9px] tracking-[0.25em] text-cream/30 uppercase">Pending</span>
    </div>
  )
}

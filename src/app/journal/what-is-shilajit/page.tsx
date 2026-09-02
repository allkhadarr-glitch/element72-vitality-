import type { Metadata } from 'next'
import Link from 'next/link'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'What is Shilajit and why does it matter? — Element 72 Journal',
  description: 'Formed over millions of years in high-altitude mountain ranges, shilajit is one of the most mineral-dense substances found in nature. Here is what the science says.',
  openGraph: {
    title: 'What is Shilajit and why does it matter?',
    description: 'Formed over millions of years in high-altitude mountain ranges, shilajit is one of the most mineral-dense substances found in nature.',
    type: 'article',
  },
}

export default function ShilajitArticle() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        {/* Back */}
        <Link href="/journal" className="font-sans text-[10px] tracking-[0.3em] text-cream/35 uppercase hover:text-gold transition-colors duration-200 mb-12 inline-block">
          ← Journal
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-5">Shilajit</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-6">
            What is Shilajit and why does it matter?
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-sans text-[10px] tracking-wide text-cream/35">April 2026</span>
            <span className="font-sans text-[10px] text-cream/35">·</span>
            <span className="font-sans text-[10px] tracking-wide text-cream/35">6 min read</span>
          </div>
        </div>

        {/* Article body */}
        <div className="font-sans text-cream/75 text-[15px] leading-[1.85] flex flex-col gap-6">

          <p>
            Most supplements are manufactured. A compound is isolated in a laboratory, concentrated, and pressed into a capsule. The body receives it in a form it has never encountered in nature, and absorption is often poor.
          </p>

          <p>
            Shilajit is different. It is not manufactured. It is found.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">What shilajit actually is</h2>

          <p>
            Shilajit forms over millions of years as layers of plant matter — mosses, herbs, and organic material — become compressed between the rocks of high-altitude mountain ranges. The heat and pressure of the earth transforms this material into a dense, tar-like resin that seeps out of rock faces during warm months.
          </p>

          <p>
            It is found primarily in the Himalayas, the Altai mountains, the Caucasus range, and parts of Tibet. The highest-quality sources — those with the greatest mineral density and fulvic acid content — come from elevations above 3,000 metres.
          </p>

          <p>
            The word shilajit comes from Sanskrit and is often translated as "conqueror of mountains" or "destroyer of weakness." It has been documented in Ayurvedic texts for over 3,000 years.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">The chemistry: what is actually in it</h2>

          <p>
            The primary active compounds in shilajit are:
          </p>

          <div className="flex flex-col gap-4 pl-4 border-l border-gold/30">
            <div>
              <p className="text-cream/80 font-medium mb-1">Fulvic acid</p>
              <p>The most important compound. Fulvic acid is a short-chain organic acid that acts as a carrier molecule — it binds to minerals and nutrients and transports them directly across cell membranes. This is what gives shilajit its reputation for bioavailability. Without fulvic acid, many minerals pass through the body unabsorbed.</p>
            </div>
            <div>
              <p className="text-cream/80 font-medium mb-1">Humic acid (15–30%)</p>
              <p>Supports gut microbiome health and contributes to mineral absorption. Works synergistically with fulvic acid.</p>
            </div>
            <div>
              <p className="text-cream/80 font-medium mb-1">Up to 72 trace minerals</p>
              <p>Iron, zinc, magnesium, copper, selenium, manganese, and many others — all in organic, fulvic acid-bound form. This is where the Element 72 name comes from. These are not synthetic minerals. They are naturally occurring, formed over geological time in their most bioavailable state.</p>
            </div>
            <div>
              <p className="text-cream/80 font-medium mb-1">Dibenzo-α-pyrones</p>
              <p>Trace compounds that function as mitochondrial cofactors. They are the subject of ongoing clinical research, with early studies suggesting a role in cellular energy production.</p>
            </div>
          </div>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">Why sourcing determines everything</h2>

          <p>
            Not all shilajit is the same. The market is flooded with shilajit powder, shilajit extract blends, and resin that has been reconstituted from powder and re-moulded to look raw. These products bear little resemblance to genuine resin in terms of mineral density or fulvic acid content.
          </p>

          <p>
            Genuine shilajit resin comes in a small quantity from each batch — it cannot be scaled cheaply. This is why most commercial shilajit is adulterated. A low price is almost always a signal of adulteration.
          </p>

          <p>
            Element 72 sources raw resin from a single licensed manufacturer with full batch traceability. Every batch is tested by an independent, NABL-accredited laboratory for:
          </p>

          <ul className="flex flex-col gap-2 pl-4">
            {[
              'Heavy metals — lead, mercury, arsenic, cadmium',

              'Microbial safety — E. coli, Salmonella, total plate count',
              'Pesticide residue screen',
              'Moisture content and purity',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold/60 mt-1.5 text-xs">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            The Certificate of Analysis for every batch is available to customers upon request.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">How to take it</h2>

          <p>
            A rice-grain sized portion — approximately 300–500mg — dissolved in warm (not boiling) water, milk, or herbal tea. Take on an empty stomach in the morning. Daily use for a minimum of 30 days before evaluating results. Mineral replenishment is cumulative, not acute.
          </p>

          <p>
            Do not take shilajit with very hot liquids. Heat above approximately 60°C degrades fulvic acid content. Dissolve in warm, not boiling, liquid.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">The honest caveat</h2>

          <p>
            Shilajit is a food supplement. It is not a pharmaceutical and we will not present it as one. The research base is promising but much of it is early-stage. What is clear from both traditional use and modern studies is that mineral replenishment — in bioavailable form — matters for cellular function, and that most people in modern environments are mineral-deficient.
          </p>

          <p>
            Shilajit is one of the most efficient ways to address that. It is not magic. It is geology.
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-cream/[0.08] mt-16 pt-12">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Waitlist</p>
          <p className="font-serif text-2xl text-cream mb-6 leading-snug">
            Be the first to know<br />when shilajit is available.
          </p>
          <SubscribeForm className="max-w-sm" />
        </div>

        {/* Back to journal */}
        <div className="mt-12">
          <Link href="/journal" className="font-sans text-[10px] tracking-[0.3em] text-cream/35 uppercase hover:text-gold transition-colors duration-200">
            ← Back to Journal
          </Link>
        </div>

      </div>
    </div>
  )
}

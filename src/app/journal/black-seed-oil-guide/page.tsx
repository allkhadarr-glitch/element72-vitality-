import type { Metadata } from 'next'
import Link from 'next/link'
import SubscribeForm from '@/components/SubscribeForm'

export const metadata: Metadata = {
  title: 'Black Seed Oil: what the science says — Element 72 Journal',
  description: 'Used for centuries across East Africa, the Middle East, and South Asia, Nigella sativa has accumulated one of the most substantial research profiles of any botanical supplement.',
  openGraph: {
    title: 'Black Seed Oil: what the science says',
    description: 'Used for centuries across East Africa, the Middle East, and South Asia, Nigella sativa has one of the most substantial research profiles of any botanical supplement.',
    type: 'article',
  },
}

export default function BlackSeedOilArticle() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        {/* Back */}
        <Link href="/journal" className="font-sans text-[10px] tracking-[0.3em] text-cream/35 uppercase hover:text-gold transition-colors duration-200 mb-12 inline-block">
          ← Journal
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-5">Black Seed Oil</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-6">
            Black Seed Oil: what the science says
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-sans text-[10px] tracking-wide text-cream/35">April 2026</span>
            <span className="font-sans text-[10px] text-cream/35">·</span>
            <span className="font-sans text-[10px] tracking-wide text-cream/35">5 min read</span>
          </div>
        </div>

        {/* Article body */}
        <div className="font-sans text-cream/75 text-[15px] leading-[1.85] flex flex-col gap-6">

          <p>
            There is a hadith — a saying attributed to the Prophet Muhammad — that describes black seed as "a cure for everything except death." It appears in both Sahih al-Bukhari and Sahih Muslim, two of the most authoritative collections in Islamic tradition.
          </p>

          <p>
            This is the kind of historical claim that is easy to dismiss. But Nigella sativa has now accumulated a research profile substantial enough that dismissal is no longer straightforward.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">The plant</h2>

          <p>
            Nigella sativa is a flowering plant that grows across South Asia, the Middle East, and East Africa. Its small black seeds have been used across these regions for thousands of years — in cooking, in medicine, and in religious practice. In Arabic it is called habbatus sauda. In Swahili, mbegu nyeusi. In Hindi, kalonji.
          </p>

          <p>
            The oil is cold-pressed from the seeds. Cold-pressed means no heat is applied during extraction — heat degrades thymoquinone, the primary active compound, so processing method is directly tied to potency.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">Thymoquinone: the active compound</h2>

          <p>
            Thymoquinone (TQ) is the principal bioactive compound in Nigella sativa oil. It is responsible for most of the effects studied in the scientific literature. TQ concentration in commercial black seed oil varies widely — from below 0.5% in low-quality products to above 3% in high-quality, cold-pressed, unrefined oil from high-TQ seed stock.
          </p>

          <p>
            Origin matters here. East African Nigella sativa — particularly from Ethiopia and Eritrea — consistently yields higher TQ concentrations than seeds from other regions. This is a function of soil composition, altitude, and climate. It is the same logic that makes Kenyan single-estate coffee chemically distinct from commodity-grade beans.
          </p>

          <div className="flex flex-col gap-4 pl-4 border-l border-gold/30">
            <div>
              <p className="text-cream/80 font-medium mb-1">Thymoquinone</p>
              <p>Primary active compound. TQ concentration determines product quality more than any other single factor. Degrades with heat — cold-pressed only.</p>
            </div>
            <div>
              <p className="text-cream/80 font-medium mb-1">Carvacrol and p-cymene</p>
              <p>Secondary terpene compounds present in significant quantities. Both have documented antimicrobial properties.</p>
            </div>
            <div>
              <p className="text-cream/80 font-medium mb-1">Essential fatty acids</p>
              <p>Linoleic acid (omega-6) and oleic acid (omega-9) make up the bulk of the oil's fat composition. Contribute to the carrier medium for TQ absorption.</p>
            </div>
          </div>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">What the research shows</h2>

          <p>
            The volume of research on Nigella sativa is unusual for a botanical supplement. Over 1,000 peer-reviewed studies have been published on the plant and its compounds. The findings are consistent enough across enough independent research groups to take seriously.
          </p>

          <p>
            The most studied areas:
          </p>

          <ul className="flex flex-col gap-3 pl-4">
            {[
              { label: 'Antioxidant activity', detail: 'TQ has demonstrated significant free radical scavenging properties in multiple in vitro and animal studies.' },
              { label: 'Immune modulation', detail: 'Several studies have found effects on immune cell activity, suggesting a regulatory rather than purely stimulatory role.' },
              { label: 'Metabolic markers', detail: 'Human clinical trials have found effects on fasting blood glucose and lipid profiles in subjects with metabolic conditions.' },
              { label: 'Respiratory function', detail: 'A number of studies — including randomised controlled trials — have found improvements in lung function markers.' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="text-gold/60 mt-1.5 text-xs shrink-0">—</span>
                <span><span className="text-cream/80">{item.label}:</span> {item.detail}</span>
              </li>
            ))}
          </ul>

          <p>
            It is worth noting that the majority of this research uses standardised extracts at specific TQ concentrations in controlled settings. Translating this directly to a daily oil supplement requires caution. But the breadth of the research base — across institutions, across countries, across decades — suggests the underlying biology is real.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">Why sourcing and processing are non-negotiable</h2>

          <p>
            The black seed oil market has the same adulteration problem as shilajit. Most commercial black seed oil is:
          </p>

          <ul className="flex flex-col gap-2 pl-4">
            {[
              'Solvent-extracted rather than cold-pressed — cheaper but destroys TQ',
              'Refined after extraction — removes colour and odour but reduces potency',
              'Blended with carrier oils to increase volume',
              'From seed stock with no origin traceability',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold/60 mt-1.5 text-xs shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            Element 72 black seed oil is cold-pressed from single-origin East African Nigella sativa seed. It is unrefined. Every batch is third-party tested for TQ concentration, heavy metals, microbial safety, and adulteration.
          </p>

          <h2 className="font-serif text-2xl text-cream mt-6 mb-2">The honest framing</h2>

          <p>
            Black seed oil is a food supplement with a well-documented traditional use history and a growing clinical research base. It is not a pharmaceutical. We will not tell you it cures anything.
          </p>

          <p>
            What we will say is that the research is serious, the traditional use is ancient and cross-cultural, and the quality of the product you use determines whether you are getting the compound that the research studied or a degraded imitation of it.
          </p>

          <p>
            That is what the sourcing and testing standard exists to solve.
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-cream/[0.08] mt-16 pt-12">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Waitlist</p>
          <p className="font-serif text-2xl text-cream mb-6 leading-snug">
            Be the first to know<br />when black seed oil is available.
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

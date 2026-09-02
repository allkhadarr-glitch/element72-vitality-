'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'Shilajit',
    questions: [
      {
        q: 'What is shilajit?',
        a: 'Shilajit is a natural resin that forms over millions of years as plant matter decomposes and becomes compressed between mountain rocks. It is found primarily in the Himalayas, Altai, and Caucasus ranges. The result is a dense, tar-like substance rich in fulvic acid, humic acid, and up to 72 trace minerals — all in an organic, bioavailable form.',
      },
      {
        q: 'What is fulvic acid and why does it matter?',
        a: 'Fulvic acid is the primary active compound in shilajit. It acts as a carrier molecule — binding to minerals and nutrients and transporting them across cell membranes where the body can actually use them. Without fulvic acid, many minerals pass through the body without being absorbed. This is what separates shilajit from a standard mineral supplement.',
      },
      {
        q: 'What does "72 trace minerals" mean?',
        a: 'Shilajit contains up to 72 trace minerals — iron, zinc, magnesium, copper, selenium, and many others — all bound to fulvic acid in their organic form. The number 72 is also the origin of the Element 72 name. These are not synthetic minerals added to a formula. They are naturally occurring, formed over geological time.',
      },
      {
        q: 'Is shilajit safe to take daily?',
        a: 'Shilajit has a long history of use in Ayurvedic medicine and is generally well tolerated when taken at the correct dose — approximately 300–500mg daily. Element 72 shilajit is third-party tested for heavy metals, microbial contamination, and purity before it is offered for sale. If you are pregnant, nursing, or on medication, consult a healthcare professional before use.',
      },
      {
        q: 'How do I take shilajit resin?',
        a: 'A rice-grain sized portion — approximately 300–500mg — dissolved in warm (not boiling) water, milk, or herbal tea. Take on an empty stomach in the morning. Daily use for a minimum of 30 days is recommended before evaluating results. Mineral replenishment is cumulative, not immediate.',
      },
      {
        q: 'Why does Element 72 source shilajit from the Himalayas?',
        a: 'High-altitude Himalayan resin is considered the benchmark for fulvic acid content and mineral density. We buy from a single licensed manufacturer with full batch traceability, and we do not publish their identity. We do not use shilajit powder, extract blends, or resin reconstituted from powder. It is raw resin, and the testing laboratory drew and sealed its own sample at source rather than receiving one chosen by the manufacturer.',
      },
    ],
  },
  {
    category: 'Black Seed Oil',
    questions: [
      {
        q: 'What is black seed oil?',
        a: 'Black seed oil is cold-pressed from Nigella sativa seeds — a flowering plant native to South and Southwest Asia, also found across East Africa. It has been used for centuries across Muslim, Ayurvedic, and East African traditions. The primary active compound is thymoquinone (TQ), which has been the subject of extensive scientific research.',
      },
      {
        q: 'What is thymoquinone?',
        a: "Thymoquinone (TQ) is the main bioactive compound in Nigella sativa. It is responsible for most of the oil's studied properties. TQ concentration varies significantly by origin and processing method — cold-pressed, unrefined oil from high-quality seed stock contains the highest TQ levels. This is why sourcing and processing method matter.",
      },
      {
        q: 'Why does Element 72 source black seed oil from East Africa?',
        a: 'East African Nigella sativa — particularly from Ethiopia and Eritrea — is known for high thymoquinone concentration, a result of the climate and soil conditions in the region. Sourcing from East Africa also allows for a shorter, more traceable supply chain, which aligns with our single-origin standard.',
      },
      {
        q: 'Is black seed oil the same as "habbatus sauda"?',
        a: 'Yes. Habbatus sauda is the Arabic name for Nigella sativa seeds. The oil is also known as black cumin oil, kalonji oil, and blessed seed oil across different traditions. The plant and its properties are the same regardless of the name used.',
      },
    ],
  },
  {
    category: 'Our Standard',
    questions: [
      {
        q: 'What does "third-party tested" mean?',
        a: 'It means our products are sent to an independent, NABL-accredited laboratory — not affiliated with us or our suppliers — for analysis before they are sold. The current shilajit report covers the heavy metals panel: lead, mercury, arsenic and cadmium. Microbial, pesticide and potency assays are commissioned separately and are published only once we hold the report. We do not claim a test we have not run.',
      },
      {
        q: 'What does "single-origin" mean?',
        a: 'Single-origin means each product comes from one specific source, not a blend of materials from multiple suppliers or regions. We know exactly where each batch comes from, who processed it, and under what conditions. This is the same standard applied in specialty coffee, fine olive oil, and premium spirits — and it is what makes traceability possible.',
      },
      {
        q: 'Are Element 72 products KEBS certified?',
        a: 'For Shilajit Resin, yes. The Kenya Bureau of Standards permit to use the Standardization Mark is in place — Mark No. SM#102053, effective 9 July 2026, issued against KS 2455:2024, the general standard for food safety. The permit is held by Teleo Nutrilabs Ltd, our technical partner, and names Element 72 Vitality as the brand it covers. It covers Shilajit Resin only. Our other products are not covered by it and will not be sold before their own certification is in place.',
      },
    ],
  },
  {
    category: 'Ordering & Shipping',
    questions: [
      {
        q: 'When will products be available?',
        a: 'The KEBS permit for Shilajit Resin is in place (SM#102053). Waitlist members will be notified 48 hours before public availability — with full sourcing documentation and Certificate of Analysis included. Join the waitlist on the homepage.',
      },
      {
        q: 'Where does Element 72 ship?',
        a: 'We are based in Nairobi, Kenya. Domestic shipping details will be confirmed at launch. International shipping availability will be announced after the initial launch phase.',
      },
      {
        q: 'How do I join the waitlist?',
        a: 'Enter your email address in the form on the homepage or on any product page. You will receive a confirmation and be among the first notified when products become available.',
      },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-cream/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-sans text-cream/75 text-sm leading-relaxed">{q}</span>
        <span className={`font-sans text-gold text-lg leading-none shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="font-sans text-cream/75 text-sm leading-relaxed pb-6">{a}</p>
      )}
    </div>
  )
}

export default function FaqAccordion() {
  return (
    <div className="flex flex-col gap-14">
      {faqs.map((section) => (
        <div key={section.category}>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-2">{section.category}</p>
          <div>
            {section.questions.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

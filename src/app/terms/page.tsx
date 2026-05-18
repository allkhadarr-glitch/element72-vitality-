import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Element 72 Vitality',
  description: 'Terms governing your use of the Element 72 Vitality website and products.',
}

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using element72vitality.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site. These terms apply to all visitors, subscribers, and users.`,
  },
  {
    title: 'Products and Availability',
    body: `All products displayed on this site are subject to availability. Submission of your email address constitutes interest in our products and a request to be notified when they become available — it does not constitute a purchase or reservation.

We reserve the right to modify, discontinue, or limit the availability of any product at any time without notice.`,
  },
  {
    title: 'No Medical Advice',
    body: `The content on this website — including product descriptions, founder statements, and all editorial content — is provided for informational purposes only. It does not constitute medical advice, diagnosis, or treatment.

Element 72 Vitality products are food supplements. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition. Consult a qualified healthcare professional before using any supplement, particularly if you are pregnant, nursing, taking medication, or have an existing health condition.`,
  },
  {
    title: 'Regulatory Compliance',
    body: `Element 72 Vitality operates in accordance with the regulations of the Kenya Bureau of Standards (KEBS). Products will only be made available for sale upon receipt of the required regulatory permits. We do not sell products that have not received the appropriate approvals.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this site — including text, images, brand identity, product names, and design — is the property of Element 72 Vitality or its licensors and is protected by applicable intellectual property laws.

You may not copy, reproduce, distribute, or create derivative works from any content on this site without our express written permission.`,
  },
  {
    title: 'Email Communications',
    body: `By submitting your email address, you consent to receive marketing and product update emails from Element 72 Vitality. You may unsubscribe at any time using the link included in every email. We will not use your email for any purpose beyond what is described in our Privacy Policy.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by applicable law, Element 72 Vitality shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this site or reliance on any content herein.

Our total liability for any claim arising from use of this site shall not exceed the amount paid by you, if any, for access to or use of this site.`,
  },
  {
    title: 'Disclaimer of Warranties',
    body: `This site and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: 'Third-Party Links',
    body: `This site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these terms or your use of this site shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.`,
  },
  {
    title: 'Changes to Terms',
    body: `We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: 'Contact',
    body: `For questions about these terms:\n\nElement 72 Vitality\nNairobi, Kenya\nHQ@element72vitality.com`,
  },
]

export default function TermsPage() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Legal</p>
          <h1 className="font-serif text-4xl text-cream mb-4">Terms of Service</h1>
          <p className="font-sans text-cream/70 text-sm">Effective date: April 2026</p>
        </div>

        {/* Intro */}
        <p className="font-sans text-cream/75 text-sm leading-relaxed mb-16">
          Please read these Terms of Service carefully before using element72vitality.com. These terms govern your
          access to and use of the Element 72 Vitality website and any related communications.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-cream/[0.08] pt-10">
              <h2 className="font-serif text-xl text-cream mb-4">{section.title}</h2>
              <div className="font-sans text-cream/70 text-sm leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

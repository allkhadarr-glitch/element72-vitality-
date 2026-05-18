import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Element 72 Vitality',
  description: 'How Element 72 Vitality collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: 'Information We Collect',
    body: `When you join our waitlist or contact us, we collect your email address and any information you choose to provide. We do not collect payment information at this stage — no transactions take place on this site until products are available for purchase.

We may also collect non-personal data automatically, such as browser type, device type, and pages visited, through standard web analytics tools. This data is aggregated and cannot be used to identify you individually.`,
  },
  {
    title: 'How We Use Your Information',
    body: `Your email address is used solely to:

• Notify you when products become available for purchase (waitlist)
• Send relevant product updates and brand communications you have opted into
• Respond to enquiries you send through our contact form

We will never sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: 'Email Marketing',
    body: `Our email list is managed through Klaviyo, a third-party email service provider. By submitting your email, you consent to receive marketing communications from Element 72 Vitality. Every email we send includes an unsubscribe link. You may withdraw consent at any time.

Klaviyo's privacy practices are governed by their own privacy policy, available at klaviyo.com.`,
  },
  {
    title: 'Cookies',
    body: `This website may use essential cookies to ensure basic functionality. We do not use tracking cookies for advertising or retargeting purposes. You may disable cookies in your browser settings, though some site functionality may be affected.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your email address and associated data for as long as you remain subscribed to our communications. If you unsubscribe, your data will be removed from our active marketing list within 30 days. You may request complete deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent to email communications at any time

To exercise any of these rights, contact us at HQ@element72vitality.com.`,
  },
  {
    title: 'Third-Party Services',
    body: `This site is hosted on Vercel. Our email infrastructure uses Klaviyo. These services may process your data in accordance with their own privacy policies. We only share the minimum data necessary for these services to function.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of this site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    body: `For any privacy-related questions or requests:\n\nElement 72 Vitality\nNairobi, Kenya\nHQ@element72vitality.com`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Legal</p>
          <h1 className="font-serif text-4xl text-cream mb-4">Privacy Policy</h1>
          <p className="font-sans text-cream/70 text-sm">Effective date: April 2026</p>
        </div>

        {/* Intro */}
        <p className="font-sans text-cream/75 text-sm leading-relaxed mb-16">
          Element 72 Vitality is committed to protecting your privacy. This policy explains what information we collect,
          how we use it, and the choices you have. We collect only what is necessary and handle it with care.
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

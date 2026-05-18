import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Element 72 Vitality',
  description: 'Get in touch with Element 72 Vitality. Product inquiries, wholesale, press, and general questions.',
}

const channels = [
  {
    label: 'General Inquiries',
    value: 'HQ@element72vitality.com',
    href: 'mailto:HQ@element72vitality.com',
    desc: 'Product questions, orders, certifications.',
  },
  {
    label: 'TikTok',
    value: '@element72vitality',
    href: 'https://tiktok.com/@element72vitality',
    desc: '170K+ following our journey.',
  },
  {
    label: 'Instagram',
    value: '@element72vitality',
    href: 'https://instagram.com/element72vitality',
    desc: 'Behind the sourcing. Behind the brand.',
  },
  {
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: null,
    desc: 'Built in East Africa. Shipping to the world.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-earth">

      {/* ── HERO ── */}
      <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-cream/[0.08]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-8 animate-fade-up delay-100">
            Contact
          </p>
          <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] text-cream leading-none tracking-tight animate-fade-up delay-200 max-w-2xl">
            Let&apos;s talk.
          </h1>
        </div>
      </section>

      {/* ── CHANNELS + FORM ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left — channels */}
          <div className="reveal">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-12">Find us</p>
            <div className="flex flex-col gap-10">
              {channels.map((c) => (
                <div key={c.label} className="border-b border-cream/[0.07] pb-10">
                  <p className="font-sans text-[9px] tracking-[0.45em] text-cream/48 uppercase mb-3">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-serif text-xl text-cream hover:text-gold transition-colors duration-200 block mb-2"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-serif text-xl text-cream mb-2">{c.value}</p>
                  )}
                  <p className="font-sans text-cream/48 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-d2">
            <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-12">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── WHOLESALE / PRESS ── */}
      <section className="px-6 py-20 md:py-28 border-t border-cream/[0.08] bg-earth-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/[0.08]">
          {[
            {
              label: 'Wholesale & Distribution',
              desc: 'Interested in stocking Element 72 products? We work with select wellness retailers, pharmacies, and distributors across East Africa and internationally.',
              cta: 'wholesale@element72vitality.com',
              href: 'mailto:wholesale@element72vitality.com',
            },
            {
              label: 'Press & Media',
              desc: 'For editorial features, interviews, product samples, or brand partnerships. We respond to all press inquiries within 48 hours.',
              cta: 'press@element72vitality.com',
              href: 'mailto:press@element72vitality.com',
            },
          ].map((item) => (
            <div key={item.label} className="bg-earth-card p-10 md:p-14 reveal">
              <p className="font-sans text-[9px] tracking-[0.45em] text-gold uppercase mb-6">{item.label}</p>
              <p className="font-sans text-cream/75 text-sm leading-relaxed mb-8">{item.desc}</p>
              <a
                href={item.href}
                className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream hover:text-gold transition-colors duration-200"
              >
                {item.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

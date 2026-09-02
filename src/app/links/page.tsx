import type { Metadata } from 'next'
import SubscribeForm from '@/components/SubscribeForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Element 72 Vitality — Links',
  description: 'Earth-derived. Third-party verified. Built in Kenya.',
}

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const links = [
  {
    label: 'Browse Products',
    sub: 'Shilajit · Black Seed Oil · Sea Moss',
    href: '/products',
    external: false,
    icon: null,
  },
  {
    label: 'WhatsApp Us',
    sub: '+254 705 704 004',
    href: 'https://wa.me/254705704004',
    external: true,
    icon: <WhatsAppIcon />,
  },
  {
    label: 'Follow on TikTok',
    sub: '@element72vitality',
    href: 'https://tiktok.com/@element72vitality',
    external: true,
    icon: <TikTokIcon />,
  },
  {
    label: 'Email Us',
    sub: 'hq@element72vitality.com',
    href: 'mailto:hq@element72vitality.com',
    external: false,
    icon: <MailIcon />,
  },
]

export default function LinksPage() {
  return (
    <div className="bg-earth min-h-screen">
      <div className="max-w-sm mx-auto px-6 py-16 flex flex-col items-center">

        {/* Brand */}
        <div className="text-center mb-12">
          <p className="font-serif text-[2.4rem] text-cream/90 leading-none mb-1">Element 72</p>
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-6">Vitality</p>
          <p className="font-sans text-cream/40 text-sm leading-relaxed">
            Earth-derived. Third-party verified.<br />Built in Kenya.
          </p>
        </div>

        {/* Waitlist — primary CTA */}
        <div className="w-full mb-10">
          <p className="font-sans text-[10px] tracking-[0.35em] text-cream/30 uppercase text-center mb-5">
            Join the waitlist
          </p>
          <SubscribeForm />
        </div>

        {/* Divider */}
        <div className="w-full border-t border-cream/[0.07] mb-10" />

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) => {
            const inner = (
              <div className="flex items-center justify-between w-full px-5 py-4 border border-cream/[0.12] hover:border-cream/30 hover:bg-cream/[0.03] transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  {link.icon && (
                    <span className="text-cream/30 group-hover:text-gold transition-colors duration-300">
                      {link.icon}
                    </span>
                  )}
                  <div>
                    <p className="font-sans text-cream/80 text-[0.9rem] group-hover:text-cream transition-colors duration-300">
                      {link.label}
                    </p>
                    <p className="font-sans text-cream/30 text-[0.75rem] mt-0.5">{link.sub}</p>
                  </div>
                </div>
                <span className="text-cream/20 group-hover:text-cream/50 transition-colors duration-300">
                  <ArrowIcon />
                </span>
              </div>
            )

            return link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link key={link.label} href={link.href}>
                {inner}
              </Link>
            )
          })}
        </div>

        {/* Bottom mark */}
        <p className="font-sans text-cream/15 text-[10px] tracking-[0.2em] mt-14">
          element72vitality.com
        </p>

      </div>
    </div>
  )
}

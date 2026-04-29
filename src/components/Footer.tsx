import Link from 'next/link'

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="border-t border-obsidian/[0.08] bg-parchment">

      {/* Main footer */}
      <div className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-serif text-xl text-obsidian/80 mb-1">Element 72</p>
          <p className="font-sans text-[9px] tracking-[0.5em] text-obsidian/25 uppercase mb-6">Vitality</p>
          <p className="font-sans text-obsidian/35 text-sm leading-relaxed">
            Earth-derived wellness.<br />Sourced with intention.<br />Tested without compromise.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a href="https://tiktok.com/@element72vitality" target="_blank" rel="noopener noreferrer"
              className="text-obsidian/30 hover:text-gold transition-colors duration-200" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://instagram.com/element72vitality" target="_blank" rel="noopener noreferrer"
              className="text-obsidian/30 hover:text-gold transition-colors duration-200" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-6">Products</p>
          <div className="flex flex-col gap-3">
            <Link href="/products/shilajit" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">Shilajit Resin</Link>
            <Link href="/products/black-seed-oil" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">Black Seed Oil</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-6">Company</p>
          <div className="flex flex-col gap-3">
            <Link href="/our-standard" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">Our Standard</Link>
            <Link href="/founder" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">The Founder</Link>
            <Link href="/contact" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-6">Contact</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:HQ@element72vitality.com" className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">
              HQ@element72vitality.com
            </a>
            <a href="https://tiktok.com/@element72vitality" target="_blank" rel="noopener noreferrer"
              className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">
              @element72vitality
            </a>
            <p className="font-sans text-obsidian/25 text-sm">Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-obsidian/[0.06] px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-obsidian/20 text-[10px] tracking-wide">© 2026 Element 72 Vitality. All rights reserved.</p>
          <p className="font-sans text-obsidian/20 text-[10px] tracking-wide">element72vitality.com · Nairobi, Kenya</p>
        </div>
      </div>

    </footer>
  )
}

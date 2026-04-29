import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-obsidian/[0.08] bg-parchment px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        <div>
          <p className="font-serif text-xl text-obsidian/80 mb-1">Element 72</p>
          <p className="font-sans text-[9px] tracking-[0.5em] text-obsidian/25 uppercase mb-6">Vitality</p>
          <p className="font-sans text-obsidian/40 text-sm leading-relaxed max-w-xs">
            Earth-derived wellness products. Sourced with intention. Tested without compromise. Built in Kenya, for the world.
          </p>
        </div>

        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-6">Navigate</p>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Shilajit Resin', href: '/products/shilajit' },
              { label: 'Black Seed Oil', href: '/products/black-seed-oil' },
              { label: 'Our Standard', href: '/our-standard' },
              { label: 'The Founder', href: '/founder' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase mb-6">Connect</p>
          <div className="flex flex-col gap-3">
            <a href="https://tiktok.com/@element72vitality" target="_blank" rel="noopener noreferrer"
              className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">TikTok</a>
            <a href="https://instagram.com/element72vitality" target="_blank" rel="noopener noreferrer"
              className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">Instagram</a>
            <a href="mailto:HQ@element72vitality.com"
              className="font-sans text-obsidian/40 text-sm hover:text-obsidian transition-colors duration-200">HQ@element72vitality.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-obsidian/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-obsidian/20 text-[10px] tracking-wide">© 2026 Element 72 Vitality. All rights reserved.</p>
        <p className="font-sans text-obsidian/20 text-[10px] tracking-wide">Nairobi, Kenya · element72vitality.com</p>
      </div>
    </footer>
  )
}

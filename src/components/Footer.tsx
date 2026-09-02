import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-paper/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand */}
        <div className="md:col-span-1">
          <Image src="/e72-logo.png" alt="Element 72 Vitality" width={32} height={32} className="opacity-65 mb-5" />
          <p className="font-serif text-lg text-paper/70 italic mb-5">Proof before price.</p>
          <p className="font-sans text-paper/30 text-[0.88rem] leading-relaxed">
            Third-party tested before priced.<br />
            Single-origin, KEBS certified.<br />
            Nairobi, Kenya.
          </p>
        </div>

        {/* Products */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.38em] text-copper/55 uppercase mb-6">Products</p>
          <div className="flex flex-col gap-3">
            <Link href="/products/shilajit" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">
              Shilajit Resin
            </Link>
            <Link href="/products/black-seed-oil" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">
              Black Seed Oil
            </Link>
          </div>
        </div>

        {/* Learn */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.38em] text-copper/55 uppercase mb-6">Learn</p>
          <div className="flex flex-col gap-3">
            <Link href="/our-standard" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">Our Standard</Link>
            <Link href="/journal" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">Journal</Link>
            <Link href="/faq" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">FAQ</Link>
            <Link href="/founder" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">The Founder</Link>
            <Link href="/contact" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono text-[9px] tracking-[0.38em] text-copper/55 uppercase mb-6">Contact</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:hq@element72vitality.com" className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300">
              hq@element72vitality.com
            </a>
            <a
              href="https://tiktok.com/@element72vitality"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-paper/40 text-[0.9rem] hover:text-paper transition-colors duration-300"
            >
              @element72vitality
            </a>
            <p className="font-sans text-paper/20 text-[0.9rem]">Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/[0.05] px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-paper/18 text-[10px] tracking-[0.12em]">© 2026 Element 72 Vitality. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-paper/18 text-[10px] hover:text-paper/45 transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="font-mono text-paper/18 text-[10px] hover:text-paper/45 transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

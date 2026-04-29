'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Products', href: '/products/shilajit' },
    { label: 'Our Standard', href: '/our-standard' },
    { label: 'The Founder', href: '/founder' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-obsidian/96 backdrop-blur-md border-b border-white/[0.06]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl text-ivory tracking-tight group-hover:text-gold transition-colors duration-300">
            Element 72
          </span>
          <span className="font-sans text-[9px] tracking-[0.5em] text-ivory/30 uppercase">
            Vitality
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[11px] tracking-[0.25em] text-ivory/40 uppercase hover:text-ivory transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-6">
          <Link
            href="/#waitlist"
            className="hidden md:block font-sans text-[10px] tracking-[0.3em] uppercase text-obsidian bg-gold hover:bg-gold-light px-6 py-3 transition-colors duration-200"
          >
            Join Waitlist
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-obsidian transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} style={{ top: '80px' }}>
        <div className="px-6 pt-12 pb-10 flex flex-col gap-10">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-serif text-3xl text-ivory/70 hover:text-ivory transition-colors duration-200 animate-fade-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="mt-4 self-start font-sans text-[10px] tracking-[0.3em] uppercase text-obsidian bg-gold px-8 py-4"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  )
}

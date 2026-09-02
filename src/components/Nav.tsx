'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const sectionLinks = [
    { label: 'STANDARD', href: '/#standard' },
    { label: 'PROOF', href: '/#proof' },
    { label: 'LIBRARY', href: '/#library' },
    { label: 'PROTOCOL', href: '/#protocol' },
    { label: 'BATCH', href: '/#batch' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-obsidian/92 backdrop-blur-md border-b border-paper/[0.06]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

        {/* Logo + brand name */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Element 72 Vitality">
          <Image
            src="/e72-logo.png"
            alt=""
            width={28}
            height={28}
            className="opacity-85"
            aria-hidden="true"
          />
          <span className="font-sans text-[10px] tracking-[0.28em] text-paper/75 uppercase hidden sm:block">
            ELEMENT 72 <span className="text-copper">VITALITY</span>
          </span>
        </Link>

        {/* Section links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] tracking-[0.2em] text-paper/35 hover:text-paper/80 transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/#batch"
            className="hidden md:inline-flex items-center px-5 py-2 bg-e-amber text-obsidian font-sans text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-e-amber/90 transition-colors duration-300"
          >
            JOIN THE WAITLIST
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-paper/60 transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-paper/60 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-paper/60 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-obsidian transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '72px' }}
      >
        <div className="px-6 pt-14 pb-10 flex flex-col gap-8">
          {sectionLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-[2rem] text-paper/55 hover:text-paper transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#batch"
            onClick={() => setOpen(false)}
            className="mt-4 self-start px-6 py-3 bg-e-amber text-obsidian font-sans text-[11px] tracking-[0.22em] uppercase font-medium"
          >
            JOIN THE WAITLIST
          </Link>
        </div>
      </div>
    </nav>
  )
}

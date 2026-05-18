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

  const leftLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Journal', href: '/journal' },
    { label: 'Our Standard', href: '/our-standard' },
  ]

  const rightLinks = [
    { label: 'The Founder', href: '/founder' },
    { label: 'Contact', href: '/contact' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  const linkClass = 'font-sans text-[11px] tracking-[0.25em] text-cream/75 uppercase hover:text-cream transition-colors duration-200'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-earth/96 backdrop-blur-md border-b border-cream/[0.08]' : ''
    }`}>

      {/* Announcement bar */}
      <div className="border-b border-cream/[0.06] h-10 flex items-center justify-center px-6">
        <p className="font-sans text-[7px] tracking-[0.42em] text-cream/38 uppercase text-center">
          Certification in progress &nbsp;·&nbsp; First batch allocated to waitlist members &nbsp;·&nbsp;{' '}
          <a href="/#join" className="text-gold/60 hover:text-gold transition-colors duration-200">Join now →</a>
        </p>
      </div>

      {/* Main nav row */}
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left links */}
        <div className="hidden md:flex items-center gap-10">
          {leftLinks.map(l => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Center logo — absolutely positioned so it never shifts the left/right groups */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
          aria-label="Element 72 Vitality — Home"
        >
          <div
            className="overflow-hidden shrink-0 transition-all duration-700 ease-premium"
            style={{
              width: scrolled ? '36px' : '80px',
              height: scrolled ? '36px' : '80px',
              backgroundColor: '#080D08',
              filter: scrolled ? 'none' : 'drop-shadow(0 0 14px rgba(201,165,90,0.25))',
            }}
          >
            <img
              src="/logo-mark.jpg"
              alt=""
              aria-hidden="true"
              className="transition-all duration-700 ease-premium"
              style={{
                height: scrolled ? '80px' : '178px',
                width: 'auto',
                filter: 'invert(1) sepia(1) saturate(3) hue-rotate(5deg) brightness(0.88)',
                marginTop: scrolled ? '-23px' : '-52px',
              }}
            />
          </div>
        </Link>

        {/* Right links + CTA + mobile hamburger */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-10">
            {rightLinks.map(l => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#join"
            className="hidden md:block font-sans text-[10px] tracking-[0.3em] uppercase text-earth bg-cream hover:bg-gold px-6 py-3 transition-colors duration-300"
          >
            Join Waitlist
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-earth transition-all duration-500 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} style={{ top: '120px' }}>
        <div className="px-6 pt-12 pb-10 flex flex-col gap-10">
          {allLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-cream/75 hover:text-cream transition-colors duration-200 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-4 self-start font-sans text-[10px] tracking-[0.3em] uppercase text-earth bg-cream px-8 py-4"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  )
}

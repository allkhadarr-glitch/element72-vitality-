'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetHeight
    el.style.animation = 'page-enter 0.5s cubic-bezier(0.16,1,0.3,1) forwards'
  }, [pathname])

  return (
    <div ref={ref} style={{ animation: 'page-enter 0.5s cubic-bezier(0.16,1,0.3,1) forwards' }}>
      {children}
    </div>
  )
}

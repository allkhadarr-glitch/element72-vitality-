'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function getDevice() {
  const ua = navigator.userAgent
  if (/Mobi|Android/i.test(ua)) return 'mobile'
  if (/Tablet|iPad/i.test(ua))  return 'tablet'
  return 'desktop'
}

function getSessionId() {
  let id = sessionStorage.getItem('e72_sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('e72_sid', id)
  }
  return id
}

export default function Tracker() {
  const pathname = usePathname()
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    if (pathname === prevPath.current) return
    prevPath.current = pathname

    // Fire and forget — never block the user
    navigator.sendBeacon('/api/track', JSON.stringify({
      path:      pathname,
      referrer:  document.referrer || null,
      device:    getDevice(),
      sessionId: getSessionId(),
    }))
  }, [pathname])

  return null
}

'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react'
import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// ── Init ─────────────────────────────────────────────────────────────────────
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',           // proxied — avoids ad blockers
    ui_host: 'https://us.posthog.com',
    capture_pageview: false,       // we do it manually for accuracy
    capture_pageleave: true,
    session_recording: {
      maskAllInputs: false,        // we want to see form interaction
      maskInputOptions: { email: true }, // but mask the actual email value
    },
    loaded(ph) {
      if (process.env.NODE_ENV === 'development') ph.debug()
    },
  })
}

// ── Page view tracker — fires on every route change ──────────────────────────
function PageViewTracker() {
  const pathname  = usePathname()
  const params    = useSearchParams()
  const ph        = usePostHog()
  const enteredAt = useRef<number>(Date.now())

  useEffect(() => {
    enteredAt.current = Date.now()
  }, [pathname])

  useEffect(() => {
    if (!ph || !pathname) return

    const url = pathname + (params.toString() ? `?${params.toString()}` : '')

    ph.capture('$pageview', { $current_url: url })

    // Tag page type so filters in PostHog are easy
    const pageType =
      pathname.startsWith('/products/') ? 'product' :
      pathname.startsWith('/journal/')  ? 'article' :
      pathname.startsWith('/lab/')      ? 'lab_batch' :
      pathname === '/journal'           ? 'journal_index' :
      pathname === '/lab'               ? 'lab_index' :
      pathname === '/'                  ? 'homepage' : 'other'

    ph.register({ page_type: pageType, current_path: pathname })
  }, [pathname, params, ph])

  // Scroll depth — fires at 25 / 50 / 75 / 100%
  useEffect(() => {
    if (!ph) return

    const reached = new Set<number>()
    const thresholds = [25, 50, 75, 100]

    function onScroll() {
      const scrolled   = window.scrollY + window.innerHeight
      const total      = document.documentElement.scrollHeight
      const pct        = Math.round((scrolled / total) * 100)

      for (const t of thresholds) {
        if (pct >= t && !reached.has(t)) {
          reached.add(t)
          ph.capture('scroll_depth', {
            depth_pct:    t,
            path:         pathname,
            time_on_page: Math.round((Date.now() - enteredAt.current) / 1000),
          })
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname, ph])

  return null
}

// ── Time-on-page — fires when user leaves a page ─────────────────────────────
function TimeOnPageTracker() {
  const pathname  = usePathname()
  const ph        = usePostHog()
  const enteredAt = useRef<number>(Date.now())
  const prevPath  = useRef<string>(pathname)

  useEffect(() => {
    if (!ph) return
    const prev    = prevPath.current
    const elapsed = Math.round((Date.now() - enteredAt.current) / 1000)

    if (prev && elapsed > 2) {
      ph.capture('time_on_page', {
        path:     prev,
        seconds:  elapsed,
        minutes:  parseFloat((elapsed / 60).toFixed(1)),
      })
    }

    prevPath.current  = pathname
    enteredAt.current = Date.now()
  }, [pathname, ph])

  return null
}

// ── Root provider ─────────────────────────────────────────────────────────────
export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageViewTracker />
        <TimeOnPageTracker />
      </Suspense>
      {children}
    </PHProvider>
  )
}

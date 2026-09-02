import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import AdminClient from './AdminClient'

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-KE', {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  })
}

function cleanReferrer(ref: string | null) {
  if (!ref) return 'Direct'
  try {
    const u = new URL(ref)
    const host = u.hostname.replace('www.', '')
    if (host === 'element72vitality.com') return 'Internal'
    return host
  } catch {
    return ref
  }
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ pw?: string }>
}) {
  const { pw } = await searchParams
  const cookieStore = await cookies()
  const adminSecret = process.env.ADMIN_SECRET

  // Auth via URL param or cookie
  // Fail closed: with no ADMIN_SECRET configured, nothing authenticates.
  const authed =
    Boolean(adminSecret) &&
    (pw === adminSecret ||
      cookieStore.get('e72_admin')?.value === adminSecret)

  if (!authed) {
    if (pw) {
      // Wrong password — show error
    } else {
      // No password — show login
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-earth flex items-center justify-center px-6">
        <div className="w-full max-w-xs">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-6 text-center">Element 72</p>
          <form method="GET" className="flex flex-col gap-3">
            <input
              type="password"
              name="pw"
              placeholder="Admin password"
              autoFocus
              className="bg-cream/[0.06] border border-cream/[0.14] text-cream px-5 py-4 font-sans text-sm outline-none focus:border-gold/60 transition-colors"
            />
            <button
              type="submit"
              className="border border-cream/30 text-cream px-5 py-4 font-sans text-[11px] tracking-[0.3em] uppercase hover:bg-cream hover:text-earth transition-all"
            >
              Enter
            </button>
          </form>
          {pw && (
            <p className="text-red-400/70 text-xs text-center mt-4 font-sans">Incorrect password.</p>
          )}
        </div>
      </div>
    )
  }

  // ── Fetch data ────────────────────────────────────────────────────────────
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const now       = new Date()
  const todayStr  = now.toISOString().slice(0, 10)
  const weekAgo   = new Date(now.getTime() - 7 * 864e5).toISOString()

  const [
    { data: signups },
    { data: todayViews },
    { data: weekViews },
    { data: allSignups },
  ] = await Promise.all([
    supabaseAdmin
      .from('signups')
      .select('email, source_page, created_at')
      .order('created_at', { ascending: false })
      .limit(50),
    supabaseAdmin
      .from('page_views')
      .select('path, session_id')
      .gte('created_at', `${todayStr}T00:00:00`),
    supabaseAdmin
      .from('page_views')
      .select('path, session_id, referrer, country, device, created_at')
      .gte('created_at', weekAgo)
      .order('created_at', { ascending: false }),
    supabaseAdmin
      .from('signups')
      .select('id', { count: 'exact' }),
  ])

  // ── Derived stats ──────────────────────────────────────────────────────────
  const todaySessions  = new Set((todayViews ?? []).map((v: any) => v.session_id)).size
  const todayPageViews = (todayViews ?? []).length
  const weekSessions   = new Set((weekViews ?? []).map((v: any) => v.session_id)).size
  const totalSignups   = allSignups?.length ?? 0

  const pageCounts: Record<string, number> = {}
  for (const v of (weekViews ?? [])) {
    pageCounts[v.path] = (pageCounts[v.path] ?? 0) + 1
  }
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const refCounts: Record<string, number> = {}
  for (const v of (weekViews ?? [])) {
    const ref = cleanReferrer(v.referrer)
    refCounts[ref] = (refCounts[ref] ?? 0) + 1
  }
  const topReferrers = Object.entries(refCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  const deviceCounts: Record<string, number> = {}
  for (const v of (weekViews ?? [])) {
    const d = v.device ?? 'unknown'
    deviceCounts[d] = (deviceCounts[d] ?? 0) + 1
  }

  const countryCounts: Record<string, number> = {}
  for (const v of (weekViews ?? [])) {
    if (v.country) countryCounts[v.country] = (countryCounts[v.country] ?? 0) + 1
  }
  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <AdminClient
      stats={{
        todaySessions,
        todayPageViews,
        weekSessions,
        totalSignups,
        topPages,
        topReferrers,
        deviceCounts,
        topCountries,
      }}
      signups={(signups ?? []).map((s: any) => ({
        email:      s.email,
        sourcePage: s.source_page ?? '—',
        date:       fmtDate(s.created_at),
      }))}
      recentViews={(weekViews ?? []).slice(0, 40).map((v: any) => ({
        path:    v.path,
        country: v.country ?? '—',
        device:  v.device ?? '—',
        date:    fmtDate(v.created_at),
      }))}
    />
  )
}

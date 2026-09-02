import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

function cleanReferrer(ref: string | null): string {
  if (!ref) return 'Direct'
  try {
    const host = new URL(ref).hostname.replace('www.', '')
    if (host === 'element72vitality.com') return 'Internal'
    return host
  } catch {
    return 'Direct'
  }
}

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret || req.headers.get('authorization') !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const yesterday     = new Date(Date.now() - 864e5)
  const yesterdayStr  = yesterday.toISOString().slice(0, 10)
  const todayStr      = new Date().toISOString().slice(0, 10)

  const [{ data: views }, { data: newSignups }, { data: allSignups }] = await Promise.all([
    supabase
      .from('page_views')
      .select('path, session_id, referrer, country, device')
      .gte('created_at', `${yesterdayStr}T00:00:00`)
      .lt('created_at',  `${todayStr}T00:00:00`),
    supabase
      .from('signups')
      .select('email, source_page, created_at')
      .gte('created_at', `${yesterdayStr}T00:00:00`)
      .lt('created_at',  `${todayStr}T00:00:00`)
      .order('created_at', { ascending: false }),
    supabase
      .from('signups')
      .select('id', { count: 'exact' }),
  ])

  const sessions   = new Set((views ?? []).map((v: any) => v.session_id)).size
  const pageViews  = (views ?? []).length
  const signupList = newSignups ?? []
  const totalSubs  = allSignups?.length ?? 0

  // Top pages
  const pageCounts: Record<string, number> = {}
  for (const v of (views ?? [])) {
    pageCounts[v.path] = (pageCounts[v.path] ?? 0) + 1
  }
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  // Referrers
  const refCounts: Record<string, number> = {}
  for (const v of (views ?? [])) {
    const r = cleanReferrer(v.referrer)
    refCounts[r] = (refCounts[r] ?? 0) + 1
  }
  const topRefs = Object.entries(refCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)

  const dateLabel = yesterday.toLocaleDateString('en-KE', { weekday: 'long', day: 'numeric', month: 'long' })

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:Georgia,serif;color:#e8e0d0;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;">

  <!-- Header -->
  <tr><td style="padding-bottom:32px;">
    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;color:#8a7d5a;text-transform:uppercase;">Element 72 Vitality</p>
    <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#ede8dc;">${dateLabel}</p>
  </td></tr>

  <!-- Key numbers -->
  <tr><td style="padding-bottom:28px;">
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="width:25%;text-align:center;background:#191309;border:1px solid rgba(237,232,220,0.08);padding:16px 8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;color:${signupList.length > 0 ? '#C9A55A' : '#ede8dc'};">${signupList.length}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;color:rgba(237,232,220,0.3);text-transform:uppercase;">New signups</p>
      </td>
      <td style="width:4%;"></td>
      <td style="width:25%;text-align:center;background:#191309;border:1px solid rgba(237,232,220,0.08);padding:16px 8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;color:#ede8dc;">${sessions}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;color:rgba(237,232,220,0.3);text-transform:uppercase;">Visitors</p>
      </td>
      <td style="width:4%;"></td>
      <td style="width:25%;text-align:center;background:#191309;border:1px solid rgba(237,232,220,0.08);padding:16px 8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;color:#ede8dc;">${pageViews}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;color:rgba(237,232,220,0.3);text-transform:uppercase;">Page views</p>
      </td>
      <td style="width:4%;"></td>
      <td style="width:25%;text-align:center;background:#191309;border:1px solid rgba(237,232,220,0.08);padding:16px 8px;">
        <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;color:#C9A55A;">${totalSubs}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;color:rgba(237,232,220,0.3);text-transform:uppercase;">Total waitlist</p>
      </td>
    </tr>
    </table>
  </td></tr>

  ${signupList.length > 0 ? `
  <!-- New signups -->
  <tr><td style="padding-bottom:28px;border-top:1px solid rgba(237,232,220,0.06);padding-top:28px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;color:#8a7d5a;text-transform:uppercase;">New signups</p>
    ${signupList.map((s: any) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
    <tr>
      <td style="padding:10px 12px;background:#191309;border:1px solid rgba(237,232,220,0.06);">
        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:13px;color:rgba(237,232,220,0.85);">${s.email}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:rgba(237,232,220,0.3);">from ${s.source_page ?? 'unknown page'}</p>
      </td>
    </tr>
    </table>`).join('')}
  </td></tr>
  ` : ''}

  ${topPages.length > 0 ? `
  <!-- Top pages -->
  <tr><td style="padding-bottom:28px;border-top:1px solid rgba(237,232,220,0.06);padding-top:28px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;color:#8a7d5a;text-transform:uppercase;">Top pages yesterday</p>
    ${topPages.map(([path, count]: [string, number], i: number) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;">
    <tr>
      <td style="padding:8px 12px;background:#191309;border:1px solid rgba(237,232,220,0.06);">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td><p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:rgba(237,232,220,0.6);">${i + 1}. ${path === '/' ? 'Homepage' : path}</p></td>
          <td align="right"><p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:rgba(237,232,220,0.3);">${count} views</p></td>
        </tr></table>
      </td>
    </tr>
    </table>`).join('')}
  </td></tr>
  ` : ''}

  ${topRefs.length > 0 ? `
  <!-- Referrers -->
  <tr><td style="padding-bottom:28px;border-top:1px solid rgba(237,232,220,0.06);padding-top:28px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;color:#8a7d5a;text-transform:uppercase;">Where they came from</p>
    ${topRefs.map(([ref, count]: [string, number]) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;">
    <tr>
      <td style="padding:8px 12px;background:#191309;border:1px solid rgba(237,232,220,0.06);">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td><p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:rgba(237,232,220,0.6);">${ref}</p></td>
          <td align="right"><p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:rgba(237,232,220,0.3);">${count}</p></td>
        </tr></table>
      </td>
    </tr>
    </table>`).join('')}
  </td></tr>
  ` : ''}

  <!-- Footer -->
  <tr><td style="border-top:1px solid rgba(237,232,220,0.06);padding-top:24px;text-align:center;">
    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:rgba(237,232,220,0.2);text-transform:uppercase;">Element 72 Vitality</p>
    <a href="https://element72vitality.com/admin" style="font-family:Arial,sans-serif;font-size:10px;color:rgba(201,165,90,0.5);text-decoration:none;">Open admin →</a>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`

  const resend = new Resend(process.env.RESEND_API_KEY!)
  await resend.emails.send({
    from:    'Element 72 <HQ@element72vitality.com>',
    to:      'mabdikadirhaji@gmail.com',
    subject: `Element 72 — ${dateLabel} · ${signupList.length} signup${signupList.length !== 1 ? 's' : ''} · ${sessions} visitor${sessions !== 1 ? 's' : ''}`,
    html,
  })

  return NextResponse.json({ ok: true, date: yesterdayStr, sessions, pageViews, signups: signupList.length })
}

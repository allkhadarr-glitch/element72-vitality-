import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const body = await req.json()
    const { path, referrer, device, sessionId } = body

    // Skip admin and API routes
    if (path?.startsWith('/admin') || path?.startsWith('/api')) {
      return NextResponse.json({ ok: true })
    }

    // Get country from Vercel's geo header
    const country = req.headers.get('x-vercel-ip-country') ?? null
    const city    = req.headers.get('x-vercel-ip-city') ?? null

    await supabase.from('page_views').insert({
      session_id: sessionId ?? null,
      path:       path ?? '/',
      referrer:   referrer ?? null,
      device:     device ?? null,
      country:    country,
      city:       city,
    })
  } catch {
    // Never surface errors to the client
  }

  return NextResponse.json({ ok: true })
}

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 })
  }

  const apiKey = process.env.KLAVIYO_PRIVATE_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey || !listId) {
    return NextResponse.json({ message: 'Server misconfiguration.' }, { status: 500 })
  }

  // Store inquiry as a Klaviyo profile with custom properties
  const res = await fetch('https://a.klaviyo.com/api/profiles/', {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'Content-Type': 'application/json',
      'revision': '2024-02-15',
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email,
          first_name: name,
          properties: {
            inquiry_subject: subject,
            inquiry_message: message,
            inquiry_date: new Date().toISOString(),
            source: 'Contact Form',
          },
        },
      },
    }),
  })

  if (res.ok || res.status === 409) {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ message: 'Could not send message.' }, { status: 500 })
}

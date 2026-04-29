import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: 'Valid email required.' }, { status: 400 })
  }

  const apiKey = process.env.KLAVIYO_PRIVATE_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey || !listId) {
    return NextResponse.json({ message: 'Server misconfiguration.' }, { status: 500 })
  }

  const res = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${apiKey}`,
      'Content-Type': 'application/json',
      'revision': '2024-02-15',
    },
    body: JSON.stringify({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          profiles: {
            data: [
              {
                type: 'profile',
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: { consent: 'SUBSCRIBED' },
                    },
                  },
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: { type: 'list', id: listId },
          },
        },
      },
    }),
  })

  if (res.status === 202) {
    return NextResponse.json({ ok: true })
  }

  const body = await res.json().catch(() => ({}))
  console.error('Klaviyo error:', body)
  return NextResponse.json({ message: 'Could not subscribe. Please try again.' }, { status: 500 })
}

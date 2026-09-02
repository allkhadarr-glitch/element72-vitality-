import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const CONFIRMATION_EMAIL = {
  subject: "You're in. Here's what that means.",
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're in.</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:Georgia,serif;color:#e8e0d0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- Logo mark -->
          <tr>
            <td style="padding-bottom:40px;text-align:center;">
              <span style="font-family:Georgia,serif;font-size:11px;letter-spacing:0.3em;color:#8a7d5a;text-transform:uppercase;">Element 72 Vitality</span>
            </td>
          </tr>

          <!-- Opening -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0 0 20px;font-size:16px;line-height:1.8;color:#c8bfa8;">
                You did not sign up for a newsletter. You are on the waitlist for a specific batch — one hundred jars, produced to a standard we set, tested against parameters we chose, with a document that proves it.
              </p>
              <p style="margin:0;font-size:16px;line-height:1.8;color:#c8bfa8;">
                That document is public. Every batch, every time. You will receive a link to it before anything ships.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="width:48px;height:1px;background:#8a7d5a;opacity:0.4;"></div>
            </td>
          </tr>

          <!-- Sourcing -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.25em;color:#8a7d5a;text-transform:uppercase;">Where it comes from</p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#c8bfa8;">
                Our shilajit is sourced from altitude-range deposits in the Himalayas — the only geology that consistently produces fulvic acid concentrations above 40%. Our supplier is named. Their facility has been visited. Their certifications are on file.
              </p>
              <p style="margin:0;font-size:16px;line-height:1.8;color:#c8bfa8;">
                We say this not to impress you. We say it because you should be able to verify everything we claim. If you ever cannot, write to us at HQ@element72vitality.com. We will answer.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="width:48px;height:1px;background:#8a7d5a;opacity:0.4;"></div>
            </td>
          </tr>

          <!-- Timeline -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.25em;color:#8a7d5a;text-transform:uppercase;">What Q3 2026 looks like</p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:#c8bfa8;">
                The first batch ships Q3 2026. You will receive a direct email before it goes live — first access, founding member pricing, no pressure. If the batch sells before your window opens, we will tell you immediately and hold your place for batch two.
              </p>
              <p style="margin:0;font-size:16px;line-height:1.8;color:#a09080;font-style:italic;">
                We will not email you again until there is something real to say.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:32px;">
              <div style="width:48px;height:1px;background:#8a7d5a;opacity:0.4;"></div>
            </td>
          </tr>

          <!-- Closing -->
          <tr>
            <td style="padding-bottom:48px;">
              <p style="margin:0 0 20px;font-size:16px;line-height:1.8;color:#c8bfa8;">
                Kenya is the only country in the world that grows purple tea commercially. Element 72 exists to prove that East Africa is not a market to be sold to — it is a source the world has not yet learned to trust. You are now part of that record.
              </p>
              <p style="margin:0;font-size:16px;line-height:1.8;color:#8a7d5a;font-style:italic;">
                Forward this to someone who cares where their supplements actually come from.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #2a2520;padding-top:32px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;color:#5a5048;text-transform:uppercase;">Element 72 Vitality</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#5a5048;">HQ@element72vitality.com &nbsp;·&nbsp; Nairobi, Kenya</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim(),
}

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
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

  if (res.status !== 202) {
    const body = await res.json().catch(() => ({}))
    console.error('Klaviyo error:', body)
    return NextResponse.json({ message: 'Could not subscribe. Please try again.' }, { status: 500 })
  }

  // Log signup to Supabase for admin + daily email
  const sourcePage = req.headers.get('referer') ?? null
  void supabase.from('signups').insert({
    email:       email,
    source_page: sourcePage,
    referrer:    req.headers.get('referer') ?? null,
  })

  // Send confirmation email — fire and don't block the response
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    const resend = new Resend(resendKey)
    resend.emails.send({
      from: 'Element 72 Vitality <HQ@element72vitality.com>',
      to: email,
      subject: CONFIRMATION_EMAIL.subject,
      html: CONFIRMATION_EMAIL.html,
    }).catch((err: unknown) => console.error('Resend error:', err))
  }

  return NextResponse.json({ ok: true })
}

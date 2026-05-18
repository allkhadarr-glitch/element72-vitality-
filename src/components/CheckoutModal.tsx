'use client'

import { useState } from 'react'

type PaymentMethod = 'mpesa' | 'card'

interface Props {
  isOpen: boolean
  onClose: () => void
  productName?: string
  amount?: number
  currency?: string
}

export default function CheckoutModal({
  isOpen,
  onClose,
  productName = 'Element 72 Shilajit Resin — 20g',
  amount = 0,
  currency = 'KSh',
}: Props) {
  const [method, setMethod] = useState<PaymentMethod>('mpesa')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  function formatPhone(val: string) {
    return val.replace(/\D/g, '').slice(0, 9)
  }

  function handleInitiate() {
    if (method === 'mpesa' && phone.length < 9) return
    setLoading(true)
    // POST /api/checkout/mpesa  →  IntaSend STK push
    // POST /api/checkout/card   →  IntaSend card session
    // Wire these when IntaSend merchant account is active
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-earth/92 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative z-10 w-full md:max-w-md bg-earth-card border-t md:border border-cream/[0.10] md:mx-4">

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-cream/[0.08]">
          <div>
            <p className="font-sans text-[7px] tracking-[0.48em] text-gold/65 uppercase mb-1.5">Secure Checkout</p>
            <p className="font-sans text-[8px] tracking-[0.3em] text-cream/38 uppercase">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-cream/28 hover:text-cream/55 transition-colors"
            aria-label="Close checkout"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </button>
        </div>

        <div className="px-7 py-6">

          {/* Amount */}
          {amount > 0 && (
            <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-cream/[0.06]">
              <span className="font-sans text-[8px] tracking-[0.3em] text-cream/32 uppercase">{currency}</span>
              <span className="font-serif text-4xl text-cream leading-none">{amount.toLocaleString()}</span>
            </div>
          )}

          {/* Payment method label */}
          <p className="font-sans text-[7px] tracking-[0.48em] text-cream/32 uppercase mb-3">Payment Method</p>

          {/* Method options */}
          <div className="flex flex-col gap-2 mb-7">
            {([
              { id: 'mpesa' as const, label: 'M-Pesa Express',      sub: 'Instant STK push · No redirect' },
              { id: 'card'  as const, label: 'International Card',   sub: 'Visa · Mastercard'              },
            ] as const).map(opt => (
              <button
                key={opt.id}
                onClick={() => setMethod(opt.id)}
                className={`w-full text-left px-5 py-4 border transition-colors flex items-center gap-4 ${
                  method === opt.id
                    ? 'border-gold/35 bg-gold/[0.04]'
                    : 'border-cream/[0.08] hover:border-cream/[0.14]'
                }`}
              >
                <div className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  method === opt.id ? 'border-gold' : 'border-cream/22'
                }`}>
                  {method === opt.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </div>
                <div>
                  <p className="font-sans text-[8px] tracking-[0.35em] text-cream/78 uppercase">{opt.label}</p>
                  <p className="font-sans text-[7px] tracking-[0.25em] text-cream/32 uppercase mt-0.5">{opt.sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* M-Pesa phone input */}
          {method === 'mpesa' && (
            <div className="mb-7">
              <p className="font-sans text-[7px] tracking-[0.45em] text-cream/32 uppercase mb-3">Phone Number</p>
              <div className="flex border border-cream/[0.10] focus-within:border-gold/35 transition-colors">
                <div className="px-4 py-3.5 border-r border-cream/[0.08] flex items-center shrink-0">
                  <span className="font-sans text-xs text-cream/45 tracking-wide">+254</span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={e => setPhone(formatPhone(e.target.value))}
                  placeholder="712 345 678"
                  className="flex-1 bg-transparent px-4 py-3.5 font-sans text-sm text-cream/80 placeholder:text-cream/18 outline-none tracking-widest"
                />
              </div>
              {loading && (
                <p className="font-sans text-[7px] tracking-[0.4em] text-gold/55 uppercase mt-3 animate-pulse">
                  Check your handset for the M-Pesa PIN prompt
                </p>
              )}
            </div>
          )}

          {/* Card placeholder */}
          {method === 'card' && (
            <div className="mb-7 border border-cream/[0.07] px-5 py-5 flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
              <p className="font-sans text-[7px] tracking-[0.35em] text-cream/22 uppercase leading-relaxed">
                Card fields via IntaSend · Active at launch
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleInitiate}
            disabled={method === 'mpesa' && phone.length < 9}
            className="w-full bg-gold/88 hover:bg-gold disabled:bg-cream/[0.06] disabled:text-cream/20 disabled:cursor-not-allowed text-earth font-sans text-[8px] tracking-[0.55em] uppercase py-4 transition-colors"
          >
            {loading
              ? 'Processing...'
              : method === 'mpesa'
              ? 'Send M-Pesa Prompt'
              : 'Proceed to Card Payment'}
          </button>

          <div className="mt-5 pt-5 border-t border-cream/[0.06] flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-gold/40 mt-1.5 shrink-0" />
            <p className="font-sans text-[6px] tracking-[0.28em] text-cream/22 uppercase leading-relaxed">
              Eurofins CoA ships with your order · Batch E72–SH01 · Secured by IntaSend
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

/*
  USAGE — wire into shilajit page when KEBS clears + IntaSend is set up:

  'use client'
  import { useState } from 'react'
  import CheckoutModal from '@/components/CheckoutModal'

  const [open, setOpen] = useState(false)

  <button onClick={() => setOpen(true)}>Purchase One Jar</button>
  <CheckoutModal
    isOpen={open}
    onClose={() => setOpen(false)}
    amount={8500}   // ← final one-time price
  />

  Backend routes to create:
    /api/checkout/mpesa  →  IntaSend STK push (phone number → STK → webhook confirm)
    /api/checkout/card   →  IntaSend checkout session → redirect URL
*/

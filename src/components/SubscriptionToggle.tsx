'use client'

import { useState } from 'react'

interface Props {
  oneTimePrice: number
  subscriptionPrice: number
  currency?: string
  onSelect?: (mode: 'one-time' | 'subscription') => void
}

export default function SubscriptionToggle({
  oneTimePrice,
  subscriptionPrice,
  currency = 'KSh',
  onSelect,
}: Props) {
  const [mode, setMode] = useState<'one-time' | 'subscription'>('subscription')

  const savingsPct = Math.round((1 - subscriptionPrice / oneTimePrice) * 100)
  const isSubscription = mode === 'subscription'

  function select(m: 'one-time' | 'subscription') {
    setMode(m)
    onSelect?.(m)
  }

  return (
    <div className="w-full max-w-sm mx-auto">

      {/* Toggle */}
      <div className="flex border border-cream/[0.12] mb-8">
        <button
          onClick={() => select('one-time')}
          className={`flex-1 py-3.5 font-sans text-[8px] tracking-[0.42em] uppercase transition-colors ${
            !isSubscription ? 'bg-cream/[0.06] text-cream/90' : 'text-cream/32 hover:text-cream/50'
          }`}
        >
          One-Time
        </button>
        <button
          onClick={() => select('subscription')}
          className={`flex-1 py-3.5 font-sans text-[8px] tracking-[0.42em] uppercase transition-colors relative ${
            isSubscription ? 'bg-gold/[0.08] text-gold' : 'text-cream/32 hover:text-cream/50'
          }`}
        >
          Monthly Protocol
          {isSubscription && (
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gold text-earth font-sans text-[6px] tracking-[0.28em] uppercase px-2 py-0.5 whitespace-nowrap">
              Save {savingsPct}%
            </span>
          )}
        </button>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-sans text-[9px] tracking-[0.3em] text-cream/35 uppercase">{currency}</span>
          <span
            key={mode}
            className="font-serif text-5xl text-cream leading-none"
            style={{ animation: 'fadeIn 0.25s ease forwards' }}
          >
            {(isSubscription ? subscriptionPrice : oneTimePrice).toLocaleString()}
          </span>
          {isSubscription && (
            <span className="font-sans text-[8px] tracking-[0.28em] text-cream/35 uppercase self-end pb-1">/ mo</span>
          )}
        </div>
        {isSubscription ? (
          <p className="font-sans text-[7px] tracking-[0.38em] text-gold/65 uppercase">
            Priority batch allocation · Cancel anytime
          </p>
        ) : (
          <p className="font-sans text-[7px] tracking-[0.38em] text-cream/30 uppercase">
            Single jar · Standard allocation
          </p>
        )}
      </div>

      {/* CTA */}
      <button className="w-full bg-gold/90 hover:bg-gold text-earth font-sans text-[8px] tracking-[0.55em] uppercase py-4 transition-colors">
        {isSubscription ? 'Start Monthly Protocol' : 'Purchase One Jar'}
      </button>

    </div>
  )
}

/*
  USAGE — drop into the shilajit CTA section when KEBS clears:

  Replace the "Coming Soon" block in /products/shilajit/page.tsx with:

  import SubscriptionToggle from '@/components/SubscriptionToggle'

  <SubscriptionToggle
    oneTimePrice={8500}       // ← set final price here
    subscriptionPrice={7225}  // ← set final subscription price here
  />

  Pricing note: subscription price should be discounted enough (~15%) to make
  it the obvious choice. One-time price must be set before KEBS clears.
*/

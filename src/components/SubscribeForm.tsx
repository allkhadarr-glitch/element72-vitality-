'use client'

import { useState } from 'react'

export default function SubscribeForm({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message ?? 'Something went wrong. Please try again.')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
          <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-obsidian/60 text-sm tracking-wide font-sans">
          You&apos;re on the list. We&apos;ll be in touch.
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="
          flex-1 bg-white/60 border border-obsidian/15
          text-obsidian placeholder-obsidian/30
          px-5 py-3.5 text-sm font-sans outline-none
          focus:border-gold/60 focus:bg-white transition-colors duration-200
        "
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="
          bg-obsidian hover:bg-gold text-ivory
          px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium font-sans
          transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed
          whitespace-nowrap
        "
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'error' && (
        <p className="text-red-600/70 text-xs text-center sm:text-left col-span-full mt-1">{message}</p>
      )}
    </form>
  )
}

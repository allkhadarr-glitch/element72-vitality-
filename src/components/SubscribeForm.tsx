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
      <div className={`flex items-center gap-3 ${className}`}>
        <svg className="text-lab-green shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8.5" stroke="currentColor" />
          <path d="M5.5 9l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-sans text-paper/75 text-[0.95rem]">
          You&apos;re on the list. We&apos;ll be in touch.
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 w-full ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="
          flex-1 bg-paper/[0.05] border border-paper/[0.15]
          text-paper text-sm placeholder-paper/25
          px-5 py-4 font-mono outline-none
          focus:border-copper/50 transition-colors duration-200
        "
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="
          bg-e-amber text-obsidian
          hover:bg-e-amber/90
          px-8 py-4 text-[10px] tracking-[0.28em] uppercase font-sans font-medium
          transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed
          whitespace-nowrap
        "
      >
        {status === 'loading' ? 'RESERVING...' : 'RESERVE SPOT'}
      </button>
      {status === 'error' && (
        <p className="text-red-400/75 text-sm mt-1">{message}</p>
      )}
    </form>
  )
}

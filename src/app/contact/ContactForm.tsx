'use client'

import { useState } from 'react'

const subjects = [
  'Product inquiry',
  'Wholesale / Distribution',
  'Press / Media',
  'Partnership',
  'Other',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: subjects[0], message: '' })
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = `
    w-full bg-cream/[0.05] border border-cream/[0.10]
    text-cream placeholder-cream/25
    px-5 py-3.5 text-sm font-sans outline-none
    focus:border-gold/50 focus:bg-cream/[0.08] transition-colors duration-200
  `

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <div className="w-10 h-px bg-gold mx-auto mb-8" />
        <p className="font-serif text-2xl text-cream mb-3">Message received.</p>
        <p className="font-sans text-cream/70 text-sm">We&apos;ll respond within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Your name"
          required
          className={inputClass}
        />
        <input
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="your@email.com"
          required
          className={inputClass}
        />
      </div>

      <select
        value={form.subject}
        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
        className={`${inputClass} cursor-pointer`}
      >
        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      <textarea
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        placeholder="Your message"
        required
        rows={6}
        className={`${inputClass} resize-none`}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start font-sans text-[10px] tracking-[0.3em] uppercase text-earth bg-gold hover:bg-cream px-10 py-4 transition-colors duration-300 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="font-sans text-red-600/70 text-xs">Something went wrong. Please email us directly at HQ@element72vitality.com</p>
      )}
    </form>
  )
}

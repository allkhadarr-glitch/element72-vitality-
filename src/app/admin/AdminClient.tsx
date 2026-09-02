'use client'

import { useState } from 'react'

type Props = {
  stats: {
    todaySessions:  number
    todayPageViews: number
    weekSessions:   number
    totalSignups:   number
    topPages:       [string, number][]
    topReferrers:   [string, number][]
    deviceCounts:   Record<string, number>
    topCountries:   [string, number][]
  }
  signups: { email: string; sourcePage: string; date: string }[]
  recentViews: { path: string; country: string; device: string; date: string }[]
}

type Tab = 'overview' | 'signups' | 'visits'

export default function AdminClient({ stats, signups, recentViews }: Props) {
  const [tab, setTab] = useState<Tab>('overview')
  const { todaySessions, todayPageViews, weekSessions, totalSignups,
          topPages, topReferrers, deviceCounts, topCountries } = stats

  const maxPageCount = topPages[0]?.[1] ?? 1
  const maxRefCount  = topReferrers[0]?.[1] ?? 1

  return (
    <div className="min-h-screen bg-earth">

      {/* ── Header ── */}
      <div className="border-b border-cream/[0.08] px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-0.5">Element 72 Vitality</p>
          <p className="font-serif text-xl text-cream">Admin</p>
        </div>
        <a
          href="/"
          className="font-sans text-[10px] tracking-[0.3em] text-cream/30 uppercase hover:text-cream/60 transition-colors"
        >
          ← Site
        </a>
      </div>

      {/* ── Tabs ── */}
      <div className="border-b border-cream/[0.06] px-6">
        <div className="flex gap-8">
          {(['overview', 'signups', 'visits'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-4 font-sans text-[10px] tracking-[0.3em] uppercase border-b-2 transition-colors ${
                tab === t
                  ? 'text-gold border-gold'
                  : 'text-cream/35 border-transparent hover:text-cream/60'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* ── OVERVIEW TAB ── */}
        {tab === 'overview' && (
          <div className="space-y-8">

            {/* Key numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard val={todaySessions}  label="Today's visitors" />
              <StatCard val={todayPageViews} label="Today's page views" />
              <StatCard val={weekSessions}   label="This week visitors" />
              <StatCard val={totalSignups}   label="Total signups" color="text-gold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Top pages */}
              <div className="border border-cream/[0.08] bg-earth-card">
                <div className="px-5 py-4 border-b border-cream/[0.06]">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Top pages · 7 days</p>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {topPages.map(([path, count]) => (
                    <div key={path}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-sans text-xs text-cream/70 truncate max-w-[200px]">{path === '/' ? 'Homepage' : path}</span>
                        <span className="font-sans text-xs text-cream/40 ml-4 shrink-0">{count}</span>
                      </div>
                      <div className="h-px bg-cream/[0.06] w-full relative">
                        <div
                          className="absolute top-0 left-0 h-px bg-gold/40"
                          style={{ width: `${(count / maxPageCount) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  {topPages.length === 0 && <p className="font-sans text-cream/30 text-xs">No data yet.</p>}
                </div>
              </div>

              {/* Referrers */}
              <div className="border border-cream/[0.08] bg-earth-card">
                <div className="px-5 py-4 border-b border-cream/[0.06]">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Where they came from · 7 days</p>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {topReferrers.map(([ref, count]) => (
                    <div key={ref}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-sans text-xs text-cream/70">{ref}</span>
                        <span className="font-sans text-xs text-cream/40">{count}</span>
                      </div>
                      <div className="h-px bg-cream/[0.06] w-full relative">
                        <div
                          className="absolute top-0 left-0 h-px bg-gold/40"
                          style={{ width: `${(count / maxRefCount) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  {topReferrers.length === 0 && <p className="font-sans text-cream/30 text-xs">No data yet.</p>}
                </div>
              </div>

              {/* Devices */}
              <div className="border border-cream/[0.08] bg-earth-card">
                <div className="px-5 py-4 border-b border-cream/[0.06]">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Devices · 7 days</p>
                </div>
                <div className="p-5 grid grid-cols-3 gap-4">
                  {Object.entries(deviceCounts).map(([device, count]) => (
                    <div key={device} className="text-center">
                      <p className="font-serif text-2xl text-cream/60 mb-1">{count}</p>
                      <p className="font-sans text-[9px] tracking-[0.3em] text-cream/30 uppercase">{device}</p>
                    </div>
                  ))}
                  {Object.keys(deviceCounts).length === 0 && (
                    <p className="font-sans text-cream/30 text-xs col-span-3">No data yet.</p>
                  )}
                </div>
              </div>

              {/* Countries */}
              <div className="border border-cream/[0.08] bg-earth-card">
                <div className="px-5 py-4 border-b border-cream/[0.06]">
                  <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Countries · 7 days</p>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {topCountries.map(([country, count]) => (
                    <div key={country} className="flex items-center justify-between">
                      <span className="font-sans text-xs text-cream/70">{country}</span>
                      <span className="font-sans text-xs text-cream/40">{count} views</span>
                    </div>
                  ))}
                  {topCountries.length === 0 && <p className="font-sans text-cream/30 text-xs">No data yet.</p>}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── SIGNUPS TAB ── */}
        {tab === 'signups' && (
          <div className="border border-cream/[0.08]">
            <div className="px-5 py-4 border-b border-cream/[0.06] flex items-center justify-between bg-earth-card">
              <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">All signups</p>
              <p className="font-sans text-[9px] text-cream/30">{signups.length} shown</p>
            </div>
            {signups.length === 0 ? (
              <div className="px-5 py-16 text-center">
                <p className="font-sans text-cream/30 text-sm">No signups yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-cream/[0.05]">
                {signups.map((s, i) => (
                  <div key={i} className="px-5 py-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2 md:gap-6 items-center">
                    <p className="font-sans text-sm text-cream/80">{s.email}</p>
                    <p className="font-sans text-xs text-cream/35">{s.sourcePage}</p>
                    <p className="font-sans text-[10px] text-cream/25 whitespace-nowrap">{s.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── VISITS TAB ── */}
        {tab === 'visits' && (
          <div className="border border-cream/[0.08]">
            <div className="px-5 py-4 border-b border-cream/[0.06] flex items-center justify-between bg-earth-card">
              <p className="font-sans text-[9px] tracking-[0.4em] text-gold/70 uppercase">Recent page views · 7 days</p>
              <p className="font-sans text-[9px] text-cream/30">{recentViews.length} shown</p>
            </div>
            {recentViews.length === 0 ? (
              <div className="px-5 py-16 text-center">
                <p className="font-sans text-cream/30 text-sm">No visits tracked yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-cream/[0.05]">
                {recentViews.map((v, i) => (
                  <div key={i} className="px-5 py-3.5 grid grid-cols-2 md:grid-cols-[1fr_80px_80px_auto] gap-2 md:gap-6 items-center">
                    <p className="font-sans text-sm text-cream/70">{v.path === '/' ? 'Homepage' : v.path}</p>
                    <p className="font-sans text-xs text-cream/35">{v.country}</p>
                    <p className="font-sans text-xs text-cream/35">{v.device}</p>
                    <p className="font-sans text-[10px] text-cream/25 whitespace-nowrap">{v.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ val, label, color = 'text-cream' }: { val: number; label: string; color?: string }) {
  return (
    <div className="border border-cream/[0.08] bg-earth-card p-5">
      <p className={`font-serif text-3xl mb-1 ${color}`}>{val}</p>
      <p className="font-sans text-[9px] tracking-[0.3em] text-cream/30 uppercase leading-relaxed">{label}</p>
    </div>
  )
}

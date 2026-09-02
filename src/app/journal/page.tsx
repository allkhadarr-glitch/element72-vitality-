import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Journal — Element 72 Vitality',
  description: 'The Element 72 journal. Science, sourcing, and the story behind earth-derived wellness.',
}

const articles = [
  {
    slug: 'what-is-shilajit',
    category: 'Shilajit',
    title: 'What is Shilajit and why does it matter?',
    excerpt: 'Formed over millions of years in high-altitude mountain ranges, shilajit is one of the most mineral-dense substances found in nature. Here is what the science says.',
    readTime: '6 min read',
    date: 'April 2026',
  },
  {
    slug: 'black-seed-oil-guide',
    category: 'Black Seed Oil',
    title: 'Black Seed Oil: what the science says',
    excerpt: 'Used for centuries across East Africa, the Middle East, and South Asia, Nigella sativa has accumulated one of the most substantial research profiles of any botanical supplement.',
    readTime: '5 min read',
    date: 'April 2026',
  },
]

export default function JournalPage() {
  return (
    <div className="bg-earth min-h-screen">

      {/* ── HEADER ── */}
      <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-36 border-b border-cream/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-8 animate-fade-up delay-100">
            Editorial
          </p>
          <h1 className="font-serif text-[clamp(3rem,9vw,7rem)] text-cream leading-none tracking-tight mb-10 animate-fade-up delay-200">
            Journal
          </h1>
          <p className="font-sans text-cream/55 text-[0.95rem] leading-[1.85] max-w-md animate-fade-up delay-300">
            The science behind earth-derived wellness. Sourcing stories, compound breakdowns, and the thinking behind what we build.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto divide-y divide-cream/[0.06]">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className={`group flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-12 md:py-16 hover:opacity-75 transition-opacity duration-500 reveal reveal-d${i + 1}`}
            >
              {/* Category + meta — stacked on mobile, column on desktop */}
              <div className="flex items-center justify-between md:block md:w-36 shrink-0 md:pt-1">
                <p className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase">{article.category}</p>
                {/* Arrow visible only on mobile, inline with category */}
                <span className="font-serif text-cream/25 group-hover:text-gold transition-colors duration-300 text-lg md:hidden">→</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] text-cream mb-3 leading-[1.2] group-hover:text-cream/80 transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="font-sans text-cream/55 text-[0.9rem] leading-[1.85] mb-5 max-w-xl">{article.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-cream/30 uppercase">{article.date}</span>
                  <span className="text-cream/20">·</span>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-cream/30 uppercase">{article.readTime}</span>
                </div>
              </div>

              {/* Arrow — desktop only */}
              <div className="hidden md:flex md:self-center shrink-0 md:pl-4">
                <span className="font-serif text-cream/25 group-hover:text-gold transition-colors duration-300 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── MORE COMING ── */}
      <section className="px-6 py-20 md:py-28 border-t border-cream/[0.06] bg-earth-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 reveal">
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase mb-4">More coming</p>
            <p className="font-serif text-2xl md:text-3xl text-cream leading-snug max-w-lg">
              We document everything. Sourcing visits, testing results, compound breakdowns.
            </p>
          </div>
          <Link
            href="/#join"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.4em] uppercase text-cream/40 hover:text-gold transition-colors duration-300 shrink-0"
          >
            Join the Waitlist <span className="font-serif text-base">→</span>
          </Link>
        </div>
      </section>

    </div>
  )
}

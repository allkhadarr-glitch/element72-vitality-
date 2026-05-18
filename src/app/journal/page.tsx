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
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-20">
          <p className="font-sans text-[9px] tracking-[0.5em] text-gold uppercase mb-4">Editorial</p>
          <h1 className="font-serif text-4xl text-cream mb-4">Journal</h1>
          <p className="font-sans text-cream/70 text-sm leading-relaxed max-w-md">
            The science behind earth-derived wellness. Sourcing stories, compound breakdowns, and the thinking behind what we build.
          </p>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-0">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className={`group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-t border-cream/[0.08] ${i === articles.length - 1 ? 'border-b' : ''}`}
            >
              <div className="md:w-32 shrink-0">
                <p className="font-sans text-[9px] tracking-[0.4em] text-gold uppercase">{article.category}</p>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-xl text-cream mb-3 group-hover:text-cream/75 transition-colors duration-200 leading-snug">
                  {article.title}
                </h2>
                <p className="font-sans text-cream/70 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[10px] tracking-wide text-cream/35">{article.date}</span>
                  <span className="font-sans text-[10px] tracking-wide text-cream/35">·</span>
                  <span className="font-sans text-[10px] tracking-wide text-cream/35">{article.readTime}</span>
                </div>
              </div>
              <div className="md:self-center shrink-0">
                <span className="font-sans text-cream/30 group-hover:text-gold transition-colors duration-200">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

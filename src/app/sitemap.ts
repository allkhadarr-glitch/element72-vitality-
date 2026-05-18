import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://element72vitality.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products/shilajit`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/products/black-seed-oil`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/journal/what-is-shilajit`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/journal/black-seed-oil-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/our-standard`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/founder`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}

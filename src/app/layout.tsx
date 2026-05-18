import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Element 72 Vitality — Earth-Derived Wellness',
  description: 'Single-origin wellness products. Sourced with intention. Tested without compromise. Built in Kenya, for the world.',
  openGraph: {
    title: 'Element 72 Vitality',
    description: 'Earth-derived. Mineral-rich. Built in Kenya.',
    siteName: 'Element 72 Vitality',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Element 72 Vitality',
    description: 'Earth-derived. Mineral-rich. Built in Kenya.',
  },
  verification: {
    google: 'A3m8IukNFYxYGFv3k6iKlhsUBl8GPecRgNpdJGUg9hw',
  },
  metadataBase: new URL('https://element72vitality.com'),
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Element 72 Vitality',
  url: 'https://element72vitality.com',
  logo: 'https://element72vitality.com/icon.png',
  description: 'Single-origin wellness products. Sourced with intention. Tested without compromise. Built in Kenya, for the world.',
  email: 'HQ@element72vitality.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://tiktok.com/@element72vitality',
    'https://instagram.com/element72vitality',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Element 72 Vitality',
  url: 'https://element72vitality.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Nav />
        <ScrollReveal />
        <main className="pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

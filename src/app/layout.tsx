import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import PageTransition from '@/components/PageTransition'
import Tracker from '@/components/Tracker'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Element 72 Vitality — Proof Before Price.',
  description: 'Every supplement we sell is third-party tested before it is priced. Single-origin, KEBS certified, fully transparent. Built in Kenya.',
  openGraph: {
    title: 'Element 72 Vitality — Proof Before Price.',
    description: 'Test first. Publish the result. Then set the price. Single-origin, KEBS certified, built in Kenya.',
    siteName: 'Element 72 Vitality',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Element 72 Vitality — Proof Before Price.',
    description: 'Test first. Publish the result. Then set the price.',
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
  logo: 'https://element72vitality.com/e72-logo.png',
  description: 'Every supplement is third-party tested before pricing. Single-origin, KEBS certified, fully transparent.',
  email: 'hq@element72vitality.com',
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
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
        <Tracker />
        <main className="pt-[72px]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}

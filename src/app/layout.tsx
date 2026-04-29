import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
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
  metadataBase: new URL('https://element72vitality.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <ScrollReveal />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

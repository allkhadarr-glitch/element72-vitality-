import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'Element 72 Vitality — Earth-Derived. Mineral-Rich. Built in Kenya.',
  description:
    'Premium wellness rooted in the earth. Single-origin adaptogens and superfoods, sourced with intention. Join the waitlist.',
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? 'https://element72vitality.com'
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.element72vitality.com' }],
        destination: 'https://element72vitality.com/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      // Proxy PostHog through your own domain — bypasses ad blockers
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig

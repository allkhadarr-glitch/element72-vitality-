import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Element 72 Vitality — Earth-Derived Wellness'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#F5F0E8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle border frame */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid rgba(26, 18, 8, 0.12)',
            display: 'flex',
          }}
        />

        {/* Gold accent top */}
        <div
          style={{
            position: 'absolute',
            top: 56,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 48,
            height: 1,
            background: '#BF9A52',
            display: 'flex',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'serif',
              fontSize: 72,
              color: '#1A1208',
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Element 72
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: 11,
              color: 'rgba(26, 18, 8, 0.35)',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            Vitality
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 48,
            background: 'rgba(191, 154, 82, 0.4)',
            marginTop: 40,
            marginBottom: 40,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontFamily: 'sans-serif',
            fontSize: 22,
            color: 'rgba(26, 18, 8, 0.5)',
            letterSpacing: '0.5px',
          }}
        >
          Earth-derived. Mineral-rich. Built in Kenya.
        </span>

        {/* Gold accent bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 48,
            height: 1,
            background: '#BF9A52',
            display: 'flex',
          }}
        />

        {/* URL */}
        <span
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'sans-serif',
            fontSize: 11,
            color: 'rgba(26, 18, 8, 0.25)',
            letterSpacing: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          element72vitality.com
        </span>
      </div>
    ),
    { ...size }
  )
}

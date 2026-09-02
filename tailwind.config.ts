import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── New design system ──
        obsidian: '#09090B',
        void: '#0D0D0F',
        shale: '#2D3130',
        paper: '#F5F5F0',
        copper: '#B87333',
        'e-amber': '#C7923E',
        'lab-green': '#5a9e6f',
        // ── Legacy (other pages) ──
        earth: '#120E09',
        'earth-card': '#191309',
        'earth-hover': '#201A10',
        cream: '#EDE8DC',
        parchment: '#EDE8DC',
        gold: '#C9A55A',
        'gold-light': '#D4B46A',
        card: '#141109',
        ivory: '#EDE8DC',
        border: '#EDE8DC',
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

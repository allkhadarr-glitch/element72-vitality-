import type { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
}

export default function LogoMark({ className = '', style }: Props) {
  return (
    <svg
      viewBox="0 0 220 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Outer hexagon — flat-top orientation */}
      <polygon
        points="150,18 190,88 150,158 70,158 30,88 70,18"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Inner hexagon — double-line detail */}
      <polygon
        points="143,29 181,88 143,147 77,147 39,88 77,29"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Descending lines from bottom corners toward VITALITY */}
      <line x1="70" y1="158" x2="28" y2="198" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="158" x2="192" y2="198" stroke="currentColor" strokeWidth="2" />

      {/* E — bold, large */}
      <text
        x="44"
        y="124"
        fontSize="90"
        fontWeight="900"
        fontFamily="var(--font-inter), Montserrat, sans-serif"
        fill="currentColor"
      >E</text>

      {/* 72 — slightly smaller, right-aligned within hex */}
      <text
        x="108"
        y="122"
        fontSize="65"
        fontWeight="900"
        fontFamily="var(--font-inter), Montserrat, sans-serif"
        fill="currentColor"
      >72</text>

      {/* VITALITY — wide tracked caps below hex */}
      <text
        x="110"
        y="202"
        fontSize="13"
        fontWeight="700"
        fontFamily="var(--font-inter), Montserrat, sans-serif"
        fill="currentColor"
        textAnchor="middle"
        letterSpacing="10"
      >VITALITY</text>
    </svg>
  )
}

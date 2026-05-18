import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-earth min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">

      <div className="mb-8">
        <div className="w-8 h-px bg-gold/40 mx-auto mb-10" />
        <span className="font-serif text-[clamp(5rem,20vw,12rem)] text-cream/[0.06] leading-none select-none">
          404
        </span>
      </div>

      <p className="font-sans text-[9px] tracking-[0.55em] text-gold uppercase mb-5">Not Found</p>
      <p className="font-serif text-2xl md:text-3xl text-cream mb-3 leading-snug">
        This page doesn&apos;t exist.
      </p>
      <p className="font-sans text-cream/45 text-sm mb-14 max-w-xs leading-relaxed">
        Or perhaps it never did. Either way, there&apos;s nothing here.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link
          href="/"
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-earth bg-cream hover:bg-gold px-8 py-3.5 transition-colors duration-300"
        >
          Back to Home
        </Link>
        <Link
          href="/products"
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-cream/55 hover:text-gold transition-colors duration-200"
        >
          View Products →
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-gold/20 to-transparent" />
      </div>

    </div>
  )
}

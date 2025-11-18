import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-slate-950" />

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] opacity-80">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Mercedes-focused car rentals
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            MercRent
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl">
            A professional car rental experience tailored for Mercedes lovers. Book premium models with transparent pricing and real-time availability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#fleet" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">Browse Fleet</a>
            <a href="#cta" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/15 transition">Contact Sales</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

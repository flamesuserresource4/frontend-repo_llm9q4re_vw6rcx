import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Fleet() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch(`${BACKEND_URL}/cars?brand=Mercedes`)
        const data = await res.json()
        setCars(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <section id="fleet" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Pick your Mercedes</h2>
            <p className="text-slate-300 mt-2">Hand-picked Mercedes models available now</p>
          </div>
          <a href="#cta" className="px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:bg-white/10">Book now</a>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading fleet…</p>
        ) : cars.length === 0 ? (
          <p className="text-slate-400">No cars yet. We will add some for you shortly.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10 transition">
                <img src={car.image_url || 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop'} alt={car.model} className="h-44 w-full object-cover rounded-xl" />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{car.brand} {car.model}</h3>
                    <span className="text-white/90 font-bold">${car.price_per_day}<span className="text-sm font-normal text-white/60">/day</span></span>
                  </div>
                  <p className="text-slate-300 text-sm mt-1">{car.transmission} • {car.seats} seats • {car.fuel}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

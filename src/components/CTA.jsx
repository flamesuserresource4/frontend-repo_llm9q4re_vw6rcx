import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function CTA() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    pickup_location: '',
    dropoff_location: '',
    pickup_date: '',
    dropoff_date: '',
    notes: ''
  })
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('Submitting…')
    try {
      const payload = { ...form, car_id: 'selected-later' }
      const res = await fetch(`${BACKEND_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Request received! Our team will reach out shortly.')
    } catch (err) {
      console.error(err)
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white">Ready to drive?</h3>
            <p className="mt-2 text-slate-300">Tell us when and where. We’ll confirm availability and finalize your booking.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Premium Mercedes-only fleet</li>
              <li>Flexible pickup and dropoff</li>
              <li>Transparent, all-inclusive pricing</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" placeholder="Full name" value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} required />
              <input className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
              <input className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" placeholder="Pickup location" value={form.pickup_location} onChange={e=>setForm({...form, pickup_location:e.target.value})} required />
              <input className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" placeholder="Dropoff location" value={form.dropoff_location} onChange={e=>setForm({...form, dropoff_location:e.target.value})} required />
              <input type="date" className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" value={form.pickup_date} onChange={e=>setForm({...form, pickup_date:e.target.value})} required />
              <input type="date" className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" value={form.dropoff_date} onChange={e=>setForm({...form, dropoff_date:e.target.value})} required />
            </div>
            <textarea className="mt-4 w-full px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-white" rows="3" placeholder="Notes (optional)" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
            <button type="submit" className="mt-4 w-full px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold">Request booking</button>
            {status && <p className="mt-3 text-sm text-slate-200">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

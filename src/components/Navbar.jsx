import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white text-slate-900 grid place-items-center font-black">M</div>
            <span className="text-white font-semibold">MercRent</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#fleet" className="hover:text-white">Fleet</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Get Started</a>
            <button className="md:hidden p-2 text-white" aria-label="Menu"><Menu size={20} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}

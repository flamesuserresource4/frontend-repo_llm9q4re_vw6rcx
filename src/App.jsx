import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import CTA from './components/CTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} MercRent · Mercedes car rentals
      </footer>
    </div>
  )
}

export default App

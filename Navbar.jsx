import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <nav className="section h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white font-black">G</span>
          <span className="text-lg font-semibold">GDG</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-black/70">
          <li><a className="hover:text-black" href="#features">Features</a></li>
          <li><a className="hover:text-black" href="#showcase">Showcase</a></li>
          <li><a className="hover:text-black" href="#pricing">Pricing</a></li>
          <li><a className="hover:text-black" href="#faq">FAQ</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a className="btn btn-ghost" href="#contact">Contact</a>
          <a className="btn btn-primary" href="#get-started">Get Started</a>
        </div>
      </nav>
    </header>
  )
}
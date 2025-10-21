import React from 'react'

export default function Showcase() {
  return (
    <section id="showcase" className="section py-16">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="card p-6 flex flex-col">
          <h3 className="text-lg font-semibold">Responsive by default</h3>
          <p className="text-sm text-black/70 mt-1">Grid and spacing scale smoothly from mobile to desktop.</p>
          <div className="mt-4 flex-1 rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-black/5"></div>
        </div>
        <div className="card p-6 flex flex-col">
          <h3 className="text-lg font-semibold">Component first</h3>
          <p className="text-sm text-black/70 mt-1">Sections are composed of small pieces for reuse.</p>
          <div className="mt-4 flex-1 rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100 ring-1 ring-black/5"></div>
        </div>
      </div>
    </section>
  )
}
import React from 'react'

const data = [
  { title: 'Layout fidelity', text: 'Spacing, rhythm, and type closely mirror the Figma reference.' },
  { title: 'Practical a11y', text: 'Keyboard focus states and semantic structure are in place.' },
  { title: 'Small footprint', text: 'Vite + React + Tailwind keep the build lean and quick.' },
  { title: 'Type‑ready', text: 'Switch to TypeScript with minimal changes if preferred.' },
  { title: 'Composability', text: 'Components are small and easy to re‑arrange.' },
  { title: 'Test friendly', text: 'Structured for adding unit and UI tests later.' },
]

export default function Features() {
  return (
    <section id="features" className="section py-16">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">What this build focuses on</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((f) => (
          <div key={f.title} className="card p-6">
            <div className="h-10 w-10 rounded-xl bg-brand-100 flex items-center justify-center font-black text-brand-700 mb-4">•</div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-black/70 mt-1">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
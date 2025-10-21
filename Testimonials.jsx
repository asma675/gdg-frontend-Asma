import React from 'react'

const items = [
  { quote: 'Straightforward code and easy to read.', name: 'Alex C.', role: 'Product Lead' },
  { quote: 'The UI matches the spec without guesswork.', name: 'Sam W.', role: 'Engineering Manager' },
  { quote: 'Nice focus states and tidy layout.', name: 'Priya K.', role: 'Design Manager' },
]

export default function Testimonials() {
  return (
    <section className="section py-16">
      <div className="card p-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Feedback</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-soft">
              <blockquote className="text-sm text-black/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-black/60">{t.name} • {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
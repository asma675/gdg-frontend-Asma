import React from 'react'

export default function Cta() {
  return (
    <section id="get-started" className="section py-16">
      <div className="card p-8 flex items-center justify-between gap-6 flex-col md:flex-row">
        <div>
          <h3 className="text-xl font-semibold">Hook it up and deploy</h3>
          <p className="text-sm text-black/70 mt-1">
            Set <code>VITE_BACKEND_URL</code> to point at your API and push a build to your host of choice.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a className="btn btn-ghost" href="#contact">Contact</a>
          <a className="btn btn-primary" href="#features">Explore Features</a>
        </div>
      </div>
    </section>
  )
}
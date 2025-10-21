# GDG Front‑end Challenge

A small, readable React project using Vite and Tailwind. The homepage follows the provided Figma structure and includes a simple backend check.

## Getting started

```bash
npm i
npm run dev
```

Open http://localhost:5173.

## Backend placeholder

If you provide `VITE_BACKEND_URL`, the Hero section will call `GET /health` and print the response. This is only meant to show the wiring between the UI and an API.

Create `.env`:

```
VITE_BACKEND_URL=https://api.example.com
```

If not set, the page will say: “Set VITE_BACKEND_URL to call backend.”

## Tech notes

- React 18 + Vite 5
- Tailwind for layout and tokens
- Sections are small and easy to swap out
- Add TypeScript later if needed

## Commands

- `npm run dev` – start dev server
- `npm run build` – create a production build
- `npm run preview` – preview the build

## Structure

```
gdg-frontend/
  ├─ index.html
  ├─ package.json
  ├─ postcss.config.js
  ├─ tailwind.config.js
  ├─ vite.config.js
  └─ src/
     ├─ index.css
     ├─ main.jsx
     └─ ui/
        ├─ App.jsx
        ├─ Navbar.jsx
        ├─ Hero.jsx
        ├─ Logos.jsx
        ├─ Features.jsx
        ├─ Showcase.jsx
        ├─ Testimonials.jsx
        ├─ Cta.jsx
        └─ Footer.jsx
```

## Deploy

Any static host works (Vercel/Netlify/etc.). Remember to configure `VITE_BACKEND_URL` in the host’s environment settings.
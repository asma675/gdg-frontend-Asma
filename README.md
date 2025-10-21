# GDG Front‑end Challenge - Next.js + Tailwind + shadcn/ui

This is the Next.js version of the homepage based on the Figma reference.  
It uses **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn/ui** for components.

## Getting started

```bash
npm i
npm run dev
```

Open http://localhost:3000.

## Backend placeholder

If you set `NEXT_PUBLIC_BACKEND_URL`, the Hero section will call `GET /health` and print the response JSON.

Create `.env.local`:

```
NEXT_PUBLIC_BACKEND_URL=https://api.example.com
```

If not set, the page will show: “Set NEXT_PUBLIC_BACKEND_URL to call backend.”

## Tech notes

- Next.js 14 (App Router) + TypeScript
- Tailwind for layout and tokens
- shadcn/ui components (Button, Card, Badge) and lucide-react icons ready
- Sections are modular and easy to extend

## Commands

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – run production server

## Structure

```
gdg-next/
  ├─ app/
  │  ├─ globals.css
  │  ├─ layout.tsx
  │  └─ page.tsx
  ├─ components/
  │  ├─ Navbar.tsx
  │  ├─ Hero.tsx
  │  ├─ Logos.tsx
  │  ├─ Features.tsx
  │  ├─ Showcase.tsx
  │  ├─ Testimonials.tsx
  │  ├─ Cta.tsx
  │  └─ Footer.tsx
  │  └─ ui/
  │     ├─ badge.tsx
  │     ├─ button.tsx
  │     └─ card.tsx
  ├─ lib/utils.ts
  ├─ package.json
  ├─ postcss.config.js
  ├─ tailwind.config.ts
  ├─ tsconfig.json
  └─ next.config.ts
```

## Deploy

- Works out-of-the-box on **Vercel**.  
- Add `NEXT_PUBLIC_BACKEND_URL` in project environment variables.

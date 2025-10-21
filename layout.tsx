import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GDG • Front-end Challenge (Next.js + shadcn/ui)",
  description: "Homepage based on Figma with Tailwind and shadcn/ui, plus a backend placeholder.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
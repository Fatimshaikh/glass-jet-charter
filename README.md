# ✈️ Altura — Private Jet Charter

A private aviation booking landing page built as a design showcase, exploring **Glassmorphism** — frosted, translucent glass panels layered over a vivid backdrop, using `backdrop-filter: blur` to let color and imagery show through structured UI.

**[Live Demo](#)** · **[Repo](https://github.com/Fatimshaikh/glass-jet-charter)**

---

## ✨ Features

- **Fixed sky gradient backdrop** (`background-attachment: fixed`) that stays locked behind every glass panel as the page scrolls, so the blur always has rich color to refract
- **Layered glass depth** — a `.glass` and `.glass-strong` utility pair used deliberately: stronger opacity for primary panels, lighter glass nested inside for form inputs, creating real depth instead of a single flat blur
- **Floating glass booking panel** in the hero, composed over full-bleed aircraft photography — the signature glassmorphism composition of content floating over imagery
- **Glass fleet cards** with photo, specs, and hover zoom for each jet class
- **Pill-shaped floating navbar**, a glass variant distinct from the full-width bars used across the rest of this project series

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Manrope (headings) · Inter (body) — via `next/font` |

## 📁 Project Structure

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css # sky gradient + .glass / .glass-strong utilities
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── Fleet.tsx
│ └── Footer.tsx
└── data/
└── fleet.ts


## 🚀 Getting Started

```bash
git clone https://github.com/Fatimshaikh/glass-jet-charter.git
cd glass-jet-charter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🎯 Purpose

Part of a series of design-style showcase projects demonstrating the same core stack (Next.js, TypeScript, Tailwind, Framer Motion) applied to distinct visual identities — this one aimed at high-ticket, premium-tech-adjacent industries (private aviation, fintech, luxury services) where a modern glass aesthetic signals both innovation and trust.

## 📄 License

MIT — free to use as a learning reference.
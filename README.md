# NexaLab — Next.js Beautiful Agency Website

A stunning, production-grade Next.js 14 website with a deep blue theme inspired by modern tech agencies.

## ✨ Features

- **Dark blue theme** with glowing accents, animated particles, and glass morphism cards
- **Animated hero** with canvas-based particle network
- **Responsive** — mobile-first, works on all screen sizes
- **Smooth scroll animations** using Intersection Observer
- **Pages**: Home, Services, About, Contact
- **Components**: Navbar, Hero, Stats marquee, Services grid, About, Work/Portfolio, Testimonials, CTA, Footer
- **Fonts**: Syne (display) + DM Sans (body)

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + CSS utilities
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   └── contact/page.tsx    # Contact page with form
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Animated hero with particles
│   ├── Stats.tsx           # Tech marquee bar
│   ├── Services.tsx        # Service cards grid
│   ├── About.tsx           # About section with code mockup
│   ├── Work.tsx            # Portfolio bento grid
│   ├── Testimonials.tsx    # Client testimonials
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Full footer with links
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## 🎨 Design System

CSS variables defined in `globals.css`:
- `--navy-950` → `#020B18` (background)
- `--blue-500` → `#0EA5E9` (primary)
- `--cyan-400` → `#22D3EE` (accent)

Reusable utility classes:
- `.btn-primary` / `.btn-ghost` — buttons
- `.glass-card` — glassmorphism card
- `.gradient-text` — blue gradient text
- `.glow-border` — glowing border
- `.section-tag` — pill label
- `.reveal` — scroll animation trigger

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use)
- **Lucide React** icons
- Google Fonts: Syne + DM Sans

## 📦 Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

---

Built with ❤️ using Next.js 14 App Router

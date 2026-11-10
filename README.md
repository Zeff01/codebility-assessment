# RestoFlow — Modern Restaurant Marketing & Analytics Platform

A premium, responsive SaaS landing page for RestoFlow, a restaurant marketing platform that tracks every customer, every dollar spent, and every marketing channel that works. Built with Next.js (App Router), React, and Tailwind CSS.

> Tagline: Smarter Campaigns for Growing Restaurants.

---

## 🎯 Project Overview

This is a frontend landing page assessment built to demonstrate:

- Premium visual design inspired by modern SaaS startups (glassmorphism, gradients, floating dashboards).
- Responsive layout optimized for mobile (375px), tablet (768px), and desktop (1440px).
- Reusable component architecture using React functional components.
- Interactive dashboard preview with animated counters.
- Working frontend AI chatbot with predefined responses (ready for real API integration).
- Full navigation flow including a functional login page and contact form.

All statistics and figures are illustrative demo data, not verified business results.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Language | JavaScript (ES6+) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Plus Jakarta Sans & Inter (via `next/font`) |
| Animations | Pure CSS (`@keyframes`, transitions) + IntersectionObserver |

No additional chart libraries or UI frameworks were used — dashboards are built with pure CSS/SVG to keep the bundle minimal.

---

## 📁 Project Structure

```text
restoflow/
├── app/
│   ├── layout.js          # Root layout, font config, metadata
│   ├── page.js            # Landing page assembly
│   ├── globals.css        # Design tokens, animations, utilities
│   ├── favicon.ico        # Site favicon (used as logo icon)
│   └── login/
│       └── page.js        # Demo login page
├── components/
│   ├── Navbar.jsx         # Sticky responsive navbar with mobile drawer
│   ├── HeroSection.jsx    # Hero with badge, headline, CTAs
│   ├── DashboardPreview.jsx # Animated dashboard mockup
│   ├── HowItWorks.jsx     # 4-step process section
│   ├── PerformanceSection.jsx # Marketing results & metrics
│   ├── Features.jsx       # Feature grid
│   ├── Marketplace.jsx    # Ready-made campaign kits
│   ├── Contact.jsx        # Request Info form
│   ├── AIChatbot.jsx      # Floating AI assistant
│   ├── MetricCard.jsx     # Reusable stat card
│   ├── CampaignCard.jsx   # Reusable campaign card
│   └── ui/
│       ├── Button.jsx     # Primary / secondary / ghost button
│       └── GlassCard.jsx  # Glassmorphism wrapper
├── postcss.config.mjs
├── tailwind.config.js
└── package.json
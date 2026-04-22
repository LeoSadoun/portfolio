# Leo Sadoun — Portfolio

SOC Analyst & Developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**.  
Nord color palette, JetBrains Mono font, terminal aesthetic.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Directory Structure

```
portfolio/
├── app/
│   ├── globals.css          # Nord variables, JetBrains Mono, scanline overlay
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Assembles all sections
│   └── blog/
│       ├── page.tsx         # Blog index — lists all MDX posts
│       └── [slug]/
│           └── page.tsx     # Dynamic MDX post renderer
│
├── components/
│   ├── Nav.tsx              # Fixed top nav, active section tracking
│   ├── Hero.tsx             # Animated terminal boot sequence
│   ├── Homelab.tsx          # SOC lab, SIEM stack, MITRE ATT&CK, cert roadmap
│   ├── Projects.tsx         # Project cards (SOAR, Voxtant, HeliosAI, DL)
│   ├── Skills.tsx           # Skill matrix + proficiency bars
│   ├── Experience.tsx       # Timeline: FIU, INIT, WiCyS, AMICON
│   └── Footer.tsx
│
├── lib/
│   └── blog.ts              # getAllPosts(), getPostBySlug() — reads from content/blog/
│
├── content/
│   └── blog/
│       └── wazuh-splunk-brute-force.mdx   # Sample write-up
│
├── public/                  # Static assets (favicon, OG image, resume PDF)
│
├── tailwind.config.ts       # Nord palette, JetBrains Mono, custom animations
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Adding Blog Posts

Drop `.mdx` files into `content/blog/`. Required frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-02-01"
description: "Short summary shown on the index page."
tags: ["Wazuh", "Splunk", "MITRE"]
readingTime: "6 min read"
---

## Your content here
```

The blog index at `/blog` auto-discovers all posts, sorted by date descending.

---

## Customization Checklist

| File | What to update |
|------|---------------|
| `components/Hero.tsx` | Tagline, social links |
| `components/Homelab.tsx` | Services list, VLAN layout, cert % |
| `components/Projects.tsx` | GitHub URLs, project bullets |
| `components/Skills.tsx` | Proficiency bar percentages |
| `components/Experience.tsx` | Dates, bullets |
| `app/layout.tsx` | OG metadata, description |
| `public/` | Add `favicon.ico`, `og.png`, `leo-resume.pdf` |

---

## Nord Color Reference

| Variable | Hex | Use |
|----------|-----|-----|
| `nord-0` | `#2E3440` | Background |
| `nord-1` | `#3B4252` | Cards / elevated surfaces |
| `nord-3` | `#4C566A` | Muted text, borders |
| `nord-4` | `#D8DEE9` | Body text |
| `nord-6` | `#ECEFF4` | Headings / emphasis |
| `nord-8` | `#88C0D0` | Primary accent (frost blue) |
| `nord-11` | `#BF616A` | Red / alerts / security |
| `nord-13` | `#EBCB8B` | Yellow / warnings |
| `nord-14` | `#A3BE8C` | Green / active / success |
| `nord-15` | `#B48EAD` | Purple / ML |

---

## Deployment

```bash
# Vercel (recommended)
npx vercel

# Or build static
npm run build
npm run start
```

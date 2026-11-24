# Ruqayya Medical Center

Marketing website for **Ruqayya Medical Center**, a multi-specialty hospital at 103-C2, Nespak Housing Scheme (Sutlej Avenue, near Ghazi Chowk), Lahore.

Patients can read services, meet the consultant panel, request an in-person or online appointment over WhatsApp, and reach 24/7 emergency without installing anything.

## What this site is for

Aggregator apps (Marham, oladoc) currently own the hospital’s public face. This site is the hospital’s own brand: named specialists, a neighbourhood address, a phone that is also WhatsApp, and pages Google can rank for “emergency Nespak / Ghazi Chowk / Township”.

Booking is WhatsApp-first to **0312 4567497**, with **ruqayyahospital786@gmail.com** as backup. The hospital voice line for emergency remains **0300 9400020**. Nothing is stored on the server.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4327](http://localhost:4327).

```bash
npm run build
npm start
```

## Free hosting and a free domain (Vercel)

The hospital is not paying for this project, so the stack stays on **Vercel Hobby** (free) plus Vercel’s **free `*.vercel.app` address**.

1. Create a free account at [vercel.com](https://vercel.com) (GitHub login is easiest).
2. Push this repo to GitHub (or GitLab / Bitbucket).
3. In Vercel: **Add New Project** → import the repo → Framework Preset **Next.js** → Deploy. Do not add environment variables.
4. The live URL will look like `ruqayya-medical-center.vercel.app`. That URL is real HTTPS, worldwide CDN, and enough to print on a visiting card.
5. Optional nicer slug: Project → Settings → Domains → add `ruqayyamedical.vercel.app` if it is free, or rename the Vercel project so the default subdomain reads cleanly.

There is **no trustworthy free `.pk` / `.com` registrar** anymore (Freenom is gone). A custom name such as `ruqayyamedical.pk` costs money later. Until then, use the Vercel subdomain. When a domain is bought, add it in Vercel → Domains (still free SSL).

### What stays free on this architecture

| Need | How we cover it for $0 |
| --- | --- |
| Hosting + HTTPS | Vercel Hobby |
| Domain | `*.vercel.app` |
| Appointments | WhatsApp to 0312 4567497 |
| Phone | `tel:` links |
| Maps | Google Maps embed |
| Email inbox | mailto: ruqayyahospital786@gmail.com |
| Database / auth | None |

Hobby limits (bandwidth and build minutes) are far above a hospital brochure site.

## After it is live (also free)

- Create or claim the **Google Business Profile** for Ruqayya Medical Center and point it at the Vercel URL.
- Post the WhatsApp number and the site on the hospital’s Facebook / Instagram.
- Ask reception to reply to website WhatsApps the same way they answer the phone.
- Street, reception, consulting rooms, and ward photographs now live in `public/media/` and appear on Home, Inside, Contact, and Emergency.

## Content notes

- Address on this site follows the brief: **103-C2, Nespak Housing Scheme, Lahore**. Public listings sometimes show 103-C1 / Sutlej Avenue; confirm the plaque with the hospital if needed.
- **Dr. Faisal** is listed as a consultant because he is on the hospital’s named panel. His specialty was not published on aggregator sites — reception can supply the exact title.
- Clinic times on aggregator sites drift. The site tells patients to confirm with reception rather than inventing a timetable.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui. No paid APIs.

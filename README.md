# Rishi's Trucking

A website for **Rishi's Trucking** — Trinidad & Tobago based services for contract trucking, forklift rentals, and music equipment rentals (speakers, DJ equipment).

## Tech stack

- **React 19** with **TypeScript**
- **Vite 7** for build and dev server
- **CSS** (no framework) with responsive layout

## Getting started

### Prerequisites

- **Node.js** (v20 or later recommended)
- **npm**

### Install and run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the URL shown in the terminal (e.g. **http://localhost:5173/**) in your browser.

### Other commands

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run build`| Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint                     |

## Project structure

```
Rishi's Trucking/
├── public/                 # Static files (favicon, etc.)
├── src/
│   ├── assets/             # Images (logos, hero, service photos)
│   ├── components/
│   │   ├── Header.tsx      # Nav bar + logo
│   │   ├── Hero.tsx        # Hero section with background image
│   │   ├── About.tsx       # About us + highlights
│   │   ├── Services.tsx    # Service cards (trucking, forklift, etc.)
│   │   ├── Contact.tsx     # Contact info (phone/WhatsApp, email)
│   │   └── Footer.tsx      # Site footer
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.ts
```

## Customization

- **Contact details** — Edit phone number and email in `src/components/Contact.tsx`. The phone link opens WhatsApp (`wa.me`).
- **Images** — Replace files in `src/assets/` (hero, logo, service images) and update imports in the components. Favicon is in `public/` and referenced in `index.html`.
- **Logo** — Header logo is set in `src/components/Header.tsx` (import from `src/assets/`). Favicon uses the file in `public/` (e.g. `rishis_trucking_logo.png`).
- **Colors / layout** — Each section has its own `.css` in `src/components/` (e.g. `Header.css`, `Hero.css`, `Contact.css`).

## License

Private project. All rights reserved.

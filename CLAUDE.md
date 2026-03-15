# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Architecture

Single-page React 18 portfolio site built with Vite, styled with Tailwind CSS 3.

**Page sections** (rendered in order in `src/App.jsx`):
Navbar → Hero → HeroGradient → SubHero → AboutMe → Projects → Achievements → Skills → SubSkills → Experience → Beyond → Education → Testimonials → ContactMe → Footer

A `SplashScreen` overlay displays for ~2.5s on initial load before fading out (controlled by local state in App.jsx).

Each section lives in `src/components/<sectionName>/` with a `*Main.jsx` entry component.

**Data is inline:** All section data (skills, projects, experiences, etc.) is hardcoded directly in component files — there are no separate data/constants files.

**State management:** Redux Toolkit (`src/state/`). Minimal setup with a single `menuSlice` controlling mobile nav toggle (`menuOpen` boolean).

**Animations:** Framer Motion with a shared `fadeIn(direction, delay)` helper in `src/framerMotion/variants.js`. Direction accepts "up"/"down"/"left"/"right", applies a 40px offset with 1.2s tween transition.

**Contact form:** Uses EmailJS (`@emailjs/browser`) with plain React state (not Formik, despite it being in dependencies). Requires three env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

**Scrolling:** `react-scroll` handles smooth scroll navigation between sections.

**Theming:** Dark/light mode via CSS custom properties defined in `src/index.css`. Dark is default (`:root`), light activates by adding class `light` to the root element. All Tailwind colors reference these CSS variables (e.g., `rgb(var(--color-cyan) / <alpha-value>)`), so toggling the class switches the entire palette. A `.force-light` utility class overrides variables to keep dark-mode colors inside specific containers.

**Styling:** Tailwind with a fully custom color palette (replaces defaults, not extended) and custom fonts (Josefin Sans as `font-body`, Nunito as `font-special`) defined in `tailwind.config.js`. Breakpoints start at `sm: 350px`. Custom box shadows (`cyanShadow`, `orangeBigShadow`, etc.) and a marquee animation are in `theme.extend`.

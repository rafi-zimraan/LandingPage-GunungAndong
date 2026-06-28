# Blueprint — Arsitektur Teknis Gunung Andong Landing Page

## Stack
- **Framework:** Nuxt 4 (Vue 3 + Vite)
- **UI Library:** Nuxt UI 4 (Tailwind CSS v4)
- **Deployment:** Cloudflare (Nitro preset `cloudflare`)
- **Font:** Inter (sans), Georgia (serif)

## Struktur Aplikasi

```
andong-nuxt/
├── app/
│   ├── app.vue                        # Root — wraps NuxtLayout + NuxtPage
│   ├── app.config.ts                  # UI color config (primary, secondary, neutral)
│   ├── assets/css/main.css            # Design tokens: custom brown, font families
│   ├── layouts/default.vue            # Navbar + main + Footer
│   ├── pages/index.vue                # Landing page (composes all sections)
│   ├── components/
│   │   ├── Navbar.vue                 # Header navigation
│   │   ├── HeroSection.vue            # Hero with CTA
│   │   ├── StatsBar.vue               # Stat numbers
│   │   ├── TimelineSection.vue        # Basecamp timeline wrapper
│   │   ├── BasecampCard.vue           # Individual basecamp card (reused 5x)
│   │   ├── TipsGrid.vue               # Tips cards grid
│   │   ├── SummaryTable.vue           # Data table
│   │   ├── MapSection.vue             # Map placeholder
│   │   ├── CTASection.vue             # Final CTA
│   │   └── FooterSection.vue          # Footer
│   └── composables/useScrollReveal.ts # Scroll animation observer
├── public/                            # Static assets
├── nuxt.config.ts                     # Nuxt config with Cloudflare preset
├── internal/docs/                     # Documentation suite
└── package.json
```

## Data Flow
- All data is static (no backend). Content lives in component templates as reactive data.
- Future: can extract basecamp data to `shared/data/basecamps.ts`.
- Scroll animation uses `IntersectionObserver` via `useScrollReveal` composable.

## Design Tokens
| Token | CSS Variable | Value |
|-------|-------------|-------|
| Primary 500 | `--ui-color-primary-500` | `#2D6A4F` (hijau hutan) |
| Secondary 500 | `--ui-color-secondary-500` | `#8B5E3C` (cokelat tanah) |
| Neutral 100 | `--ui-color-neutral-100` | Warm off-white (krem) |
| Font serif | Georgia, serif | Body text |
| Font sans | Inter | UI labels, metadata |

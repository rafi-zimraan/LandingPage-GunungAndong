# Wireframe — Gunung Andong Landing Page

## Layout (Mobile → Desktop)

```
┌─────────────────────────────┐
│         NAVBAR              │  ← Fixed top: Logo + [Perjalanan | Tips | Ringkasan]
├─────────────────────────────┤
│                             │
│         HERO                │  ← Full viewport
│   [Badge: Gunung Andong]    │     Background: mountain panorama
│   Heading: "Setiap Langkah  │     Center-aligned
│   Menuju Puncak..."         │
│   [Quote italic]            │
│   [Mulai Perjalanan]        │  ← CTA button
│                             │
│          SCROLL             │  ← Animated scroll indicator
├─────────────────────────────┤
│      STATS BAR              │  ← 4 items horizontal: 1.726m | 5 BC | ~2 Jam | Mudah
├─────────────────────────────┤
│   "Perjalanan"              │  ← Section label
│   Heading                   │
│                             │
│   ┌──── 1 ────┐             │  ← Timeline vertical: numbered dots left
│   │ BC1 Card  │             │     Card: title, badges, story, info
│   └───────────┘             │
│   ┌──── 2 ────┐             │
│   │ BC2 Card  │             │
│   └───────────┘             │
│   ...up to BC5 (puncak)     │
├─────────────────────────────┤
│   "Persiapan"               │
│   Heading                   │
│   ┌───┐ ┌───┐ ┌───┐        │  ← 3-col grid (desktop)
│   │ T1 │ │ T2 │ │ T3 │      │     2-col (tablet)
│   └───┘ └───┘ └───┘        │     1-col (mobile)
│   ┌───┐ ┌───┐ ┌───┐        │     6 tip cards
│   │ T4 │ │ T5 │ │ T6 │      │
│   └───┘ └───┘ └───┘        │
├─────────────────────────────┤
│   "Ringkasan"               │
│   Heading                   │
│   ┌─────────────────────┐   │  ← Responsive table
│   │ Pos │ Nama │ Tinggi │   │     BC1 through BC5
│   │ BC1 │ Desa  │ 560m  │   │
│   │ ... │ ...   │ ...   │   │
│   └─────────────────────┘   │
├─────────────────────────────┤
│   "Peta Jalur"              │
│   Heading                   │
│   ┌─────────────────────┐   │  ← Static map image 16:9
│   │    MAP PLACEHOLDER   │   │     Gradient overlay bottom
│   └─────────────────────┘   │
├─────────────────────────────┤
│         CTA                 │  ← Full-width gradient bg
│   "Siap Menapaki Andong?"   │     Center-aligned
│   [Quote]                   │
│   [Lihat Jalur] [Tips]      │  ← Two buttons
├─────────────────────────────┤
│         FOOTER              │  ← Dark bg, centered text
│   Credit + disclaimer       │
└─────────────────────────────┘
```

## Mobile Behavior (< 640px)
- Nav links hidden (only logo visible)
- Timeline: narrower left padding
- Tips: single column
- Buttons: stacked vertically

## Desktop Behavior (> 1024px)
- Full nav visible
- Timeline: wider cards
- Tips: 3-column grid
- Buttons: side by side

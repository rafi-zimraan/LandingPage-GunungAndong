# Design Document — Gunung Andong Landing Page

## 1. Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Hijau Hutan (Primary) | `#2D6A4F` | Headings, brand, primary buttons |
| Hijau Muda | `#52B788` | Badges, hover states, accents |
| Cokelat Tanah (Secondary) | `#8B5E3C` | Puncak markers, secondary accents |
| Krem Langit (Neutral-100) | `#F4F1E8` | Page background |
| Putih | `#FFFFFF` | Card backgrounds |
| Teks | `#2C2C2C` | Body text |
| Abu (Neutral-500) | `#6B6B6B` | Muted text, metadata |

### Typography
- **Serif (Georgia):** Body text, quotes — nuansa alam, hangat
- **Sans-serif (Inter):** UI labels, badges, metadata — clean, modern
- Scale: `clamp()` for responsive sizing

### Spacing
- Section padding: `py-16 md:py-20` (4rem-5rem)
- Card padding: `p-6 md:p-8`
- Container max-width: default Nuxt UI (80rem)

### Border Radius
- Cards: `rounded-2xl` (16px)
- Badges: `rounded-full` (pill)
- Buttons: `rounded-full` (pill)

## 2. Component States
| Component | Hover | Focus |
|-----------|-------|-------|
| UButton | `-translate-y-0.5` + darker bg | `outline-primary/25` |
| UCard | `-translate-y-1` + stronger shadow | — |
| Nav link | Opacity 100% | — |
| Timeline dot | Static | — |

## 3. Animations
- **Scroll reveal:** `IntersectionObserver` → `opacity 0→1` + `translateY(24px→0)` over 0.6s
- **Nav link hover:** `opacity 0.85→1` over 0.2s
- **Card hover:** `translateY(-4px)` + shadow increase over 0.2s

## 4. Responsive Breakpoints
| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 640px | Single column, hidden nav links |
| Tablet | 640-1024px | 2-col grid for tips |
| Desktop | > 1024px | Full layout, 3-col grid for tips |

## 5. Mood Board
- Nature: warm earthy tones
- Texture: gradients mimicking sky-to-ground transitions
- Imagery: mountain landscapes with morning light

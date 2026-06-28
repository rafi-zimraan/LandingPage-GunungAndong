# Security Document — Gunung Andong Landing Page

## 1. Overview
Static landing page with no backend, no database, no user input. Security surface area is minimal.

## 2. Risk Assessment
| Risk | Severity | Mitigation |
|------|----------|------------|
| XSS via external images | Low | All images from Unsplash (trusted CDN) |
| Dependency vulnerabilities | Low | `npm audit` regularly |
| DNS/Cloudflare misconfig | Low | Follow Cloudflare best practices |
| Content injection | None | Static content only |

## 3. Best Practices
- All assets loaded over HTTPS
- Nuxt auto-escapes template output (no raw HTML)
- External URLs: only images.unsplash.com
- No form inputs or user data collection
- No cookies or localStorage used
- CSP headers via Cloudflare

## 4. Dependency Management
- Run `npm audit` before deployment
- Keep Nuxt + Nuxt UI updated to latest minor
- Use lockfile (package-lock.json) for reproducible builds

## 5. Deployment (Cloudflare)
- Auto-HTTPS enabled by default
- DDoS protection included
- WAF rules: block known malicious IPs
- Rate limiting if needed (not required for static site)
- Zero Trust access not needed (public site)

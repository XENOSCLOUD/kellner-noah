# Project: Noah Kellner – Personal Website
## Purpose
Professionelle, moderne Personal Website für Noah Kellner (Solutions / Partner Engineer).  
Enthält:
- Strukturierte Vorstellung & CV-ähnlichen Bereich
- Thought Leadership Blog via Headless CMS
- Showcases / Projekte (POCs, AI-Prototypen, etc.)
- Kontaktformular (DSGVO-konform)
- Clean UX / Conversion-optimiert

## Framework & Tooling
- [x] **Next.js v15 (App Router)** – mit `src/` Struktur
- [x] **Tailwind CSS v4** – modern, performant, utility-first
- [x] **shadcn/ui** – für hochwertige, konsistente UI-Komponenten
- [x] **Headless CMS** – z. B. [Contentlayer](https://www.contentlayer.dev/) oder [Payload CMS](https://payloadcms.com) (Self-hosted möglich)
- [x] Deployment mit **Vercel** oder Docker für Self-Hosting

---

## Directory Layout (required!)
/src
    /app
        /blog
        /projects
        /about
        /contact
        /layout.tsx
        /page.tsx
    /components
        /ui (for custom shadcn components)
        /layout
        /blog
        /resume
        /project-card.tsx
    /lib
        cms.ts (contentlayer or CMS connector)
    /styles
        globals.css
    /data
        projects.json
    resume.ts
    /public
        /images

---

## Hero Section – Rotating Identity Titles (IMPORTANT!)

In the homepage Hero Section, implement a dynamic title rotation (every 2.5–3s) to express Noah's multi-faceted expertise.

### Animation Goals:
- Smooth fade-in/fade-out or vertical slide (e.g., Framer Motion, Tailwind animate)
- Cycle through **4–6 well-crafted identity phrases**, not just job titles
- The rotation should **enhance credibility**, not look like indecision

### Sample titles/phrases (EN):
- I engineer scalable solutions.
- I bridge IT and Business.
- I lead teams through change.
- I automate what holds you back.
- I’m your next tech partner.

### Sample titles/phrases (DE):
- Ich entwickle skalierbare Lösungen.
- Ich verbinde IT & Business.
- Ich automatisiere das, was bremst.
- Ich bringe Innovation in die Umsetzung.
- Ich bin Ihr nächster Technologiepartner.

### UI/UX Notes:
- Only one phrase shown at a time
- Do not autoplay too fast (2–3s delay is ideal)
- Typing animation or slide-up preferred
- Should work responsively across screen sizes
- Use large font size (e.g., `text-4xl md:text-6xl`) with soft styling
- Place animation below intro headline: “Hi, I’m Noah Kellner.”

YOU MUST:
- Avoid generic titles like "Account Manager" or "Head of IT"
- Ensure visual consistency with the site’s tone: modern, clear, confident
- Focus on *impact-driven language*, not pure role names

---

## Bash Commands
- `pnpm dev` – Lokale Entwicklung
- `pnpm build` – Produktionsbuild
- `pnpm lint` – Linting
- `pnpm format` – Prettier run
- `pnpm typecheck` – TypeScript-Check
- `pnpm cms:pull` – Inhalte vom Headless CMS abrufen (wenn CMS genutzt)

---

## Style Guidelines
- Verwende **TypeScript**
- Imports immer **destructured** (z. B. `import { Button } from "@/components/ui/button"`)
- Max. 1 Komponente pro Datei, benannt wie Datei (z. B. `ResumeSection.tsx`)
- Keine `any`-Typen
- Nutze `zod` zur Validierung von CMS-Inhalten

---

## Blog / CMS Integration
Claude soll automatisch:
- Markdown-basierte Blogposts integrieren via `Contentlayer`
- Bei Payload CMS: Admin-UI, API-Endpunkte und Auth via OAuth/Email
- CMS-Inhalte **clientseitig als props holen**, optional SSG

---

## Workflow & Commit Etiquette
- **Branching:** feature/..., fix/..., style/..., chore/...
- **Commits:** Conventional Commits (`feat:`, `fix:`, `chore:` etc.)
- **Deploy:** Vercel preview deploy bei jedem PR

---

## Dev Environment Setup
- Node v20+
- pnpm als Paketmanager
- IDE: VSCode mit Tailwind, ESLint, Prettier, GitLens Plugins
- Optional: `CLAUDE.local.md` mit Claude-spezifischen Kommandos/Ergänzungen

---

## Claude-Spezifisches Verhalten
Claude soll:
- **automatisch generierte Komponenten modular halten**
- **alle UI-Elemente mit shadcn/ui aufbauen**
- **Layouts mit Tailwind CSS v4 strukturieren**
- Blog-Posts und Projekte dynamisch aus CMS/Markdown-Dateien laden
- **Responsives Design (Mobile First)** berücksichtigen
- **Keine unnötigen Abhängigkeiten** verwenden
- Keine veraltete Next.js Pages API nutzen (App Router only!)
- Icons: `lucide-react`

---

## Wichtige Hinweise (Claude-Spezifisch)
- DU MUSST alle generierten Komponenten korrekt **typisieren** und modularisieren.
- DU SOLLST **keinen Code inline in Pages-Dateien** platzieren – nutze Komponenten!
- DU DARFST keine CommonJS-Imports verwenden – nur ESM!
- Schreib sauberen, wartbaren Code – **keine Spaghetti-Strukturen oder unklare Props!**
- Nutze `framer-motion` nur gezielt (z. B. für Page-Transitions)

---

## Optional: Marketing Features
- Blog–SEO automatisch via Open Graph / JSON-LD / Head-Tags
- Dark Mode über Tailwind + `next-themes`
- DSGVO-konformes Cookie-Banner via `next-cookie-consent`
- Kontaktformular mit spamgeschütztem Backend (Rate Limiting + Regex)

---

## TODO / Nice to have
- RSS Feed für Blog
- Sitemap automatisch erzeugen
- Google Analytics 4 oder Fathom einbinden (opt-in)
- PWA / Offline Mode

---
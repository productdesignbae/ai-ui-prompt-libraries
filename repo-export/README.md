# ✦ AI UI Prompts Library

**180 battle-tested AI prompts for designing and building beautiful user interfaces — 18 prompts × 10 stunning design themes.**

> *Copy the prompt. Paste into Claude, GPT, or Gemini. Ship faster.*

---

## What is this?

Most AI prompt collections are generic. This one isn't.

Every prompt in this library is purpose-built for **UI/UX designers and frontend developers** who use AI tools daily. Instead of vague instructions like *"help me design a button"*, you'll find surgical, opinionated prompts like:

- **"Generate a full UI color system from this hex: [HEX]. Include primary, secondary, neutrals, semantic states, and light/dark mode tokens with usage rules."**
- **"Audit this UI component for accessibility, responsiveness, and visual hierarchy. List issues by severity with a specific fix for each."**
- **"Write a micro-interaction spec for [button / modal / toast]. Include trigger, animation curve (cubic-bezier), duration in ms, and accessible fallback."**

Each prompt is tagged as **Design**, **Dev**, or **Both** — so you always know exactly who it's for and when to use it.

---

## What's Inside

### 18 Core Prompts (in every theme)

| # | Prompt | Category |
|---|--------|----------|
| 01 | Component Audit | Both |
| 02 | Color System from Brand | Design |
| 03 | Responsive Layout Scaffold | Dev |
| 04 | Micro-interaction Spec | Design |
| 05 | Figma to Tailwind | Dev |
| 06 | Design Critique | Design |
| 07 | Component Props API | Dev |
| 08 | Error State Copy | Both |
| 09 | Dark Mode Token Map | Dev |
| 10 | Onboarding Flow Outline | Design |
| 11 | Icon Set Brief | Design |
| 12 | Storybook Scaffold | Dev |
| 13 | Animation Timing System | Both |
| 14 | Skeleton Loader Markup | Dev |
| 15 | A/B Test Variant Ideas | Both |
| 16 | Spacing Scale | Design |
| 17 | Typography Ramp | Design |
| 18 | Accessibility Audit | Both |

### 10 Design Themes

Each theme is a fully interactive React component with searchable prompts, category filters, and one-click copy. Each showcases the same 18 prompts in a completely different visual design system:

| # | Theme Name | Aesthetic |
|---|-----------|-----------|
| 1 | **Shiuli's Dark Vision** | Apple Vision Pro — midnight aurora glass |
| 2 | **Shiuli's Doc Drop** | Notion editorial database |
| 3 | **Shiuli's Ink Mode** | Figma canvas with floating cards |
| 4 | **Shiuli's Moon Era** | Cosmic glass — paginated studio cards |
| 5 | **Shiuli's Sage Edit** | Coastal sage quiet luxury editorial |
| 6 | **Shiuli's Dark Arc** | Discord dark server layout |
| 7 | **Shiuli's Brain Orbit** | NeuroAstro orb + scrollable list |
| 8 | **Shiuli's Last Call** | Drink bar bento grid |
| 9 | **Shiuli's Smart Pad** | Smart home dashboard rooms |
| 10 | **Shiuli's Olive Drop** | Scattered editorial cocktail cards |

---

## Quick Start

### Option 1: Just use the prompts

Browse [`prompts.json`](./prompts.json) — copy and paste any prompt directly into your AI tool of choice (Claude, GPT-4, Gemini, etc.).

### Option 2: Run the interactive library locally

```bash
# Clone the repo
git clone https://github.com/productdesignbae/ai-ui-prompts-library.git
cd ai-ui-prompts-library

# Install dependencies (uses pnpm)
pnpm install

# Start the mockup preview server
pnpm --filter @workspace/mockup-sandbox run dev
```

Then open `http://localhost:8081/__mockup` and navigate to any theme:

```
/__mockup/preview/ui-prompts-library/AppleGlass
/__mockup/preview/ui-prompts-library/AlohaCoastal
/__mockup/preview/ui-prompts-library/SamuraiCanvas
/__mockup/preview/ui-prompts-library/MoonishCosmic
/__mockup/preview/ui-prompts-library/DiscordStyle
/__mockup/preview/ui-prompts-library/LinearStyle
/__mockup/preview/ui-prompts-library/NoalDrinkBar
/__mockup/preview/ui-prompts-library/SmartHomeDash
/__mockup/preview/ui-prompts-library/CocktailEditorial
/__mockup/preview/ui-prompts-library/NotionOpenCode
```

### Option 3: Use `prompts.json` in your own app

```js
import prompts from './prompts.json';

// Filter by category
const designPrompts = prompts.filter(p => p.type === 'Design');
const devPrompts    = prompts.filter(p => p.type === 'Dev');
const bothPrompts   = prompts.filter(p => p.type === 'Both');

// Get a prompt by title
const audit = prompts.find(p => p.title === 'Component Audit');
console.log(audit.prompt); // Full prompt text ready to copy
```

---

## Prompt Format

Every prompt in `prompts.json` follows this structure:

```json
{
  "id": 1,
  "title": "Component Audit",
  "type": "Both",
  "tags": ["a11y", "review"],
  "description": "Short description of what this prompt does.",
  "prompt": "Full, copy-ready prompt text. Audit this UI component for accessibility..."
}
```

---

## Tech Stack

The interactive themes are built with:

- **React 18** + **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Vite** (blazing fast dev server)
- **Lucide React** (icons)
- **pnpm workspaces** (monorepo)

No backend. No database. Zero dependencies at runtime — just React components.

---

## Contributing

Found a prompt that belongs here? Have a design system you'd love to see?

1. Fork the repo
2. Add your prompt to `prompts.json` following the format above
3. (Optional) build a new theme component in `artifacts/mockup-sandbox/src/components/mockups/ui-prompts-library/`
4. Open a PR with a clear description of what you added

All prompts must be:
- Specific and actionable (not generic)
- Tagged with the correct category (Design / Dev / Both)
- Safe for professional use

---

## Why "Shiuli's" themes?

Each design theme is named after Shiuli — the creator's way of putting a personal stamp on this library. *Shiuli* (শিউলি) is a night-blooming flower from Bengal, known for falling at dawn. Feels right for a library built late at night to ship beautiful things faster.

---

## License

MIT — free to use, fork, modify, and share. Attribution appreciated but not required.

---

<div align="center">

**Built by [@productdesignbae](https://github.com/productdesignbae)**

*If this saved you time, a ⭐ on GitHub means a lot.*

</div>

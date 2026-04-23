# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `pnpm` as the package manager (not npm or yarn).

| Command | Action |
| --- | --- |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Type-check (`astro check`) then build to `./dist/` |
| `pnpm preview` | Preview the production build locally |

## Architecture

This is an Astro 5 blog with SSR enabled, deployed to Vercel via `@astrojs/vercel`.

**Rendering mode:** `output: 'server'` (full SSR — no static pre-rendering by default).

**Styling:** Tailwind CSS v4, loaded as a Vite plugin (`@tailwindcss/vite`). The global entry point is `src/styles/global.css` which contains only `@import "tailwindcss"`. Font is Geist Sans via `@fontsource/geist-sans`, applied in `MainLayout.astro`.

**Content layer:** Blog posts are Markdown files in `src/blog/`. They are loaded by Astro's content collections using the glob loader (`src/content.config.ts`). Required frontmatter fields per post: `title`, `seoTitle`, `seoDescription`, `slug`, `datePublished` (Date), `tags` (string array).

**Page/layout hierarchy:**
- `src/layouts/MainLayout.astro` — root shell: imports fonts, global CSS, and renders `Head.astro` + `<slot />`
- `src/components/Head.astro` — `<head>` tag with meta, title prop, and Astro's `<ClientRouter />` (view transitions)
- `src/components/Nav.astro` — site navigation bar
- `src/pages/index.astro` — homepage
- `src/posts/[...slug].astro` — dynamic blog post route (currently a stub)

**Formatting:** Prettier with `prettier-plugin-astro`; `.astro` files use the `astro` parser.

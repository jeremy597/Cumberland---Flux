# Official MDX setup (no Contentlayer)

This pack:
- Enables MDX via **@next/mdx** (official plugin).
- Adds **/about**, **/mission**, **/policies** as `.mdx` pages under the App Router.
- Provides `app/mdx-components.tsx` so markdown elements use your tokenized Tailwind typography.

## Install deps

```bash
npm i @next/mdx @mdx-js/react
npm i -D remark-gfm rehype-slug rehype-autolink-headings
```

## Usage

- Put MDX pages under `app/**/page.mdx`.
- Component mapping lives in `app/mdx-components.tsx` and is auto-applied.
- Example event write-up: `app/events/writeups/coffee-brewing/page.mdx`.
- Structured lists (events, partners) are in `content/*.json` and consumed by TS pages (see `app/events/page.tsx`).

## Notes

- If you already have a `next.config.*`, merge it with the provided `next.config.mjs` so MDX is enabled.
- Keep your existing header/footer/layout; this pack only changes page bodies.

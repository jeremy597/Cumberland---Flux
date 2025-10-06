# MDX + Contentlayer integration (Cumberland Flux)

This pack adds:
- Contentlayer + MDX for simple pages like About, Mission, Policies, and event write‑ups.
- A typed MDX renderer that respects your current tokens/typography.
- An `/about` route wired to render from `content/pages/about.mdx`.

## Install deps

```bash
npm i contentlayer next-contentlayer
npm i -D remark-gfm rehype-slug rehype-autolink-headings
```

## Next config

We've included a `next.config.mjs` already wrapped with `withContentlayer`. If you have an existing `next.config` with custom settings, merge them into this file.

## Dev

```bash
npm run dev
```

On first run, Contentlayer will generate `.contentlayer/` and virtual types at `contentlayer/generated`.

## Add more pages

Create MDX files under `content/pages/*.mdx`. Each one gets a `slug` matching its path. Example:

```
content/pages/mission.mdx   ->  /mission
content/pages/policies.mdx  ->  /policies
```

Use frontmatter:

```mdx
---
title: "Mission"
description: "Why we exist"
order: 2
---
# Mission
...
```

## Rendering elsewhere

Use the same pattern as `/about`:
```ts
import { allPages } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Mdx, mdxComponents } from "@/components/Mdx";
```

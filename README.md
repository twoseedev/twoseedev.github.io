# twoseedev

Portfolio site for twoseedev — making the invisible visible. Built with [Astro](https://astro.build), deployed to [twoseedev.github.io](https://twoseedev.github.io) on every push to `main`.

## Run it locally

```sh
npm install
npm run dev
```

Then open the URL it prints.

## Add a Lab study

Create a Markdown file in `src/content/lab/`, e.g. `src/content/lab/fridge-hum.md`:

```md
---
title: Fridge hum
date: 2026-10-12
signal: One line on the invisible thing you made visible.
tools: [touchdesigner]        # touchdesigner, unreal, other
inputs: [sound]               # sound, motion, data, light
video: 123456789              # Vimeo ID or URL, or a direct .mp4 URL
poster: /media/fridge-hum.jpg # optional still, stored in public/media/
---

A few lines: input, process, what you noticed.
```

## Add a Selected project

Same idea in `src/content/work/` — copy `example-project.md`. Set `draft: true` while you're working on it: drafts show up in `npm run dev` but stay hidden on the live site. Use `order` to control which project appears first.

## Videos

Keep video files out of the repo. Upload to Vimeo (use the video ID) or a host that gives you a direct `.mp4` link. Short muted loops (5–15s) work best.

## Edit site-wide text

- Name, statement, email, social links, services, process, and "built for" list: `src/lib/site.ts`
- Contact form: set `formEndpoint` in `src/lib/site.ts` (e.g. a free [Formspree](https://formspree.io) form) to receive inquiries directly; otherwise it opens the visitor's email app
- Studio page (mission, principles, tools): `src/pages/studio.astro`
- Services page (engagement types): `src/pages/services.astro`
- Hero text and interaction: `src/components/Hero.astro`
- Colors and fonts: `src/styles/global.css`

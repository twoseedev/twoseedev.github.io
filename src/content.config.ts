import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { INPUTS, TOOLS } from './lib/taxonomy';

const media = {
  // Vimeo ID / Vimeo URL, or a direct .mp4 URL (Mux, Cloudflare Stream, etc.)
  video: z.string().optional(),
  // Still image URL or a path inside /public, e.g. "/media/room-tone.jpg"
  poster: z.string().optional(),
};

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    client: z.string().optional(),
    scope: z.array(z.string()).default([]),
    tools: z.array(z.enum(TOOLS)),
    inputs: z.array(z.enum(INPUTS)).default([]),
    ...media,
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const lab = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/lab' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    signal: z.string(),
    tools: z.array(z.enum(TOOLS)),
    inputs: z.array(z.enum(INPUTS)).default([]),
    ...media,
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, lab };

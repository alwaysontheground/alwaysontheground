import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workTypes = z.enum([
  'documentary',
  'podcast',
  'photography',
  'reportage',
  'commissioned',
]);

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    types: z.array(workTypes).min(1),
    client: z.string().optional(),
    excerpt: z.string(),
    hero: z.string(),
    featured: z.boolean().default(false),
    dateline: z.string().optional(),
    publishedAt: z.coerce.date(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    hero: z.string().optional(),
  }),
});

export const collections = { work, journal };

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
    homepage: z.boolean().default(false),
    homepageImage: z.string().optional(),
    homepageOrder: z.number().optional(),
    homepageFormat: z.enum(['narrow', 'wide']).default('narrow'),
    homepageImageAspect: z.string().default('16/11'),
  }),
});

const fieldNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/field-notes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.coerce.date(),
    location: z.string(),
    excerpt: z.string(),
    hero: z.string().optional(),
    audio: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { work, fieldNotes };

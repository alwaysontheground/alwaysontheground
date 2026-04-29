import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workTypes = z.enum([
  'documentary',
  'podcast',
  'photography',
  'reportage',
  'commissioned',
]);

const disciplines = z.enum([
  'reportage',
  'podcast',
  'documentary',
  'photography',
]);

const photographyGenres = z.enum([
  'portrait',
  'documentary',
  'street',
  'commissioned',
]);

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    discipline: disciplines,
    photographyGenre: photographyGenres.optional(),
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
    videoEmbed: z.string().optional(),
    externalLink: z.string().optional(),
    externalLinkLabel: z.string().optional(),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          aspect: z.string().default('4/5'),
          caption: z.string().optional(),
        })
      )
      .optional(),
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

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    genre: photographyGenres,
    image: z.string(),
    aspect: z.string().default('4/5'),
    publishedAt: z.coerce.date(),
    location: z.string().optional(),
    caption: z.string().optional(),
  }),
});

export const collections = { work, fieldNotes, photos };

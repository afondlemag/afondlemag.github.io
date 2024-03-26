import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const heroCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    image: z.string(),
  }),
});

const testimonialCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    priority: z.number().optional(),
  }),
});

const samplesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    text: z.string(),
    priority: z.number().optional(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    priority: z.number().optional(),
  }),
});

const principlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    priority: z.number().optional(),
  }),
});

export const collections = {
  pages: pageCollection,
  testimonials: testimonialCollection,
  team: teamCollection,
  principles: principlesCollection,
  hero: heroCollection,
  samples: samplesCollection,
};

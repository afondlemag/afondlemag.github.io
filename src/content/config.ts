import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const testimonialCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    url: z.string().optional(),
    priority: z.number().optional(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    priority: z.number().optional(),
  }),
});

export const collections = {
  pages: pageCollection,
  testimonials: testimonialCollection,
  team: teamCollection,
};

import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const heroCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      image: image(),
      altImage: z.string(),
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      altImage: z.string(),
      priority: z.number().optional(),
    }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      priority: z.number().optional(),
    }),
});

const principlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    priority: z.number().optional(),
  }),
});

const faqCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    priority: z.number().optional(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: image(),
      altImage: z.string(),
      text: z.string(),
    }),
});

export const collections = {
  pages: pageCollection,
  testimonials: testimonialCollection,
  team: teamCollection,
  principles: principlesCollection,
  hero: heroCollection,
  samples: samplesCollection,
  faq: faqCollection,
  posts: postsCollection,
};

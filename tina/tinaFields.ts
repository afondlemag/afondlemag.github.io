import type { TinaField } from "tinacms";

export const fields = {
  title: {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  body: {
    type: "rich-text",
    name: "body",
    isBody: true,
  },
  text: {
    type: "string",
    name: "text",
    ui: {
      component: "textarea",
    },
  },
  priority: {
    type: "number",
    name: "priority",
    label: "priorité",
  },
  image: {
    type: "image",
    name: "image",
    label: "Image",
    required: true,
  },
  url: {
    type: "string",
    name: "url",
    label: "url",
    required: true,
  },
} satisfies Record<string, TinaField>;

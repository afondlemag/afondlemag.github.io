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
    required: true,
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
  altImage: {
    type: "string",
    name: "altImage",
    label: "Texte alternatif",
    required: true,
  },
  url: {
    type: "string",
    name: "url",
    label: "url",
    required: true,
  },
  date: {
    type: "datetime",
    name: "date",
    label: "date",
    required: true,
  },
} satisfies Record<string, TinaField>;

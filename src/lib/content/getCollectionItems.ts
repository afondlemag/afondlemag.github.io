import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import {
  getCollection,
  type ContentEntryMap,
  type InferEntrySchema,
} from "astro:content";

export const getItemsFromCollection = async <T extends keyof ContentEntryMap>(
  key: T
) => {
  const collection = (await getCollection(key)).sort((a, b) => {
    if ("priority" in a.data || "priority" in b.data) {
      //@ts-ignore
      return (b.data.priority ?? 0) - (a.data.priority ?? 0);
    }
    return 0;
  });
  return await Promise.all(
    collection.map(async (el) => ({
      ...el.data,
      Content: (await el.render()).Content,
    })) as unknown as (InferEntrySchema<T> & {
      Content: AstroComponentFactory;
    })[]
  );
};

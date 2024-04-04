import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import { replaceImagesPathes } from "./replaceImagesPathes.js";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap()],
  site: "https://afondlemag.github.io",
  markdown: {
    remarkPlugins: [replaceImagesPathes],
  },
});

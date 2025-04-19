// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Import loader(s)
import { glob } from 'astro/loaders';

const posts = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.md", base: "./src/content/html" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        // index: z.number(),
        description: z.string()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    posts
  };
// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Import loader(s)
import { glob } from 'astro/loaders';

const notesHtml = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/html" }),
    schema: z.object({
        title: z.string(),
    })
});

const notesCss = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/css" }),
    schema: z.object({
        title: z.string(),
    })
});

const notesJs = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/js" }),
    schema: z.object({
        title: z.string(),
    })
});

const notesAstro = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/astro" }),
    schema: z.object({
        title: z.string(),
    })
});

const notesGithub = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/github" }),
    schema: z.object({
        title: z.string(),
    })
});

const notesUnspecified = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/unspecified" }),
    schema: z.object({
        title: z.string(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    notesHtml, notesCss, notesJs, notesAstro, notesGithub, notesUnspecified
};
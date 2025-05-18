import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const html = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/html" }),
    schema: z.object({
        title: z.string(),
    })
});

const css = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/css" }),
    schema: z.object({
        title: z.string(),
    })
});

const js = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/js" }),
    schema: z.object({
        title: z.string(),
    })
});

const astro = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/astro" }),
    schema: z.object({
        title: z.string(),
    })
});

const github = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/github" }),
    schema: z.object({
        title: z.string(),
    })
});

const other = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/other" }),
    schema: z.object({
        title: z.string(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    html, css, js, astro, github, other
};
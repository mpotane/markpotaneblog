import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: ["blog/*.md"], base: 'src/blog' }),
    schema: z.object({
        title: z.string(),
        seoTitle: z.string(),
        seoDescription: z.string(),
        slug: z.string(),
        datePublished: z.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog };
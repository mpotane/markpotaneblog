import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

export const BlogPostSchema = z.object({
    title: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    slug: z.string(),
    datePublished: z.coerce.date(),
    tags: z.array(z.string()),
});

export type BlogPostData = z.infer<typeof BlogPostSchema>;

const blog = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/blog" }),
    schema: BlogPostSchema,
});

export const collections = { blog };
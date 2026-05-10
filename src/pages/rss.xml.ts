import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  const sorted = posts.sort(
    (a, b) =>
      new Date(b.data.datePublished).valueOf() -
      new Date(a.data.datePublished).valueOf()
  );

  return rss({
    title: "Mark Potane's Blog",
    description: "Articles on software engineering and tech.",
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.data.seoDescription,
      link: `/blog/post/${post.data.slug}/`,
    })),
  });
}

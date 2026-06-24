import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const site = context.site!;
  const posts = await getCollection("blog");

  const staticUrls = ["", "/blog"];
  const postUrls = posts.map((post) => `/blog/post/${post.data.slug}`);

  const urls = [...staticUrls, ...postUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${new URL(url, site).href}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}

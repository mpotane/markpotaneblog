import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CvpBhDpZ.mjs';
import { g as getCollection, $ as $$MainLayout, a as $$Nav } from '../chunks/Nav_aPxsQnA8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.datePublished).getTime() - new Date(a.data.datePublished).getTime()
  );
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog \u2014 Mark Edzel Potane", "description": "Articles about web development, digital marketing, and technology." }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, {})}${maybeRenderHead()}<main class="container mx-auto max-w-2xl px-4 py-10"><h1 class="text-2xl font-bold mb-8">Blog</h1><div class="flex flex-col gap-8">${sortedPosts.map((post) => renderTemplate`<article class="border-b border-gray-100 pb-8 last:border-0"><a${addAttribute(`/blog/post/${post.data.slug}`, "href")} class="block group"><h2 class="text-lg font-semibold group-hover:underline mb-2">${post.data.title}</h2></a><p class="text-sm text-gray-400 mb-2">${new Date(post.data.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</p><p class="text-sm text-gray-600 mb-3">${post.data.seoDescription}</p><div class="flex flex-wrap gap-2">${post.data.tags.map((tag) => renderTemplate`<span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">${tag}</span>`)}</div></article>`)}</div></main><footer class="border-t border-gray-100 mt-10"><div class="container mx-auto max-w-2xl px-4 py-6 text-center text-xs text-gray-400">
© Copyright 2026 @mpotane. All rights reserved.
</div></footer>` })}</html>`;
}, "/home/p0tchy/Documents/markpotaneblog/src/pages/blog/index.astro", void 0);

const $$file = "/home/p0tchy/Documents/markpotaneblog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

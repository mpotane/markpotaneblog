import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CvpBhDpZ.mjs';
import { g as getCollection, r as renderEntry, $ as $$MainLayout, a as $$Nav } from '../../../chunks/Nav_aPxsQnA8.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.data.slug === slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": post.data.seoTitle, "description": post.data.seoDescription }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, {})}${maybeRenderHead()}<main class="container mx-auto max-w-2xl px-4 py-10"><article><header class="mb-8"><a href="/blog" class="text-sm text-gray-400 hover:underline mb-4 inline-block">← Back to Blog</a><h1 class="text-3xl font-bold mb-3">${post.data.title}</h1><div class="flex flex-wrap items-center gap-3 text-sm text-gray-400"><time>${new Date(post.data.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</time><span>·</span><div class="flex flex-wrap gap-2">${post.data.tags.map((tag) => renderTemplate`<span class="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">${tag}</span>`)}</div></div></header><div class="prose">${renderComponent($$result2, "Content", Content, {})}</div></article></main><footer class="border-t border-gray-100 mt-10"><div class="container mx-auto max-w-2xl px-4 py-6 text-center text-xs text-gray-400">
© Copyright 2026 @mpotane. All rights reserved.
</div></footer>` })}</html>`;
}, "/home/p0tchy/Documents/markpotaneblog/src/pages/blog/post/[...slug].astro", void 0);

const $$file = "/home/p0tchy/Documents/markpotaneblog/src/pages/blog/post/[...slug].astro";
const $$url = "/blog/post/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

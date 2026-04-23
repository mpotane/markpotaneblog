import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CvpBhDpZ.mjs';
import { g as getCollection, $ as $$MainLayout, a as $$Nav } from '../chunks/Nav_aPxsQnA8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const recentPosts = posts.sort(
    (a, b) => new Date(b.data.datePublished).getTime() - new Date(a.data.datePublished).getTime()
  ).slice(0, 3);
  const tools = ["Semrush", "Meta Ads", "GA4", "Google Ads", "Next.js", "React.js"];
  const projects = [
    {
      name: "PythonScriptPH",
      desc: "A collection of Python scripts to help you learn the language. \u{1F1F5}\u{1F1ED}",
      lang: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/mpotane/PythonScriptPH"
    },
    {
      name: "void-packettracer",
      desc: "Script for installing packettracer on void linux",
      lang: "Shell",
      stars: 0,
      forks: 0,
      url: "https://github.com/mpotane/void-packettracer"
    },
    {
      name: "markybot",
      desc: "Personal bot built using langchain and openai",
      lang: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/mpotane/markybot"
    }
  ];
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Mark Edzel Potane", "description": "A digital marketing specialist with a strong background in Web Development." }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Nav", $$Nav, {})}${maybeRenderHead()}<main class="container mx-auto max-w-2xl px-4 py-10 space-y-10"><!-- Profile --><section class="flex items-start gap-5"><div class="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg select-none">
MP
</div><div><h1 class="text-xl font-bold mb-1">Mark Edzel Potane</h1><p class="text-sm text-gray-500 mb-3">markpotanecc@gmail.com</p><p class="text-sm text-gray-700 mb-4 leading-relaxed">
A digital marketing specialist with a strong background in Web Development,
            helping businesses grow their online presence through data-driven strategies
            and modern web technologies.
</p><div class="flex gap-2"><a href="mailto:markpotanecc@gmail.com" class="px-4 py-1.5 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition-colors">Email</a><a href="tel:+639653865805" class="px-4 py-1.5 border border-gray-300 text-sm rounded hover:bg-gray-50 transition-colors">Call / Text</a></div></div></section><hr class="border-gray-200"><!-- Tools --><section id="about"><h2 class="text-sm font-semibold mb-4">🛠️ Tools</h2><div class="grid grid-cols-3 sm:grid-cols-6 gap-2">${tools.map((tool) => renderTemplate`<span class="text-xs text-center border border-gray-200 rounded px-2 py-2 text-gray-600">${tool}</span>`)}</div></section><hr class="border-gray-200"><!-- Socials --><section><h2 class="text-sm font-semibold mb-4">📣 Socials</h2><ul class="flex flex-col gap-2 text-sm"><li><a href="https://www.linkedin.com/in/mpotane/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:underline">LinkedIn →</a></li><li><a href="https://github.com/mpotane" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:underline">GitHub →</a></li><li><a href="/blog" class="text-gray-700 hover:underline">Blog →</a></li></ul></section><hr class="border-gray-200"><!-- Blog Posts --><section><h2 class="text-sm font-semibold mb-4">📝 Blog Posts</h2><ul class="flex flex-col gap-3">${recentPosts.map((post) => renderTemplate`<li><a${addAttribute(`/blog/post/${post.data.slug}`, "href")} class="text-sm text-gray-800 hover:underline">${post.data.title}</a></li>`)}</ul></section><hr class="border-gray-200"><!-- Projects --><section id="projects"><h2 class="text-sm font-semibold mb-4">📦 Projects</h2><div class="flex flex-col gap-3">${projects.map((project) => renderTemplate`<a${addAttribute(project.url, "href")} target="_blank" rel="noopener noreferrer" class="block border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"><p class="text-sm font-medium mb-1">${project.name}</p><p class="text-xs text-gray-500 mb-3">${project.desc}</p><div class="flex items-center gap-3 text-xs text-gray-400"><span>★ ${project.stars}</span><span>⑂ ${project.forks}</span><span class="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">${project.lang}</span></div></a>`)}</div></section></main><footer class="border-t border-gray-100 mt-10"><div class="container mx-auto max-w-2xl px-4 py-6 text-center text-xs text-gray-400">
© Copyright 2026 @mpotane. All rights reserved.
</div></footer>` })}</html>`;
}, "/home/p0tchy/Documents/markpotaneblog/src/pages/index.astro", void 0);

const $$file = "/home/p0tchy/Documents/markpotaneblog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

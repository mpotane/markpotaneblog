import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BJgNuCbD.mjs';
import { manifest } from './manifest_C5izk5HJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/post/_---slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.11.0_@types+node@24.0.13_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.2_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/post/[...slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "29d91103-1bea-4c12-a1f4-152ac6515d88",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

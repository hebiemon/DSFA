import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CsEi-W6l.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DqlZBJuh.mjs');
const _page1 = () => import('./chunks/index_DIfUaKVQ.mjs');
const _page2 = () => import('./chunks/index_DB4ZpdYZ.mjs');
const _page3 = () => import('./chunks/_.._Bnaf5eeI.mjs');
const _page4 = () => import('./chunks/_.._CWTOhe2E.mjs');
const _page5 = () => import('./chunks/index_DtTJlLjQ.mjs');
const _page6 = () => import('./chunks/_.._mgA64g66.mjs');
const _page7 = () => import('./chunks/robots_Csu41fUY.mjs');
const _page8 = () => import('./chunks/rss_CvnIcxiO.mjs');
const _page9 = () => import('./chunks/index_B9ZhxCr1.mjs');
const _page10 = () => import('./chunks/index_YCPjjkcK.mjs');
const _page11 = () => import('./chunks/index_DLvaPb7F.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/legal/[...slug].astro", _page4],
    ["src/pages/projects/index.astro", _page5],
    ["src/pages/projects/[...slug].astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/rss.xml.ts", _page8],
    ["src/pages/search/index.astro", _page9],
    ["src/pages/work/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "405223d2-3575-4ffe-a276-37d60f1424f6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

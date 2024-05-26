import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DXbSm9DQ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DQf3Sscv.mjs');
const _page1 = () => import('./chunks/index_DOaCNVpv.mjs');
const _page2 = () => import('./chunks/index_BGurIJIj.mjs');
const _page3 = () => import('./chunks/_.._D9aUlJhO.mjs');
const _page4 = () => import('./chunks/_.._BLhdRTWe.mjs');
const _page5 = () => import('./chunks/index_Il3jZO1t.mjs');
const _page6 = () => import('./chunks/_.._B0XHEn4Q.mjs');
const _page7 = () => import('./chunks/robots_Csu41fUY.mjs');
const _page8 = () => import('./chunks/rss_SMUpV7p5.mjs');
const _page9 = () => import('./chunks/index_CWVyi9Gs.mjs');
const _page10 = () => import('./chunks/index_Bl3RiedF.mjs');
const _page11 = () => import('./chunks/index_DcjwDrCe.mjs');
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
    "middlewareSecret": "20d30586-f977-4d7c-b013-c67a38994e2d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

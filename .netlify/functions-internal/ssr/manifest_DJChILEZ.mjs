import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_COriWUSW.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/legal/[...slug]","isIndex":false,"type":"page","pattern":"^\\/legal(?:\\/(.*?))?\\/?$","segments":[[{"content":"legal","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/legal/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/projects/[...slug]","isIndex":false,"type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BGfjo5mV.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fOzBosgT.js"}],"styles":[{"type":"external","src":"/_astro/index.B1W3TGEE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-sphere-demo.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/layouts/ArticleBottomLayout.astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/about/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/legal/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/legal/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/search/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/robots.txt.ts":"chunks/pages/robots_exJaEwiW.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_pj39e8jr.mjs","\u0000@astrojs-manifest":"manifest_DJChILEZ.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DQf3Sscv.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index_C3jVYTjt.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_BEbj2BvS.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._OBE0aNwi.mjs","\u0000@astro-page:src/pages/legal/[...slug]@_@astro":"chunks/_.._D6HYMazD.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_dmpheJGF.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._CYDhAYjm.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"chunks/robots_Csu41fUY.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_B018O0KA.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"chunks/index_DI4H-40L.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"chunks/index_OiOiwBE7.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DIwOBbg7.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/01-astro-sphere-file-structure/index.md?astroContentCollectionEntry=true":"chunks/index_DChTwuBb.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/02-astro-sphere-getting-started/index.md?astroContentCollectionEntry=true":"chunks/index_C2Yg4HFq.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md?astroContentCollectionEntry=true":"chunks/index_BUDQIpjh.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/04-astro-sphere-writing-markdown/index.md?astroContentCollectionEntry=true":"chunks/index_x4ZeWOgp.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/05-astro-sphere-writing-mdx/index.mdx?astroContentCollectionEntry=true":"chunks/index_BwpKEZwh.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/06-astro-sphere-social-links/index.md?astroContentCollectionEntry=true":"chunks/index_DAoPhrmf.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/ブログテスト/index.md?astroContentCollectionEntry=true":"chunks/index_DZPPh5QI.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/privacy.md?astroContentCollectionEntry=true":"chunks/privacy_Uo3IR-a1.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/terms.md?astroContentCollectionEntry=true":"chunks/terms_DliPxIiP.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-1/index.md?astroContentCollectionEntry=true":"chunks/index_J0FA_esr.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-2/index.md?astroContentCollectionEntry=true":"chunks/index_DoGfWF0j.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-3/index.md?astroContentCollectionEntry=true":"chunks/index_EEmj8uTF.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-4/index.md?astroContentCollectionEntry=true":"chunks/index_BkbrmRAX.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/apple.md?astroContentCollectionEntry=true":"chunks/apple_CLyONe2j.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/facebook.md?astroContentCollectionEntry=true":"chunks/facebook_COq4VQIm.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/google.md?astroContentCollectionEntry=true":"chunks/google_VFrwzbc1.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/mcdonalds.md?astroContentCollectionEntry=true":"chunks/mcdonalds_C5kbfJDU.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/01-astro-sphere-file-structure/index.md?astroPropagatedAssets":"chunks/index_CffKmys-.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/02-astro-sphere-getting-started/index.md?astroPropagatedAssets":"chunks/index_pRuFYIE2.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md?astroPropagatedAssets":"chunks/index_Ct1ZoJmn.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/04-astro-sphere-writing-markdown/index.md?astroPropagatedAssets":"chunks/index_CiZJHVPF.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/05-astro-sphere-writing-mdx/index.mdx?astroPropagatedAssets":"chunks/index_B0IFOQRu.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/06-astro-sphere-social-links/index.md?astroPropagatedAssets":"chunks/index_DE_wokKl.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/ブログテスト/index.md?astroPropagatedAssets":"chunks/index_CsyAlxaB.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/privacy.md?astroPropagatedAssets":"chunks/privacy_C6C0UM3r.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/terms.md?astroPropagatedAssets":"chunks/terms_Cn6M-S8R.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-1/index.md?astroPropagatedAssets":"chunks/index_jQRRqqzO.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-2/index.md?astroPropagatedAssets":"chunks/index_jFdTGTSw.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-3/index.md?astroPropagatedAssets":"chunks/index_JuGm41PC.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-4/index.md?astroPropagatedAssets":"chunks/index_BLMy2jiz.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/apple.md?astroPropagatedAssets":"chunks/apple_Czda_qwv.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/facebook.md?astroPropagatedAssets":"chunks/facebook_CZu7ojR4.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/google.md?astroPropagatedAssets":"chunks/google_DKpGtXtI.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/mcdonalds.md?astroPropagatedAssets":"chunks/mcdonalds_BnwlQ0Yx.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/01-astro-sphere-file-structure/index.md":"chunks/index_CsklhbkF.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/02-astro-sphere-getting-started/index.md":"chunks/index_B1SI90JD.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md":"chunks/index_R54lTVpQ.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/04-astro-sphere-writing-markdown/index.md":"chunks/index_Q8uPY5_U.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/05-astro-sphere-writing-mdx/index.mdx":"chunks/index_CtLgdrIH.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/06-astro-sphere-social-links/index.md":"chunks/index_9ft7AQt4.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/ブログテスト/index.md":"chunks/index_B5AfLLln.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/privacy.md":"chunks/privacy_DckqU3hY.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/legal/terms.md":"chunks/terms_V_PkJH5q.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-1/index.md":"chunks/index_CVfOvJ5s.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-2/index.md":"chunks/index_BqJw1S2_.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-3/index.md":"chunks/index_CFDLncfp.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/projects/project-4/index.md":"chunks/index_C5OfQ2Ko.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/apple.md":"chunks/apple_C5zI73R7.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/facebook.md":"chunks/facebook_D1Koube4.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/google.md":"chunks/google_pXu2ufVH.mjs","/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/mcdonalds.md":"chunks/mcdonalds_Dg9qlEEe.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.fOzBosgT.js","@components/Counter":"_astro/Counter.DhYhT-U0.js","@components/Blog":"_astro/Blog.QaC_-pYi.js","/astro/hoisted.js?q=1":"_astro/hoisted.BGfjo5mV.js","@astrojs/solid-js/client.js":"_astro/client.BfvbX4EV.js","@components/Search":"_astro/Search.CXROIKgc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/spongebob.dGmXfKPV.png","/_astro/index.B1W3TGEE.css","/brand.svg","/favicon.svg","/open-graph.jpg","/robots.txt","/social.svg","/stack.svg","/ui.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/js/animate.js","/js/bg.js","/js/scroll.js","/js/theme.js","/_astro/ArrowCard.E513neQL.js","/_astro/Blog.QaC_-pYi.js","/_astro/Counter.DhYhT-U0.js","/_astro/Search.CXROIKgc.js","/_astro/client.BfvbX4EV.js","/_astro/hoisted.BGfjo5mV.js","/_astro/hoisted.fOzBosgT.js","/_astro/web.CIE_19Vj.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };

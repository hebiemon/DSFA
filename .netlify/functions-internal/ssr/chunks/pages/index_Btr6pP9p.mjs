import { d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead, i as createAstro, j as addAttribute } from '../astro_COriWUSW.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$TopLayout, A as ABOUT, a as $$BottomLayout, b as $$PageLayout, f as formatDate, c as cn, B as BLOG, S as SEARCH, d as SOCIALS, e as SITE } from './__B4dXIqCf.mjs';
import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, For } from 'solid-js';
import 'clsx';
import Fuse from 'fuse.js';

const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const collection = await getCollection("work");
  collection.sort((a, b) => new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime());
  await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": ABOUT.TITLE, "description": ABOUT.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${ABOUT.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <p>同志社大学SF研究会は1970年創部のSF好きが集まるサークルです。月に1回くらいの頻度で読書会や映画の上映会を行っています。</p> <p>部室
        今出川: 新町学生会館316
        京田辺: 京田辺別館308
</p> <p><a href="https://twitter.com/DoshishaSFA">公式Xアカウント</a></p> <p><a href="https://www.d-live.info/club/culture/1163">Dlive(サークル情報)</a></p> <p><a href="https://twitter.com/DSFAdoshisha">予備Xアカウント</a></p>  ` })} ` })}`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/about/index.astro", void 0);

const $$file$5 = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/about/index.astro";
const $$url$5 = "/about";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

var _tmpl$$2 = ["<a", ' href="', '" class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"><div class="w-full group-hover:text-black group-hover:dark:text-white blend"><div class="flex flex-wrap items-center gap-2"><!--$-->', '<!--/--><div class="text-sm uppercase">', '</div></div><div class="font-semibold mt-3 text-black dark:text-white">', '</div><div class="text-sm line-clamp-2">', '</div><ul class="flex flex-wrap mt-2 gap-1">', '</ul></div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"><line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline></svg></a>'], _tmpl$2$2 = ["<div", ' class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">', "</div>"], _tmpl$3$2 = ["<li", ' class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">', "</li>"];
function ArrowCard({
  entry,
  pill
}) {
  return ssr(_tmpl$$2, ssrHydrationKey(), `/${escape(entry.collection, true)}/${escape(entry.slug, true)}`, pill && ssr(_tmpl$2$2, ssrHydrationKey(), entry.collection === "blog" ? "post" : "project"), escape(formatDate(entry.data.date)), escape(entry.data.title), escape(entry.data.summary), escape(entry.data.tags.map((tag) => (
    // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
    ssr(_tmpl$3$2, ssrHydrationKey(), escape(tag))
  ))));
}

var _tmpl$$1 = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">SHOWING <!--$-->', "<!--/--> OF <!--$-->", '<!--/--> POSTS</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2$1 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3$1 = ["<li", ">", "</li>"];
function Blog({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [posts, setPosts] = createSignal([]);
  createEffect(() => {
    setPosts(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent$1(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2$1, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(posts().length), escape(data.length), escape(posts().map((post) => ssr(_tmpl$3$1, ssrHydrationKey(), escape(createComponent$1(ArrowCard, {
    entry: post
  }))))));
}

const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${BLOG.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Blog", Blog, { "client:load": true, "tags": tags, "data": posts, "client:component-hydration": "load", "client:component-path": "@components/Blog", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/blog/index.astro", void 0);

const $$file$4 = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/blog/index.astro";
const $$url$4 = "/blog";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import { getCollection } from "astro:content"
import PageLayout from "@layouts/PageLayout.astro"
import TopLayout from "@layouts/TopLayout.astro"
import BottomLayout from "@layouts/BottomLayout.astro"
import Projects from "@components/Projects"
import { PROJECTS } from "@consts"

const projects = (await getCollection("projects"))
  .filter(project => !project.data.draft)
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())

const tags = [...new Set(projects.flatMap(project => project.data.tags))]
  .sort((a, b) => a.localeCompare(b))
---

<PageLayout title={PROJECTS.TITLE} description={PROJECTS.DESCRIPTION}>
  <TopLayout>
    <div class="animate page-heading">
      {PROJECTS.TITLE}
    </div>
  </TopLayout>
  <BottomLayout>
    <div class="animate">
      <Projects client:load tags={tags} data={projects} />
    </div>
  </BottomLayout>
</PageLayout> -->`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/projects/index.astro", void 0);

const $$file$3 = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/projects/index.astro";
const $$url$3 = "/projects";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var _tmpl$ = ["<div", ' class="flex flex-col"><div class="relative"><input name="search" type="text"', ' autocomplete="off" spellcheck="false" placeholder="What are you looking for?" class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"><svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current"><use href="', '"></use></svg></div><!--$-->', "<!--/--></div>"], _tmpl$2 = ["<div", ' class="mt-12"><div class="text-sm uppercase mb-2">Found <!--$-->', "<!--/--> results for <!--$-->", '<!--/--></div><ul class="flex flex-col gap-3">', "</ul></div>"], _tmpl$3 = ["<li", ">", "</li>"];
function Search({
  data
}) {
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal([]);
  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4
  });
  createEffect(() => {
    if (query().length < 2) {
      setResults([]);
    } else {
      setResults(fuse.search(query()).map((result) => result.item));
    }
  });
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("value", escape(query(), true), false), `/ui.svg#search`, query().length >= 2 && results().length >= 1 && ssr(_tmpl$2, ssrHydrationKey(), escape(results().length), `'${escape(query())}'`, escape(results().map((result) => ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent$1(ArrowCard, {
    entry: result,
    pill: true
  })))))));
}

const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft);
  const projects = (await getCollection("projects")).filter((post) => !post.data.draft);
  const data = [...posts, ...projects];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": SEARCH.TITLE, "description": SEARCH.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${SEARCH.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Search", Search, { "client:load": true, "data": data, "client:component-hydration": "load", "client:component-path": "@components/Search", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/search/index.astro", void 0);

const $$file$2 = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/search/index.astro";
const $$url$2 = "/search";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import { getCollection } from "astro:content"
import PageLayout from "@layouts/PageLayout.astro"
import TopLayout from "@layouts/TopLayout.astro"
import BottomLayout from "@layouts/BottomLayout.astro"
import { WORK } from "@consts"

const collection = await getCollection("work")

collection.sort((a, b) => new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime())

const work = await Promise.all(
  collection.map(async (item) => {
    const { Content } = await item.render()
    return { ...item, Content }
  })
)

function formatWorkDate(input: Date | string) {
  if (typeof input === "string") return input

  const month = input.toLocaleDateString("en-US", {
    month: "short",
  })

  const year = new Date(input).getFullYear()
  return \`\${month} \${year}\`
}
---

<PageLayout title={WORK.TITLE} description={WORK.DESCRIPTION}>
  <TopLayout>
    <div class="animate page-heading">
      {WORK.TITLE}
    </div>
  </TopLayout>
  <BottomLayout>
    <ul>
      { 
        work.map((entry) => (
          <li class="animate border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none">
            <div class="text-sm uppercase mb-4">
              {formatWorkDate(entry.data.dateStart)} - {formatWorkDate(entry.data.dateEnd)}
            </div>
            <div class="text-black dark:text-white font-semibold">
              {entry.data.company}
            </div>
            <div class="text-sm font-semibold">
              {entry.data.role}
            </div>
            <article class="prose dark:prose-invert">
              <entry.Content />
            </article>
          </li>
        ))
      }
    </ul>
  </BottomLayout>
</PageLayout> -->`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/work/index.astro", void 0);

const $$file$1 = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/work/index.astro";
const $$url$1 = "/work";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$TwinklingStars = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<svg id="twinkle-star" class="template" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full animate-twinkle"> <circle cx="74" cy="74" r="11" fill="white"></circle> <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect> <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect> <defs> <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.445" stop-color="white"></stop> <stop offset="0.58721" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.42" stop-color="white"></stop> <stop offset="0.555" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> </defs> </svg> <script>\n  // Generate a twinkle star and append it to the galaxy, remove it after animation.\n  function generateTwinkleStar() {\n    const twinkleStarTemplate = document.getElementById("twinkle-star")\n    if (!twinkleStarTemplate) { return; }\n    // Clone the twinkle star template and set its attributes.\n    const twinkleStar = twinkleStarTemplate.cloneNode(true);\n    twinkleStar.style.position = "absolute";\n    twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";\n    twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight/3)) + "px";\n    twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";\n    twinkleStar.style.height = twinkleStar.style.width;\n    twinkleStar.classList.add("twinkle");\n    document.getElementById("galaxy").appendChild(twinkleStar);\n\n    // Remove the twinkle star after the animation is completed.\n    setTimeout(() => {\n      twinkleStar.remove();\n    }, 2500);\n  }\n\n  setInterval(generateTwinkleStar, 5000);\n<\/script>'])), maybeRenderHead());
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/components/TwinklingStars.astro", void 0);

const $$MeteorShower = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="meteors"> <!-- rotations defined in base.css & tailwind.config.mjs --> <div class="shower ur"></div> <div class="shower dr"></div> <div class="shower dl"></div> <div class="shower ul"></div> </div> `;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/components/MeteorShower.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 5);
  (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="absolute inset-0 block dark:hidden"> <div id="particles1" class="fixed inset-0"></div> <div id="particles2" class="fixed inset-0"></div> <div id="particles3" class="fixed inset-0"></div> </div>  <div class="absolute inset-0 bg-black hidden dark:block"> <div id="stars1" class="fixed inset-0"></div> <div id="stars2" class="fixed inset-0"></div> <div id="stars3" class="fixed inset-0"></div> </div>  <div id="galaxy" class="fixed inset-0"> <div class="hidden dark:block"> ', " ", ` </div> </div> <script src="/js/bg.js"><\/script>  <section class="relative h-screen w-full"> <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden"> <div id="crescent" class="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"> <div id="planet" class="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"> <div id="blur" class="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div> </div> </div> </div> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex items-center justify-center"> <div class="p-5 text-center"> <!-- <p class='animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75'>
            DSFA blog
          </p> --> <div style="display: inline-block" class="dark:invert"> <img src="http://www.rays-counter.com/d1281_f6_021/6640a3d8e8528/"> </div> <p class="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">
\u540C\u5FD7\u793ESF\u7814\u7A76\u4F1A \u30DB\u30FC\u30E0\u30DA\u30FC\u30B8(\u4EEE)
</p> <p class="animated text-sm md:text-base lg:text-lg opacity-75">
Doshisha university Science Fiction Association
</p> <div id="ctaButtons" class="animated flex flex-wrap gap-4 justify-center mt-5"> <a href="/about" class="py-2 px-4 rounded truncate text-xs md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend">
About us
</a> <a href="/blog" class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">
Read blog
</a> </div> </div> </div> </div> </section> <div class="relative bg-white dark:bg-black"> <div class="mx-auto max-w-screen-sm p-5 space-y-24 pb-16"> <!-- About Section --> <section class="animate"> <article> <p>\u540C\u5FD7\u793E\u5927\u5B66SF\u7814\u7A76\u4F1A\u306F1970\u5E74\u5275\u90E8\u306ESF\u597D\u304D\u304C\u96C6\u307E\u308B\u30B5\u30FC\u30AF\u30EB\u3067\u3059\u3002\u6708\u306B1\u56DE\u304F\u3089\u3044\u306E\u983B\u5EA6\u3067\u8AAD\u66F8\u4F1A\u3084\u6620\u753B\u306E\u4E0A\u6620\u4F1A\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002</p> <p>\u90E8\u5BA4
              \u4ECA\u51FA\u5DDD: \u65B0\u753A\u5B66\u751F\u4F1A\u9928316
              \u4EAC\u7530\u8FBA: \u4EAC\u7530\u8FBA\u5225\u9928308
</p> <p><a href="https://twitter.com/DoshishaSFA">\u516C\u5F0FX\u30A2\u30AB\u30A6\u30F3\u30C8</a></p> <p><a href="https://www.d-live.info/club/culture/1163">Dlive(\u30B5\u30FC\u30AF\u30EB\u60C5\u5831)</a></p> <p><a href="https://twitter.com/DSFAdoshisha">\u4E88\u5099X\u30A2\u30AB\u30A6\u30F3\u30C8</a></p>  </article> </section> <!-- Blog Preview Section --> <section class="animate"> <div class="space-y-4"> <div class="flex justify-between"> <p class="font-semibold text-black dark:text-white">
Recent posts
</p> <a href="/blog" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
All posts
</span> </a> </div> <ul class="space-y-4"> `, ' </ul> </div> </section> <!-- Tech Stack Section --> <!-- <section class="animate">\n        <div class="space-y-4">\n          <p class="font-semibold text-black dark:text-white">\n            Website build with\n          </p>\n          <div class="flex flex-wrap items-center gap-2 mt-5">\n            {stack.map(item => (\n              <StackCard \n                text={item.text}\n                icon={item.icon}\n                href={item.href}\n              />\n            ))}\n          </div>\n          <div>\n            Performing reactivity and statefulness, special guest\n            <a href="https://www.solidjs.com/" target="_blank" class="w-fit group underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend">\n              <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">\n                SolidJS\n              </span>\n            </a>\n          </div>\n        </div>\n      </section> --> <!-- Project Preview Section --> <!-- <section class="animate">\n        <div class="space-y-4">\n          <div class="flex justify-between">\n            <p class="font-semibold text-black dark:text-white">\n              Recent projects\n            </p>\n            <a href="/projects" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend">\n              <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">\n                All projects\n              </span>\n            </a>\n          </div>\n          <ul class="space-y-4">\n            {projects.map((project) => (\n              <li>\n                <ArrowCard entry={project} />\n              </li>\n            ))}\n          </ul>\n        </div>\n      </section> --> <!-- Contact Section --> <section class="animate"> <div> <p class="font-semibold text-black dark:text-white">\n\u56E3\u4F53\u60C5\u5831\n</p> <div class="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min"> ', " </div> </div></section> </div> </div> "])), maybeRenderHead(), renderComponent($$result2, "TwinklingStars", $$TwinklingStars, {}), renderComponent($$result2, "MeteorShower", $$MeteorShower, {}), posts.map((post) => renderTemplate`<li> ${renderComponent($$result2, "ArrowCard", ArrowCard, { "entry": post })} </li>`), SOCIALS.map((social) => renderTemplate`<div class="col-span-1 flex items-center gap-1"> <span class="whitespace-nowrap truncate"> ${social.NAME} </span> </div>
              <div class="col-span-3 truncate"> <a${addAttribute(social.HREF, "href")} target="_blank" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend"> ${social.TEXT} </span> </a> </div>`)) })}`;
}, "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/index.astro", void 0);

const $$file = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };

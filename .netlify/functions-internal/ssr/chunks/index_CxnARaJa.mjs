const id = "02-astro-sphere-getting-started/index.md";
						const collection = "blog";
						const slug = "02-astro-sphere-getting-started";
						const body = "\nAstro Sphere is designed to be configurable. This article will cover the basics on\nconfiguring the site and make it personal.\n\n### First let's change the url\n\n```js\n//astro.config.mjs\n\nexport default defineConfig({\n  site: \"https://astro-sphere.vercel.app\", // your domain here\n  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],\n})\n```\n\n### Next, Let's configure the Site\n\n```js\n// src/consts.ts\n\nexport const SITE: Site = {\n  TITLE: \"Astro Sphere\",\n  DESCRIPTION: \"Welcome to Astro Sphere, a portfolio and blog for designers and developers.\",\n  AUTHOR: \"Mark Horn\",\n}\n```\n\n| Field       | Type   | Description                                                            |\n| :---------- | :----- | :--------------------------------------------------------------------- |\n| TITLE       | String | The title of the website. Displayed in header and footer. Used in SEO. |\n| DESCRIPTION | String | The description of the index page of the website. Used in SEO.         |\n| AUTHOR      | String | Your name.                                                             |\n\n### Change the branding\n\nThe browser icon is located in `/public/favicon.svg`\n\nThe header and footer branding icon is located in `/public/brand.svg` as a sprite with id=\"brand\"\n\n### The rest of the consts file\n\nEach page has a metadata entry that is useful for SEO.\n\n```js\nexport const WORK: Page = {\n  TITLE: \"Work\",\n  DESCRIPTION: \"Places I have worked.\",\n}\n```\n\nThe links that are displayed in the header and drawer\n\n```js\nexport const LINKS: Links = [\n  { HREF: \"/\", TEXT: \"Home\" },\n  { HREF: \"/work\", TEXT: \"Work\" },\n  { HREF: \"/blog\", TEXT: \"Blog\" },\n  { HREF: \"/projects\", TEXT: \"Projects\" },\n]\n```\n\nThe social media links\n\n```js\nexport const SOCIALS: Socials = [\n  { \n    NAME: \"Github\",\n    ICON: \"github\",\n    TEXT: \"markhorn-dev\",\n    HREF: \"https://github.com/markhorn-dev/astro-sphere\"\n  },\n]\n```\n\n| Field | Type | Required | Description |\n| :---- | :--- | :------- | :---------- |\n| NAME  | string | yes | Accessible name |\n| ICON  | string | yes | Refers to the symbol id in `public/social.svg` |\n| TEXT  | string | yes | Shorthand profile name |\n| HREF  | string | yes | The link to the social media profile |";
						const data = {title:"Astro Sphere: Getting Started",summary:"You've downloaded and installed the project. Let's hit the ground running.",date:new Date(1710514800000),tags:["Tutorial","Astro","Astro Sphere"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tsujimoto_souichirou/Documents/DSFA/src/content/blog/02-astro-sphere-getting-started/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
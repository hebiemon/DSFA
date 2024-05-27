import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_COriWUSW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"basics\">Basics</h3>\n<p>Create a folder in the respective collection you wish to create content. The name of the folder will be the slug in which your content will be found.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"text\"><code><span class=\"line\"><span>creating the following</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>/content/blog/my-new-post/index.md</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>will be published to</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>https://yourdomain.com/blog/my-new-post</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<h3 id=\"frontmatter\">Frontmatter</h3>\n<p>Front matter is in yaml if you are familiar with the format. All posts and projects require frontmatter at the top of the document to be imported. All frontmatter must be inside triple dashes, similar to Astro format. See example below.</p>\n<h3 id=\"blog-collection\">Blog Collection</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Field</th><th align=\"left\">Type</th><th align=\"left\">Req?</th><th align=\"left\">Description</th></tr></thead><tbody><tr><td align=\"left\">title</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Title of the post. Used in SEO.</td></tr><tr><td align=\"left\">summary</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Short description of the post. Used in SEO.</td></tr><tr><td align=\"left\">date</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Any string date that javascript can convert. Used in sorting</td></tr><tr><td align=\"left\">tags</td><td align=\"left\">array</td><td align=\"left\">yes</td><td align=\"left\">Post topic. Array of strings. Used in filtering.</td></tr><tr><td align=\"left\">draft</td><td align=\"left\">boolean</td><td align=\"left\">no</td><td align=\"left\">Hides the post from collections. Unpublished entry.</td></tr></tbody></table>\n<p>Example blog post frontmatter</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"yaml\"><code><span class=\"line\"><span style=\"color:#B392F0\">---</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Astro Sphere: Adding a new post or project.\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">summary</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Adding a new article (blog post or project) is pretty easy.\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">date</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Mar 18 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">draft</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">tags</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Tutorial</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Astro</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Astro Sphere</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">---</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"projects-collection-extends-blog-collection\">Projects Collection (extends Blog Collection)</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Field</th><th align=\"left\">Type</th><th align=\"left\">Req?</th><th align=\"left\">Description</th></tr></thead><tbody><tr><td align=\"left\">title</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Title of the post. Used in SEO.</td></tr><tr><td align=\"left\">summary</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Short description of the post. Used in SEO.</td></tr><tr><td align=\"left\">date</td><td align=\"left\">string</td><td align=\"left\">yes</td><td align=\"left\">Any string date that javascript can convert. Used in sorting</td></tr><tr><td align=\"left\">tags</td><td align=\"left\">array</td><td align=\"left\">yes</td><td align=\"left\">Post topic. Array of strings. Used in filtering.</td></tr><tr><td align=\"left\">draft</td><td align=\"left\">boolean</td><td align=\"left\">no</td><td align=\"left\">Hides the post from collections. Unpublished entry.</td></tr><tr><td align=\"left\">demoUrl</td><td align=\"left\">string</td><td align=\"left\">no</td><td align=\"left\">A link to the deployed project, if applicable.</td></tr><tr><td align=\"left\">repoUrl</td><td align=\"left\">string</td><td align=\"left\">no</td><td align=\"left\">A link to the repository, if applicable.</td></tr></tbody></table>\n<p>Example project frontmatter</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"yaml\"><code><span class=\"line\"><span style=\"color:#B392F0\">---</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Astro Sphere\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">summary</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Astro Sphere, a portfolio and blog for designers and developers.\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">date</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">\"Mar 18 2024\"</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">draft</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">tags</span><span style=\"color:#E1E4E8\">:</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Astro</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Typescript</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Javascript</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">Tailwind</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">- </span><span style=\"color:#9ECBFF\">SolidJS</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">demoUrl</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">https://astro-sphere.vercel.app</span></span>\n<span class=\"line\"><span style=\"color:#85E89D\">repoUrl</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#9ECBFF\">https://github.com/markhorn-dev/astro-sphere</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">---</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"write-your-content\">Write your content</h3>\n<p>You’ve made it this far, all that is left to do is write your content beneath the frontmatter. Writing markdown will be covered in the next article.</p>";

				const frontmatter = {"title":"Astro Sphere: Adding a new post or project.","summary":"Adding a new article (blog post or project) is pretty easy.","date":"Mar 14 2024","draft":false,"tags":["Tutorial","Astro","Astro Sphere"]};
				const file = "/Users/tsujimoto_souichirou/Documents/DSFA/src/content/blog/03-astro-sphere-add-new-post-or-projects/index.md";
				const url = undefined;
				function rawContent() {
					return "### Basics\n\nCreate a folder in the respective collection you wish to create content. The name of the folder will be the slug in which your content will be found.\n\n```text\ncreating the following\n\n/content/blog/my-new-post/index.md\n\nwill be published to\n\nhttps://yourdomain.com/blog/my-new-post\n\n```\n\n### Frontmatter\n\nFront matter is in yaml if you are familiar with the format. All posts and projects require frontmatter at the top of the document to be imported. All frontmatter must be inside triple dashes, similar to Astro format. See example below.\n\n### Blog Collection\n\n| Field   | Type    | Req? | Description                                                   |\n| :------ | :------ | :--- | :------------------------------------------------------------ |\n| title   | string  | yes  | Title of the post. Used in SEO.                               |\n| summary | string  | yes  | Short description of the post. Used in SEO.                   |\n| date    | string  | yes  | Any string date that javascript can convert. Used in sorting  |\n| tags    | array   | yes  | Post topic. Array of strings. Used in filtering.              |\n| draft   | boolean | no   | Hides the post from collections. Unpublished entry.           |\n\nExample blog post frontmatter\n\n```yaml\n---\ntitle: \"Astro Sphere: Adding a new post or project.\"\nsummary: \"Adding a new article (blog post or project) is pretty easy.\"\ndate: \"Mar 18 2024\"\ndraft: false\ntags:\n- Tutorial\n- Astro\n- Astro Sphere\n---\n```\n\n### Projects Collection (extends Blog Collection)\n\n| Field   | Type    | Req? | Description                                                   |\n| :------ | :------ | :--- | :------------------------------------------------------------ |\n| title   | string  | yes  | Title of the post. Used in SEO.                               |\n| summary | string  | yes  | Short description of the post. Used in SEO.                   |\n| date    | string  | yes  | Any string date that javascript can convert. Used in sorting  |\n| tags    | array   | yes  | Post topic. Array of strings. Used in filtering.              |\n| draft   | boolean | no   | Hides the post from collections. Unpublished entry.           |\n| demoUrl | string  | no   | A link to the deployed project, if applicable.                |\n| repoUrl | string  | no   | A link to the repository, if applicable.                      |\n\nExample project frontmatter\n\n```yaml\n---\ntitle: \"Astro Sphere\"\nsummary: \"Astro Sphere, a portfolio and blog for designers and developers.\"\ndate: \"Mar 18 2024\"\ndraft: false\ntags:\n- Astro\n- Typescript\n- Javascript\n- Tailwind\n- SolidJS\ndemoUrl: https://astro-sphere.vercel.app\nrepoUrl: https://github.com/markhorn-dev/astro-sphere\n---\n```\n\n### Write your content\nYou've made it this far, all that is left to do is write your content beneath the frontmatter. Writing markdown will be covered in the next article.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"basics","text":"Basics"},{"depth":3,"slug":"frontmatter","text":"Frontmatter"},{"depth":3,"slug":"blog-collection","text":"Blog Collection"},{"depth":3,"slug":"projects-collection-extends-blog-collection","text":"Projects Collection (extends Blog Collection)"},{"depth":3,"slug":"write-your-content","text":"Write your content"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
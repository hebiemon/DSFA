import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_COriWUSW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit. Iure illo neque tempora.</p>\n<ul>\n<li>Sit amet consectetur adipisicing elit. Iure illo neque tempora.</li>\n<li>Quibusdam, debitis voluptatum, lorem ipsum</li>\n</ul>";

				const frontmatter = {"company":"Apple","role":"Software Engineer","dateStart":"01/01/2020","dateEnd":"11/27/2022"};
				const file = "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/work/apple.md";
				const url = undefined;
				function rawContent() {
					return "\r\nVoluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit. Iure illo neque tempora.\r\n\r\n- Sit amet consectetur adipisicing elit. Iure illo neque tempora.\r\n- Quibusdam, debitis voluptatum, lorem ipsum\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_COriWUSW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Iure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit.</p>\n<ul>\n<li>Sit amet consectetur adipisicing elit.</li>\n</ul>";

				const frontmatter = {"company":"Facebook","role":"Intern","dateStart":"07/01/2019","dateEnd":"12/31/2019"};
				const file = "/Users/tsujimoto_souichirou/Documents/DSFA/src/content/work/facebook.md";
				const url = undefined;
				function rawContent() {
					return "\nIure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum, lorem ipsum dolor. Sit amet consectetur adipisicing elit.\n\n- Sit amet consectetur adipisicing elit.\n";
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

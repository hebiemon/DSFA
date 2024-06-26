import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_COriWUSW.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum.</p>\n<ul>\n<li>Quibusdam, debitis voluptatum.</li>\n<li>amet consectetur adipisicing elit. Iure illo neque tempora.</li>\n</ul>";

				const frontmatter = {"company":"McDonalds","role":"French Fryer","dateStart":"03/16/2018","dateEnd":"07/01/2019"};
				const file = "/Users/tsujimoto_souichirou/Documents/DSFA/src/content/work/mcdonalds.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Iure illo neque tempora, voluptatem est quaerat voluptas praesentium ipsa dolorem dignissimos nulla ratione distinctio quae maiores eligendi nostrum? Quibusdam, debitis voluptatum.\n\n- Quibusdam, debitis voluptatum.\n- amet consectetur adipisicing elit. Iure illo neque tempora.\n";
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

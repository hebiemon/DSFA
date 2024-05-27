const id = "05-astro-sphere-writing-mdx/index.mdx";
						const collection = "blog";
						const slug = "05-astro-sphere-writing-mdx";
						const body = "\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\n\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\n\n## An astro component with props\n\n```\n// Imported from relative path (same dir as markdown file)\nimport MyComponent from \"./MyComponent.astro\"\n\n<MyComponent name=\"You\">\n  Welcome to MDX\n</MyComponent>\n```\n\nimport MyComponent from \"./MyComponent.astro\"\n\n<MyComponent name=\"You\">\n  Welcome to MDX\n</MyComponent>\n\n\n\n## An interactive Solid Js component\n\n```\n// Imported from components directory (src/components)\nimport MyComponent from \"@components/Counter\"\n\n// Don't forget the astro client:load directive\n<Counter client:load /> \n```\n\nimport Counter from \"@components/Counter\"\n\n<Counter client:load />\n\n<br/>\n<br/>\n<br/>";
						const data = {title:"Astro Sphere: Writing MDX",summary:"Lorem ipsum dolor sit amet",date:new Date(1710169200000),tags:["Tutorial","Astro","Astro Sphere","Markdown","MDX"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/tsujimoto_souichirou/Documents/DSFA/src/content/blog/05-astro-sphere-writing-mdx/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };

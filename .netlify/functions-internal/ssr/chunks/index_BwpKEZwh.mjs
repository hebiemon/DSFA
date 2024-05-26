const id = "05-astro-sphere-writing-mdx/index.mdx";
						const collection = "blog";
						const slug = "05-astro-sphere-writing-mdx";
						const body = "\r\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\r\n\r\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\r\n\r\n## An astro component with props\r\n\r\n```\r\n// Imported from relative path (same dir as markdown file)\r\nimport MyComponent from \"./MyComponent.astro\"\r\n\r\n<MyComponent name=\"You\">\r\n  Welcome to MDX\r\n</MyComponent>\r\n```\r\n\r\nimport MyComponent from \"./MyComponent.astro\"\r\n\r\n<MyComponent name=\"You\">\r\n  Welcome to MDX\r\n</MyComponent>\r\n\r\n\r\n\r\n## An interactive Solid Js component\r\n\r\n```\r\n// Imported from components directory (src/components)\r\nimport MyComponent from \"@components/Counter\"\r\n\r\n// Don't forget the astro client:load directive\r\n<Counter client:load /> \r\n```\r\n\r\nimport Counter from \"@components/Counter\"\r\n\r\n<Counter client:load />\r\n\r\n<br/>\r\n<br/>\r\n<br/>";
						const data = {title:"Astro Sphere: Writing MDX",summary:"Lorem ipsum dolor sit amet",date:new Date(1710169200000),tags:["Tutorial","Astro","Astro Sphere","Markdown","MDX"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/mnt/c/Users/souic/Documents/DSFA/DSFA/src/content/blog/05-astro-sphere-writing-mdx/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };

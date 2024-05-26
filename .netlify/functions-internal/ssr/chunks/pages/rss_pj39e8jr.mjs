import rss from '@astrojs/rss';
import { g as getCollection, e as SITE } from './__B4dXIqCf.mjs';

async function GET(context) {
  const posts = await getCollection("blog");
  const projects = await getCollection("projects");
  const items = [...posts, ...projects];
  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog") ? `/blog/${item.slug}/` : `/projects/${item.slug}/`
    }))
  });
}

export { GET };

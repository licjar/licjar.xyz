import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  const misc = await getCollection('misc');
  console.log("RSS Feed triggered!");
  const allPosts = [...blog, ...misc];

  allPosts.sort((a, b) => {
    b.data.date.valueOf() - a.data.date.valueOf();
  });

  return rss({
    title: 'LICJAR.XYZ',
    description: 'ブログとその他',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.desc,
      link: `/${post.collection}/${post.id}/`,
    })),
  });
}
// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkRuby from "remark-denden-ruby";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath, remarkRuby],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'css-variables',
    },
  },
  integrations: [mdx()],
  image: {
    layout: 'constrained', 
    responsiveStyles: true,
  },
  site: 'https://licjar.xyz',
});
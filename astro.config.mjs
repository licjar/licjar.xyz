// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkRuby from "remark-denden-ruby";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  image: {
    layout: 'constrained', 
    responsiveStyles: true,
  },
  site: 'https://licjar.xyz',
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
    remarkPlugins: [
      remarkMath,
      remarkRuby
    ],
    rehypePlugins: [rehypeKatex],
  },
});
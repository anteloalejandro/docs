import { defineConfig } from 'astro/config';
import { toc } from 'rehype-toc';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    }
    /* rehypePlugins: [
      [toc, {
        headings: ['h1', 'h2'],
        nav: true,
        cssClasses: {
          toc: 'toc'
        }
      }]
    ] */
  },
  output: "server",
  adapter: netlify()
});
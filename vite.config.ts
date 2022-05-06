import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import voby from 'voby/vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg.js';
// import rehypeMathjaxChtml from "rehype-mathjax/chtml.js";

export default defineConfig({
  plugins: [
    mdx({ jsxImportSource: 'voby', remarkPlugins: [remarkMath], rehypePlugins: [
      rehypeMathjax,
      // [rehypeMathjaxChtml, {
      // 	chtml: {
      // 		fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
      // 	},
      // }],
    ] }),
    voby(),
    uno(),
    tsconfigPaths(),
  ],
});
``
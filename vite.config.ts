import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import voby from 'voby-vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  base: '/voby-mathjax/',
  plugins: [
    mdx({ jsxImportSource: 'voby', remarkPlugins: [remarkMath], rehypePlugins: [rehypeMathjax] }),
    voby(),
    uno(),
    tsconfigPaths(),
  ],
});
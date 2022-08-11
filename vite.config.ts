import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  base: '/voby-mathjax/',
  build: {
    commonjsOptions: { include: [] },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'voby',
  },
  optimizeDeps: {
    disabled: false,
  },
  plugins: [
    mdx({ jsxImportSource: 'voby', remarkPlugins: [remarkMath], rehypePlugins: [rehypeMathjax] }),
    uno(),
    tsconfigPaths(),
  ],
});

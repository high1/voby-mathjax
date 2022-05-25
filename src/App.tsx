import MathJax from 'Mathjax.mdx';

export const App = (): JSX.Element => (
  <div class="flex flex-col items-center justify-center h-full bg-amber-50">
    <MathJax components={{ h1: (props) => <h1 class="text-sky-600" {...props} /> }} />;
  </div>
);

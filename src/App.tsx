import MathJax from 'Mathjax.mdx';

export const App = (): JSX.Element => (
  <div class="flex flex-col items-center justify-center">
    <MathJax components={{ h1: (props) => <h1 class="text-sky-600" {...props} /> }} />;
  </div>
);

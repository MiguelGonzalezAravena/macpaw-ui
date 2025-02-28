import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language = 'javascript' }) => (
  <SyntaxHighlighter language={language} style={nightOwl}>
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;

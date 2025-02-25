import React from 'react';
import Highlight, { defaultProps, themes } from 'prism-react-renderer'
import cx from 'clsx'
import styles from './CodeBlock.module.css';

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'js';

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={themes.nightOwlLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(className, styles.codeBlock)} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

import React from 'react';
// MARK DOWN
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark';
import remarkGfm from 'remark-gfm';
import useGithub from '../../../hooks/useGithub';

export default function ScoreCardModalContent() {
  const [status, data] = useGithub();

  return (
    <ReactMarkdown
      children={data}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children)
                .replace(/\n$/, '')
                .replace('<br/>', '')}
              style={a11yDark}
              language={match[1]}
              PreTag='div'
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}

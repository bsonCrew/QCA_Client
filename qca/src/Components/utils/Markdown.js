import React, { useEffect, useState } from "react";
// MARK DOWN
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import useGithub from "../../hooks/useGithub";

function MarkDown() {
	const [status, data] = useGithub();

	// 	const data = `A paragraph with *emphasis* and **strong importance**.

	// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

	// * Lists
	// * [ ] todo
	// * [x] done

	// A table:

	// | a | b |
	// | - | - |
	// `;

	return (
		<ReactMarkdown
			children={data}
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "");
					return !inline && match ? (
						<SyntaxHighlighter
							children={String(children)
								.replace(/\n$/, "")
								.replace("<br/>", "")}
							style={a11yDark}
							language={match[1]}
							PreTag="div"
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

export default MarkDown;

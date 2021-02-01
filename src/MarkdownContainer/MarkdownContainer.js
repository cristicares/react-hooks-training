import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
};

const MarkdownContainer = ({ markdown }) => {
  return <ReactMarkdown renderers={renderers} children={markdown}></ReactMarkdown>;
};

export default MarkdownContainer;

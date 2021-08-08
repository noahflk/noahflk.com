import { css } from "@emotion/react";

export const codeHighlighting = css`
  .remark-code-title {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: rgb(229, 231, 235);
    background-color: rgb(55, 65, 81);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .remark-code-title + div > pre {
    margin-top: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .task-list-item:before {
    display: none;
  }

  .code-line {
    padding: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    border-left-width: 4px;
    border-color: rgb(31, 41, 55);
  }

  .highlight-line {
    margin-left: -1rem;
    margin-right: -1rem;
    border-color: rgba(55, 65, 81, var(--tw-border-opacity));
    background-color: rgba(55, 65, 81, 0.5);
    border-left-width: 4px;
    border-color: rgb(107, 114, 128);
  }

  .line-number::before {
    padding-right: 1rem;
    margin-left: -0.5rem;
    color: rgb(156, 163, 175);
    content: attr(line);
  }
`;

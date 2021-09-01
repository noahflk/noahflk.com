import { css } from "@emotion/react";

export const codeHighlighting = css`
  .remark-code-title {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    width: 100%;
    padding-bottom: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: rgb(229, 231, 235);
    background-color: rgb(55, 65, 81);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  .remark-code-title + div > pre {
    margin-top: -16px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .task-list-item:before {
    display: none;
  }

  .code-line {
    padding-left: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    border-left-width: 4px;
    border-color: rgb(31, 41, 55);
  }

  .highlight-line {
    margin-left: -1rem;
    margin-right: -1rem;
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

  .text-code-red {
    color: rgb(255, 131, 131);
  }

  .text-code-yellow {
    color: rgb(255, 228, 132);
  }

  .text-code-green {
    color: rgb(181, 244, 165);
  }

  .text-code-white {
    color: rgb(255, 255, 255);
  }

  .text-code-purple {
    color: rgb(217, 169, 255);
  }

  .text-code-blue {
    color: rgb(147, 221, 253);
  }

  .text-code-gray {
    color: rgb(163, 163, 163);
    font-style: italic;
  }
`;

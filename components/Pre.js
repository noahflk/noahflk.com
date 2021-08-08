import { useState, useRef } from "react";
import { css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";

const Pre = (props) => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const { colorMode } = useColorMode();

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const buttonStyling = css`
    border-color: rgb(209, 213, 219);
  `;

  const copiedButtonStyling = css`
    border-color: rgb(52, 211, 153);
    &:focus {
      outline-offset: 2px;
    }
  `;

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          css={css`
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            width: 2rem;
            height: 2rem;
            padding: 0.25rem;
            border-radius: 0.25rem;
            border-width: 2px;
            background-color: ${colorMode === "light" ? "rgb(55, 65, 81)" : "rgb(31, 41, 55)"};
            ${copied ? copiedButtonStyling : buttonStyling}
          `}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            css={css`
              color: ${copied ? "rgb(52, 211, 153)" : "rgb(209, 213, 219)"};
            `}
          >
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      )}

      <pre>{props.children}</pre>
    </div>
  );
};

export default Pre;

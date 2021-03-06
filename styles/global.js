import { Global, css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";

import useColors from "hooks/useColors";
import { codeHighlighting } from "styles/highlighting";

export default function GlobalStyle({ children }) {
  const { colorMode } = useColorMode();
  const { bgColor, accentColor } = useColors();

  return (
    <>
      <Global
        styles={css`
          ${codeHighlighting};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              --duration: 0;
              scroll-behavior: auto;
            }
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${bgColor};
          }

          p code {
            color: ${accentColor};
            font-weight: 600;
            font-size: 0.875em;
            background-color: ${colorMode == "dark" ? "#262626" : "#f5f5f5"};
            padding: 2px 4px;
            border-radius: 0.25rem;
          }

          @font-face {
            font-family: "Inter";
            font-style: normal;
            font-weight: 100 900;
            font-display: optional;
            src: url(/fonts/inter-var-latin.woff2) format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
              U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
      />
      {children}
    </>
  );
}

import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { DefaultSeo } from "next-seo";

import { codeHighlighting } from "styles/highlighting";
import SEO_CONFIG from "seo.config.js";
import useColors from "hooks/useColors";
import theme from "styles/theme";

const GlobalStyle = ({ children }) => {
  const { bgColor } = useColors();

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
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <DefaultSeo {...SEO_CONFIG} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </>
  );
};

export default App;

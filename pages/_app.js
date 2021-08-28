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

import Head from "next/head";
import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";

import { prismLightTheme, prismDarkTheme } from "styles/prism";
import SEO_CONFIG from "seo.config.js";
import components from "components/MDXComponents";
import { Chakra } from "components/Chakra";
import useColors from "hooks/useColors";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  const { bgColor } = useColors();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
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

const App = ({ Component, pageProps, cookies }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Chakra cookies={cookies}>
        <MDXProvider components={components}>
          <GlobalStyle>
            <DefaultSeo {...SEO_CONFIG} />
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </Chakra>
    </>
  );
};

export default App;

export { getServerSideProps } from "components/Chakra";

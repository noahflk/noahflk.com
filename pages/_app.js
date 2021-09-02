import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import SEO_CONFIG from "seo.config.js";
import theme from "styles/theme";
import GlobalStyle from "styles/global";

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

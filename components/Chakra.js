import { ChakraProvider } from "@chakra-ui/react";

import theme from "styles/theme.js";

export function Chakra({ children }) {
  // const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Inter, system-ui, sans-serif`,
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

export default theme;

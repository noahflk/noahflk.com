import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Inter, system-ui, sans-serif`,
  },
  useSystemColorMode: true,
  initialColorMode: "light",
});

export default theme;

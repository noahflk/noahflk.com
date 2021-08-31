import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Inter, system-ui, sans-serif`,
    body: `Inter, system-ui, sans-serif`,
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  styles: {
    global: (props) => ({
      "html, body": {
        background: props.colorMode === "dark" ? "#16181d" : "#fefefe",
      },
    }),
  },
});

export default theme;

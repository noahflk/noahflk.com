import { Flex, Box } from "@chakra-ui/react";

import Footer from "components/Footer";
import Header from "components/Header";
import useColors from "hooks/useColors";

const Layout = ({ children }) => {
  const { bgColor, primarytextColor } = useColors();

  return (
    <Flex direction="column" height="100vh" color={primarytextColor}>
      <Header />
      <Box as="main" flexGrow={1} flexShrink={1} flexBasis="0%" px={[5, 8]} bg={bgColor}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;

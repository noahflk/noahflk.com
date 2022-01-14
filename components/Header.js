import NextLink from "next/link";
import { useRouter } from "next/router";
import { useColorMode, Button, Flex, Box, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import useColors from "hooks/useColors";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useRouter();
  const { accentColor } = useColors();

  return (
    <Box as="header" borderTopWidth="5px" borderColor={accentColor} px={[5, 8]}>
      <Flex
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        as="nav"
        h="50px"
        py={8}
        m="auto"
        mt={[0, 4]}
        mb={[2, 8]}
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              fontWeight="normal"
              variant={pathname === "/" ? "solid" : "ghost"}
              p={[2, 2, 4]}
              mx={[1, 1, 2]}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              fontWeight="normal"
              variant={pathname.startsWith("/blog") ? "solid" : "ghost"}
              p={[2, 2, 4]}
              mx={[1, 1, 2]}
            >
              Blog
            </Button>
          </NextLink>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="lg"
            ml={[1, 1, 2]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

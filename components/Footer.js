import React from "react";
import { Link, IconButton, Text, Stack, Flex, Box, Center } from "@chakra-ui/react";

import { WEBSITE_URL, HANDLE_TWITTER, HANDLE_GITHUB } from "utils/configuration";
import { TwitterIcon, GitHubIcon, MailIcon, RssIcon } from "components/Icons";
import useColors from "hooks/useColors";

const Footer = () => {
  const { tertiaryTextColor, bgColor } = useColors();

  return (
    <Box px={[5, 8]} bg={bgColor}>
      <Flex
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth="800px"
        as="footer"
        mx="auto"
        mt={[4, 8]}
        mb={[2, 8]}
        color={tertiaryTextColor}
      >
        <Stack isInline spacing={2} mb={[2, 0]}>
          <Link href={`https://twitter.com/${HANDLE_TWITTER}`} title="Twitter" isExternal>
            <Center w="100%" h="100%">
              <IconButton
                aria-label="Twitter"
                icon={<TwitterIcon />}
                size="lg"
                variant="link"
                color={tertiaryTextColor}
              />
            </Center>
          </Link>
          <Link href={`https://github.com/${HANDLE_GITHUB}`} title="GitHub" isExternal>
            <Center w="100%" h="100%">
              <IconButton
                aria-label="GitHub"
                icon={<GitHubIcon />}
                size="lg"
                variant="link"
                color={tertiaryTextColor}
              />
            </Center>
          </Link>
          <Link href="mailto:nfleischm@gmail.com" title="Email" isExternal>
            <Center w="100%" h="100%">
              <IconButton aria-label="Email" icon={<MailIcon />} size="lg" variant="link" color={tertiaryTextColor} />
            </Center>
          </Link>
          <Link href={`${WEBSITE_URL}/feed.xml`} title="RSS Feed" isExternal>
            <Center w="100%" h="100%">
              <IconButton aria-label="RSS Feed" icon={<RssIcon />} size="lg" variant="link" color={tertiaryTextColor} />
            </Center>
          </Link>
        </Stack>
        <Text>© @noahflk {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  );
};

export default Footer;

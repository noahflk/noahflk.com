/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useColorMode, Heading, Box, Flex, Stack, Button } from "@chakra-ui/react";

import Layout from "components/Layout";

const Error = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" maxWidth="800px" margin="0 auto" width="100%" height="100%">
        <Stack as="main" spacing={6} justifyContent="center" alignItems="center">
          <Box w="200px">
            {colorMode === "light" ? (
              <img src="/static/owl_light.svg" alt="Undraw owl illustration" />
            ) : (
              <img src="/static/owl_dark.svg" alt="Undraw owl illustration" />
            )}
          </Box>
          <Heading letterSpacing="tight" as="h2" size="xl">
            Oops, page not found...
          </Heading>
          <Link href="/" passHref>
            <Button as="a" p={[1, 4]} w="250px" fontWeight="bold">
              Take me back home
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Error;

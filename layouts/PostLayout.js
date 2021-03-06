import { Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Layout from "components/Layout";
import BlogSeo from "components/BlogSeo";
import { getHumanizedDate } from "utils/date";
import { WEBSITE_URL } from "utils/configuration";
import useColors from "hooks/useColors";

// TODO: include slug in front matter
export default function PostLayout({ frontMatter, children }) {
  const { secondaryTextColor } = useColors();
  const { slug, readingTime, date, title } = frontMatter;

  return (
    <Layout>
      <BlogSeo url={`${WEBSITE_URL}/blog/${slug}`} {...frontMatter} />
      <Stack
        as="article"
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto"
        maxWidth="800px"
        width="100%"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
            {title}
          </Heading>
          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={4}
            color={secondaryTextColor}
          >
            <Flex align="center">
              <Text fontSize="md">Published on {getHumanizedDate(date)}</Text>
            </Flex>
            <Text fontSize="md" mt={[2, 0]}>
              {readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Layout>
  );
}

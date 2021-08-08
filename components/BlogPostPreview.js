import React from "react";
import NextLink from "next/link";
import { Heading, Text, Stack, Box, Link } from "@chakra-ui/react";

import { getHumanizedDate } from "utils/date";
import useColors from "hooks/useColors";

const BlogPostPreview = (frontMatter) => {
  const { title, summary, date, readingTime, slug } = frontMatter;
  const { secondaryTextColor, tertiaryTextColor } = useColors();

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={8} display="block" width="100%">
          <Stack spacing={2}>
            <Heading size="md" fontWeight="semibold" as="h3">
              {title}
            </Heading>
            <Text color={tertiaryTextColor}>
              {getHumanizedDate(date)} • {readingTime.text}
            </Text>
            <Text color={secondaryTextColor}>{summary}</Text>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPostPreview;

/* eslint-disable */

import { Box, Code, Heading, Kbd, Text, Divider } from "@chakra-ui/react";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import CustomLink from "components/CustomLink";
import Pre from "components/Pre";
import useColors from "hooks/useColors";

const TableHead = (props) => {
  const { secondaryBgColor, accentColor } = useColors();

  return (
    <Box
      as="th"
      bg={secondaryBgColor}
      borderTopColor={accentColor}
      borderTopWidth={2}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const Quote = ({ children }) => {
  const { accentColor, secondaryAccentColor } = useColors();

  return (
    <Box
      width="100%"
      as="blockquote"
      my={4}
      pb={4}
      px={4}
      borderLeftColor={accentColor}
      borderLeftWidth={4}
      bg={secondaryAccentColor}
    >
      {children}
    </Box>
  );
};

const Hr = () => {
  const { borderColor } = useColors();

  return <Divider borderColor={borderColor} my={4} w="100%" />;
};

const chakraComponents = {
  h1: (props) => <Heading as="h1" size="xl" pt={3} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" fontWeight="semibold" pt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="md" pt={2} fontWeight="bold" {...props} />,
  inlineCode: (props) => <Code colorScheme="red" fontSize="0.84em" {...props} />,
  img: (props) => <p>{JSON.stringify(props)}</p>,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: (props) => <Box as="table" textAlign="left" mt="32px" width="full" {...props} />,
  th: TableHead,
  td: (props) => (
    <Box as="td" p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
  ),
  a: CustomLink,
  p: (props) => <Text as="p" mt={2} fontSize="lg" lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" fontSize="lg" pb={1} {...props} />,
  blockquote: (props) => <Quote {...props} />,
};

export const MDXComponents = {
  ...chakraComponents,
  Image,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};

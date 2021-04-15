import { Box, Code, Heading, Kbd, Link, Text, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

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

const CustomLink = (props) => {
  const { accentColor } = useColors();

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={accentColor} {...props} />
      </NextLink>
    );
  }

  return <Link color={accentColor} isExternal {...props} />;
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

const components = {
  h1: (props) => <Heading as="h1" size="xl" pt={3} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" fontWeight="semibold" pt={2} {...props} />,
  h3: (props) => <Heading as="h3" size="md" pt={2} fontWeight="bold" {...props} />,
  inlineCode: (props) => <Code colorScheme="red" fontSize="0.84em" {...props} />,
  img: (props) => <NextImage width={props.metadata.width} height={props.metadata.height} {...props} />,
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

export default components;

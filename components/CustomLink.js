/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import useColors from "hooks/useColors";

const CustomLink = ({ href, ...rest }) => {
  const { accentColor } = useColors();
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={accentColor} {...rest} />
      </NextLink>
    );
  }

  return <Link color={accentColor} isExternal href={href} {...rest} />;
};

export default CustomLink;

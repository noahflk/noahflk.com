/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import useColors from "hooks/useColors";

const CustomLink = ({ href, ...rest }) => {
  const { accentColor } = useColors();
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={accentColor} {...rest} />
      </NextLink>
    );
  }

  if (isAnchorLink) {
    return <Link color={accentColor} isExternal {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;

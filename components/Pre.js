import { useState, useRef } from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/react";

import { CopyIcon, CopiedIcon } from "components/Icons";

const Pre = ({ children }) => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const { colorMode } = useColorMode();

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} position="relative" w="full">
      {hovered && (
        <IconButton
          onClick={onCopy}
          aria-label="Copy code"
          position="absolute"
          right={2}
          top={2}
          width={8}
          height={8}
          padding={1}
          rounded="md"
          border="2px"
          borderColor={copied ? "green.400" : "gray.300"}
          bg={colorMode === "light" ? "gray.700" : "gray.800"}
          icon={copied ? <CopiedIcon color="green.400" /> : <CopyIcon color="gray.300" />}
        />
      )}
      <Box
        as="pre"
        bg="#1f2937"
        overflowX="auto"
        fontSize="sm"
        lineHeight={6}
        borderRadius="md"
        w="full"
        padding="4"
        color="white"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Pre;

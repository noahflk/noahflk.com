import { useColorMode } from "@chakra-ui/react";

const bgColor = {
  light: "#fefefe",
  dark: "#16181d",
};

const secondaryBgColor = {
  light: "gray.50",
  dark: "#363842",
};

const primarytextColor = {
  light: "#242629",
  dark: "#EFF1F7",
};

const secondaryTextColor = {
  light: "gray.700",
  dark: "gray.300",
};

const tertiaryTextColor = {
  light: "gray.600",
  dark: "gray.400",
};

const borderColor = {
  light: "gray.200",
  dark: "gray.600",
};

const accentColor = {
  light: "#f6416c",
  dark: "#f6416c",
};

const secondaryAccentColor = {
  light: "#FED7D7",
  dark: "#363842",
};

const useColors = () => {
  const { colorMode } = useColorMode();

  return {
    bgColor: bgColor[colorMode],
    secondaryBgColor: secondaryBgColor[colorMode],
    primarytextColor: primarytextColor[colorMode],
    secondaryTextColor: secondaryTextColor[colorMode],
    borderColor: borderColor[colorMode],
    tertiaryTextColor: tertiaryTextColor[colorMode],
    accentColor: accentColor[colorMode],
    secondaryAccentColor: secondaryAccentColor[colorMode],
  };
};

export default useColors;

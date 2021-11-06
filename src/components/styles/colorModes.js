import { useColorModeValue } from "@chakra-ui/react";

export const bgBody = () =>
  useColorModeValue("hsl(0, 0%, 90%)", "hsl(207, 26%, 17%)");

export const bgElement = () =>
  useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)");

export const textColor = () =>
  useColorModeValue("hsl(200, 15%, 8%)", "hsl(0, 0%, 100%)");

export const textInput = () =>
  useColorModeValue("hsl(0, 0%, 52%)", "hslhsl(209, 23%, 22%)");

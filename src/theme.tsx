import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";
const fonts = { mono: `'Menlo', monospace` };

// light/dark mode colors
export const bgBody = () =>
  useColorModeValue("hsl(0, 0%, 95%)", "hsl(207, 26%, 17%)");

export const bgElement = () =>
  useColorModeValue("hsl(0, 0%, 100%)", "hsl(209, 23%, 22%)");

export const textColor = () =>
  useColorModeValue("hsl(200, 15%, 8%)", "hsl(0, 0%, 100%)");

export const textInput = () =>
  useColorModeValue("hsl(0, 0%, 52%)", "hsl(0, 0%, 100%)");

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },

  config,

  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
});

export default theme;

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { CountriesProvider } from "../context/CountriesContext";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <CountriesProvider>
          <Component {...pageProps} />
        </CountriesProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;

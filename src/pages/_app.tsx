import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme as chakraTheme } from "@chakra-ui/pro-theme";
import "@fontsource/inter/variable.css";
import Script from "next/script";

const theme = extendTheme(
  {
    colors: { ...chakraTheme.colors, brand: chakraTheme.colors.purple },
  },
  chakraTheme
);

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script
        async
        defer
        data-website-id="8ae2e4c7-ba23-4116-952b-eddebe53b9b0"
        src="https://umami.fromhome.dev/umami.js"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;

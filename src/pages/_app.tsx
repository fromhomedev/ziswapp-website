import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme as chakraTheme } from "@chakra-ui/pro-theme";
import "@fontsource/inter/variable.css";

const theme = extendTheme(
  {
    colors: { ...chakraTheme.colors, brand: chakraTheme.colors.purple },
  },
  chakraTheme
);

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;

import { ChakraProvider, extendTheme, theme as baseTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme as proTheme } from "@chakra-ui/pro-theme";
import Script from "next/script";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme(
  {
    fonts: {
      heading: "var(--font-inter)",
      body: "var(--font-inter)"
    },
    colors: { ...baseTheme.colors, brand: baseTheme.colors.purple }
  },
  proTheme
);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Script
          async
          defer
          data-website-id="8ae2e4c7-ba23-4116-952b-eddebe53b9b0"
          data-domains="ziswapp.com"
          src="https://umami.fromhome.dev/umami.js"
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;

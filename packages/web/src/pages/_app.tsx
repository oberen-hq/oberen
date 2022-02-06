import "../../styles/global.css";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default MyApp;

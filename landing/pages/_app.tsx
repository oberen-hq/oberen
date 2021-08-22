import React from "react";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>{/* You found me! */}</Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp;

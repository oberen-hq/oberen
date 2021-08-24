import React from "react";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function onChange(e: any) {
  console.log(e);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GoogleReCaptchaProvider
        reCaptchaKey="6Le2Nx4cAAAAADwuAZOwfA3DFOQ7JJifvJE2KISM"
        language="en"
      >
        <Head>{/* You found me! */}</Head>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </React.Fragment>
  );
}
export default MyApp;

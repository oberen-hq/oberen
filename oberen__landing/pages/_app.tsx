import React from "react";
import "rc-drawer/assets/index.css";
import "rc-tabs/assets/index.css";
import "swiper/swiper-bundle.css";
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
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </React.Fragment>
  );
}
export default MyApp;

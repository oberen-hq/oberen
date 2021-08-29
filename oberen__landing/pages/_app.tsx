import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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

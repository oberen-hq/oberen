import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router";
import {
  SignIn,
  SignInButton,
  SignInBox,
  SignUpButton,
  SignInDesc,
  SignInForgot,
  SignInInput,
  SignInLeft,
  SignInLogo,
  SignInRight,
  SignInWrapper,
} from "./SignInElements";

import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/Auth/AuthContext";
import { signInCall } from "../../apiCalls/signIn";

const SignInPage = () => {
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );

    if (error) {
      setErrorMessage("Login Failed.");
    }

    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <SignIn>
        <SignInWrapper>
          <SignInLeft>
            <SignInLogo>Simplify</SignInLogo>
            <SignInDesc>TEST</SignInDesc>
          </SignInLeft>
          <SignInRight>
            <SignInBox onSubmit={handleSubmit}>
              <SignInInput
                placeholder="Email"
                type="email"
                ref={email}
                required
              />
              <SignInInput
                placeholder="Password"
                type="password"
                ref={password}
                required
              />
              <SignInButton type="submit" disable={isFetching}>
                {isFetching ? (
                  <CircularProgress color="primary" size="20px" />
                ) : (
                  "Sign Up"
                )}
              </SignInButton>
              <SignInForgot>Forgot Password?</SignInForgot>
            </SignInBox>
            <SignUpButton>
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Don't have an account?"
              )}
            </SignUpButton>
          </SignInRight>
        </SignInWrapper>
      </SignIn>
    </React.Fragment>
  );
};

export default SignInPage;

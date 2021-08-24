import React, { useRef, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/Auth/AuthContext";
import api from "../../api";

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

const SignInPage = () => {
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SIGNIN_START" });

    api
      .signInCall({
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.token });
        history.push("/dashboard");
      })
      .catch((error) => {
        dispatch({ type: "SIGNIN_FAILURE", payload: error.response.data });
        console.log(error.response.data);
        setErrorMessage(error.response.data.message);
        history.push("/sign-in");
      });
  };

  return (
    <React.Fragment>
      {error ? errorMessage : null}
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
                  "Sign In"
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

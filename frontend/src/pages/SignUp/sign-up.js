import React, { useRef, useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/Auth/AuthContext";
import { CircularProgress } from "@material-ui/core";
import api from "../../api";

import {
  SignUp,
  SignInButton,
  SignUpBox,
  SignUpButton,
  SignUpDesc,
  SignUpForgot,
  SignUpInput,
  SignUpLeft,
  SignUpLogo,
  SignUpRight,
  SignUpWrapper,
} from "./SignUpElements";

const SignUpPage = () => {
  const { error, isFetching, dispatch } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [agreeToTerms, setAgreedToTerms] = useState(false);

  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const checkAgreed = () => {
    setAgreedToTerms(!agreeToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      return passwordAgain.current.setCustomValidity("Passwords don't match!");
    }
    const user = {
      name: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
      isAdmin: false,
    };

    dispatch({ type: "SIGNUP_START" });

    api
      .signUpCall(user)
      .then((res) => {
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data.token });
        history.push("/dashboard");
      })
      .catch((error) => {
        dispatch({ type: "SIGNUP_FAILURE", payload: error.response.data });
        setErrorMessage(error.response.data.message);
        history.push("/sign-up");
      });
  };

  return (
    <React.Fragment>
      {error ? errorMessage : null}
      <SignUp>
        <SignUpWrapper>
          <SignUpLeft>
            <SignUpLogo>Simplify</SignUpLogo>
            <SignUpDesc>Test</SignUpDesc>
          </SignUpLeft>
          <SignUpRight>
            <SignUpBox onSubmit={handleSubmit}>
              <SignUpInput
                placeholder="Full Name"
                type="text"
                ref={fullname}
                required
              />
              <SignUpInput
                placeholder="Email"
                type="email"
                ref={email}
                required
              />
              <SignUpInput
                placeholder="Password"
                type="password"
                ref={password}
                required
              />
              <SignUpInput
                placeholder="Confirm Password"
                type="password"
                ref={passwordAgain}
                required
              />
              <SignUpButton type="submit" disable={isFetching}>
                {isFetching ? (
                  <CircularProgress color="primary" size="20px" />
                ) : (
                  "Sign Up"
                )}
              </SignUpButton>
              <SignUpForgot>Forgot Password?</SignUpForgot>
            </SignUpBox>
            <SignInButton>
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Already have an account?"
              )}
            </SignInButton>
          </SignUpRight>
        </SignUpWrapper>
      </SignUp>
    </React.Fragment>
  );
};

export default SignUpPage;

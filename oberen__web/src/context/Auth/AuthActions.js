export const signUpStart = (userCredentials) => ({
  type: "SIGNUP_START",
});

export const signUpSuccess = (user) => ({
  type: "SIGNUP_SUCCESS",
  payload: user,
});

export const signUpFailure = () => ({
  type: "SIGNUP_FAILURE",
});

export const signInStart = (userCredentials) => ({
  type: "SIGNIN_START",
});

export const signInSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: user,
});

export const signInFailure = () => ({
  type: "SIGNIN_FAILURE",
});

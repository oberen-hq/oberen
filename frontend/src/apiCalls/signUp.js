import axios from "axios";

export const signUpCall = (userCredential, dispatch) => {
  dispatch({ type: "SIGNUP_START" });

  axios
    .post("http://localhost:3001/api/auth/register", userCredential)
    .then((res) => {
      dispatch({ type: "SIGNUP_SUCCESS", payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: "SIGNUP_FAILURE", payload: err });
    });
};

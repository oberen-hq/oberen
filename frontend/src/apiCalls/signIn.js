import axios from "axios";

export const signInCall = (userCredential, dispatch) => {
  dispatch({ type: "SIGNIN_START" });

  axios
    .post("http://localhost:3001/api/auth/login", userCredential)
    .then((res) => {
      dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: "SIGNIN_FAILURE", payload: err });
    });
};

import axios from "axios";

class API {
  constructor(options) {
    this.baseUrl = "http://localhost:3001/api";
    this.options = options;
  }

  signUpCall(userCredential, dispatch) {
    dispatch({ type: "SIGNUP_START" });

    axios
      .post(`${this.baseUrl}/auth/register`, userCredential)
      .then((res) => {
        dispatch({ type: "SIGNUP_SUCCESS", payload: res.data.token });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_FAILURE", payload: err });
      });
  }

  signInCall(userCredential, dispatch) {
    dispatch({ type: "SIGNIN_START" });

    axios
      .post(`${this.baseUrl}/auth/login`, userCredential)
      .then((res) => {
        dispatch({ type: "SIGNIN_SUCCESS", payload: res.data.token });
      })
      .catch((err) => {
        dispatch({ type: "SIGNIN_FAILURE", payload: err });
      });
  }
}

const api = new API();

export default api;

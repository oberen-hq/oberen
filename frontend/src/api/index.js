import axios from "axios";

class API {
  constructor(options) {
    this.baseUrl = "http://localhost:3001/api";
    this.options = options;
  }

  signUpCall(userCredential) {
    return axios.post(`${this.baseUrl}/auth/register`, userCredential);
  }

  signInCall(userCredential) {
    return axios.post(`${this.baseUrl}/auth/login`, userCredential);
  }
}

const api = new API();

export default api;

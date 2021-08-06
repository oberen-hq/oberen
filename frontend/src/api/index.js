import axios from "axios";

class API {
  constructor(options) {
    this.baseUrl = "http://localhost:3001/api";
    this.options = options;
  }

  async signUpCall(userCredential) {
    return await axios.post(`${this.baseUrl}/auth/register`, userCredential);
  }

  async signInCall(userCredential) {
    return await axios.post(`${this.baseUrl}/auth/login`, userCredential);
  }

  async createPostCall(postCredential) {
    return await axios.post(`${this.baseUrl}/post`, postCredential);
  }
}

const api = new API();

export default api;

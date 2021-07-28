const CLI = require("clui");
const Spinner = CLI.Spinner;
const signUpCall = require("../api/signUp");
const signInCall = require("../api/signIn");
const authTest = require("../api/auth");

const signUpSpinner = new Spinner("Signing up...");
const signInSpinner = new Spinner("Signing in...");
const authSpinner = new Spinner("Authentication test in process...");

module.exports = (options) => {
  if (options.choice === "signup") {
    signUpSpinner.start();
    signUpCall({
      name: options.name,
      email: options.email,
      password: options.password,
    })
      .then((res) => res.json())
      .then((data) => {
        status.stop();
        return data;
      })
      .catch((err) => {
        signUpSpinner.stop();
        throw new Error(err);
      });
  } else if (options.choice === "signin") {
    signInSpinner.start();
    signInCall({
      email: options.email,
      password: options.password,
    })
      .then((res) => res.json())
      .then((data) => {
        signInSpinner.stop();
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  } else if (options.choice === "authtest") {
    authSpinner.start();
    authTest({
      authorization: `Bearer ${options.token}`,
      Accept: "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        authSpinner.stop();
        return data;
      })
      .catch((err) => {
        authSpinner.stop();
        throw new Error(err);
      });
  } else {
    return new Error(
      "Please provide a valid choice [signup, signin, authtest]"
    );
  }
};

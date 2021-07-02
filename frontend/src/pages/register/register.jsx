import axios from "axios";
import { useRef, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const checked = useRef();
  const history = useHistory("");

  let url = "http://localhost:3001/api";

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        axios({
          method: "post",
          data: user,
          withCredentials: true,
          url: "http://localhost:3001/api/auth/register",
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
        history.push("/login");
        // window.location.replace("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">
            Simplify <br />
            Beta
          </h3>
          <span className="registerDesc">
            Connect with your team, and get things done.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerTitle">
            <h1 className="registerTitleText">Register</h1>
          </div>
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="registerInput"
              type="password"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <button className="registerRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

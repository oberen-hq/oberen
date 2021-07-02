import "./Topbar.css";

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Nav, NavLink, Bars, NavMenu } from "./TopbarElements";

import { Avatar } from "@material-ui/core";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let history = useHistory("");

  console.log(user);

  const logout = (event) => {
    event.preventDefault();

    window.localStorage.clear();
    history.push("/logout");
    window.location.replace("/login");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={PF + "logo.png"}
            className="logo"
            alt="The Logo Of Simplify"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/docs">Documentation</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/login" onClick={logout}>
            Logout
          </NavLink>
          <NavLink to={`/profile/${user.username}`}>
            <Avatar
              className="homeHeader__avatar"
              alt="User image"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
            />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

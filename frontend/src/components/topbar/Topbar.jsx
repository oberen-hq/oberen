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
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/docs" activeStyle>
            Documentation
          </NavLink>
          <NavLink to="/services" activeStyle>
            Our Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/login" onClick={logout} activeStyle>
            Logout
          </NavLink>
          <NavLink to={`/profile/${user.username}`} activeStyle>
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

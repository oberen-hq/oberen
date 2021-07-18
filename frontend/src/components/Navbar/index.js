import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import "./active.css";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const settings = {
    smooth: true,
    duration: 500,
    spy: true,
    exact: "true",
    offset: -80,
    activeClass: "active",
  };

  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Simplify 🤑
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" {...settings}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" {...settings}>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" {...settings}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" {...settings}>
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;

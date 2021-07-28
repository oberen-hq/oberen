import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LeftPaneContainer = styled.div`
  background-color: #010606;
  color: #fff;
  min-height: 100vh;
`;

export const Header = styled.header``;

export const Navbar = styled.nav`
  padding-left: 3.3em;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
    border-radius: 1.3rem;
    background: green;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  height: 2.4em;
  width: fit-content;
  padding: 0 0.7em;
`;

export const Svg = styled.svg`
  height: 1.3em;
  color: #fff;
`;

export const PostButton = styled.button`
  background: unset;
  border: unset;
`;

export const Footer = styled.footer``;

export const Account = styled.div``;

export const Photo = styled.div``;

export const ProfileImage = styled.img``;

export const Name = styled.div``;

export const Email = styled.div``;

import { jsx, Box, Container, Flex, Button } from "theme-ui";
import Sticky from "react-stickynode";
import { useState } from "react";

import Image from "../Image";
import Logo from "../Logo";
import { NavLink } from "../Link";

import items from "./data";
import lock from "../../assets/images/icons/lock.png";

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });

  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  return <div>Header</div>;
}

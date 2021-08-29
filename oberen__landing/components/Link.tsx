import NextLink from "next/link";
import { jsx, Link as A } from "theme-ui";
import { Link as MenuLink } from "react-scroll";
import { HiOutlineChevronRight } from "react-icons/hi";
import React from "react";

interface LinkProps {
  path: string;
  label: string;
  children: React.ReactNode;
}

export function NavLink({ path, label, children, ...rest }: LinkProps) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }: LinkProps) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    img: {
      transition: "margin-left 0.3s ease-in-out 0s",
      ml: "3px",
    },
    ":hover": {
      img: {
        ml: "5px",
      },
    },
  },
};

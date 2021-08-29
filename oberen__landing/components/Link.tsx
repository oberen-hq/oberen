import NextLink from "next/link";
import { Link as A } from "theme-ui";
import { Link as MenuLink } from "react-scroll";
import React from "react";

interface LinkProps {
  path: string;
  label: string;
  children: React.ReactNode;
  sx: any;
}

export function NavLink({ path, label, children, ...rest }: any) {
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

import styles from "./Link.module.css";
import { Link as MenuLink } from "react-scroll";

interface LinkProps {
  path: string;
  label: string;
}

export function NavLink({ path, label, ...props }: LinkProps) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={0}
      smooth={true}
      duration={500}
      className={styles.navbar__navlink}
      activeClass={styles.active}
      {...props}
    >
      {label}
    </MenuLink>
  );
}

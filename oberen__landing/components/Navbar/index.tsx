import styles from "./Navbar.module.css";

import { useState } from "react";
import Provider from "../../context/provider";

import Logo from "../Logo";
import { NavLink } from "../Link";
import Image from "../Image";

import items from "./data";

export default function Navbar() {
  const [state, setState] = useState({
    isMobileMenu: false,
  });

  const handleCloseMenu = () => {
    setState({
      isMobileMenu: false,
    });
  };

  return (
    <Provider>
      <header className={styles.header__wrapper}>
        <div className={state.isMobileMenu ? styles.is_mobile_menu : ""}>
          <div className={styles.header__container}>
            <div className={styles.header__inner}>
              <Logo
                src="/logo.png"
                alt="Oberen"
                width={75}
                height={75}
                draggable={false}
              />
              <nav
                className={styles.navbar}
                style={
                  state.isMobileMenu
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <ul
                  className={styles.navbar__list}
                  style={
                    state.isMobileMenu
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  {items.map(({ path, label }, index) => (
                    <li key={index} className={styles.navbar__link}>
                      <NavLink
                        path={path}
                        label={label}
                        onClick={handleCloseMenu}
                      />
                    </li>
                  ))}
                </ul>
                <div className={styles.navbar__buttons}>
                  <button className={styles.navbar__login}>
                    <Image
                      src={require("../../assets/images/icons/lock.png")}
                      width={30}
                      height={30}
                    />
                    Login
                  </button>
                  <button className={styles.navbar__getStarted}>
                    Get Started
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Provider>
  );
}

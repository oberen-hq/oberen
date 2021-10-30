import styles from "./Navbar.module.css";

import { useState } from "react";
import Provider from "../../context/provider";

import Logo from "../Logo";
import { NavLink } from "../Link";
import Image from "../Image";

import items from "./data";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {

  return (
    <Provider>
      <header className={styles.header__wrapper}>
        <div className={styles.header__inner}>
          <Logo
            src="/logo.png"
            alt="Oberen"
            draggable={false}
            onClick={() => scroll.scrollToTop()}
          />
          <h1 className={styles.header__title}>Oberen</h1>
        </div>
        <nav
          className={styles.navbar}
        >
          <ul
            className={styles.navbar__list}
          >
            {items.map(({ path, label }, index) => (
              <li key={index} className={styles.navbar__item}>
                <NavLink
                  path={path}
                  label={label}
                  activeClass={styles.active}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.navbar__buttons}>
          <button className={styles.navbar__getStarted} disabled={true}>
            Get Started
          </button>
        </div>
      </header>
    </Provider>
  );
}

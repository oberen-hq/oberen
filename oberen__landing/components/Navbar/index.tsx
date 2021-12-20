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
      <header className={styles.navbar}>
        <nav>
        <Logo
            src="/logo.png"
            alt="Oberen"
            draggable={false}
            onClick={() => scroll.scrollToTop()}
          />

          <ul className={styles.navbar__list}>
            {items.map(({ path, label }, index) => (
              <li key={index}>
                <NavLink
                  path={path}
                  label={label}
                  activeClass={styles.active}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.container}>
          <Image src="/assets/vector.png" width={500} height={500} className={styles.container__image}/>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>description description description description.
          description description description.
          description description description description description.
          </p>
          <button>Get Started</button>
        </div>
      </header>
    </Provider>
  );
}

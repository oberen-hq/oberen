import React from "react";
import styles from "./Navbar.module.css";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.navbar}>
          <img
            src="/logo.png"
            alt="Oberon Logo"
            className={styles.navbar__logo}
          />
          <div className={styles.navbar__icons}>
            <div className={styles.navbar__icon}>
              <FaGithub />
            </div>
            <div className={styles.navbar__icon}>
              <FaGithub />
            </div>
            <div className={styles.navbar__icon}>
              <FaGithub />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;

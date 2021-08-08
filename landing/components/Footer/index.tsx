import React from "react";
import styles from "./Footer.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Footer extends React.Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className={styles.footer}>
        <img
          src="/logo.png"
          alt="Oberon"
          className={styles.footer__logo}
          onClick={() => this.scrollToTop()}
        />
      </div>
    );
  }
}

export default Footer;

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { animateScroll as scroll } from "react-scroll";

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
          draggable={false}
          className={styles.footer__logo}
          onClick={() => this.scrollToTop()}
        />
      </div>
    );
  }
}

export default Footer;

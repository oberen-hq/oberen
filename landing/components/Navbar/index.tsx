import React from "react";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import config from "../../constants";

class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className={styles.navbar} id="navbar">
        <img
          src="/logo.png"
          alt="Oberon"
          draggable={false}
          className={styles.navbar__logo}
          onClick={() => this.scrollToTop()}
        />
        <Link
          className={styles.navbar__link}
          activeClass={styles.active}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => this.scrollToTop()}
        >
          Home
        </Link>
        <a
          href={config.githubLink}
          className={styles.navbar__link}
          target="_new"
        >
          Github
        </a>
        <a
          href={config.twitterLink}
          className={styles.navbar__link}
          target="_new"
        >
          Twitter
        </a>
        <Link
          className={`${styles.navbar__link} ${styles.highlighted}`}
          activeClass={styles.active}
          to="waitlist"
          spy={true}
          smooth={true}
          duration={500}
        >
          Join Waitlist
        </Link>
      </nav>
    );
  }
}

export default Navbar;
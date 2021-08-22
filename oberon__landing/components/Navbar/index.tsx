import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.navbar}>
          <Logo />
          <div className={styles.navbar__socials}>
            <SocialButtons />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const SocialButtons = (): any => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/alfiephillips/oberon" },
    { icon: FaTwitter, link: "https://twitter.com/alfieephillipss" },
    { icon: FaDiscord, link: "https://discord.gg/7gUa76R6U2" },
  ];

  return (
    <React.Fragment>
      {socials.map((social, index) => {
        return (
          <a
            key={index}
            className={styles.navbar__social}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <social.icon />
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default Navbar;

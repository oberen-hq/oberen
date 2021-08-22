import React from "react";
import styles from "./Logo.module.css";

class Logo extends React.Component {
  render() {
    return (
      <img
        src="/logo.png"
        alt="Oberon Logo"
        className={styles.logo}
        draggable={false}
      />
    );
  }
}

export default Logo;

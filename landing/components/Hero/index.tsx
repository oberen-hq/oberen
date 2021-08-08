import React from "react";
import styles from "./Hero.module.css";

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.hero__background}>
          <div className={styles.hero__container} id="home"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;

import React from "react";
import Waitlist from "../Waitlist";
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.main__container}>
          <h1 className={styles.main__title}>
            Engage yourself into your work with a passion.
          </h1>
          <p className={styles.main__description}>
            Dive deep into any of your interests, mediated with precision to
            meet your tastes; move forward with our platform to communicate,
            apprieciate, and replicate. This is Oberon.
          </p>
          <Waitlist />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

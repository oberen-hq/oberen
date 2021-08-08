import React from "react";
import styles from "./Hero.module.css";

import TextLoop from "react-text-loop";

const adjectives = ["Test", "Yes", "No", "Lol"];

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.hero__background}>
          <div className={styles.hero__container} id="home">
            <div className={styles.hero__content}>
              <h1 className={styles.hero__slogan}>
                The place for developers to&nbsp;
                <TextLoop interval={2000}>
                  {adjectives.map((word, index) => (
                    <span key={index} className={styles.hero__slogan_adjective}>
                      {word}
                    </span>
                  ))}
                </TextLoop>
                software.
              </h1>
              <p className={styles.hero__description}>
                Blah blah blah, lorem ipsum don't know what to say here ya de ya
                de yada.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;

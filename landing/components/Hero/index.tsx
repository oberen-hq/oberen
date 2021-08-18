import React, { useState } from "react";
import styles from "./Hero.module.css";
import TextLoop from "react-text-loop";
import data from "./data";

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.hero__background}>
          <div className={styles.hero__container} id="home">
            <div className={styles.hero__content}>
              <h4 className={styles.hero__title}>
                Oberon - Lorem Ipsum doler met
              </h4>
              <h1 className={styles.hero__slogan}>
                Achieve&nbsp;
                <TextLoop interval={2000}>
                  {data.adjectives.map((word, index) => (
                    <span key={index} className={styles.hero__slogan_adjective}>
                      {word}
                    </span>
                  ))}
                </TextLoop>
              </h1>
              <p className={styles.hero__description}>
                Blah blah blah, lorem ipsum don't know what to say here ya de ya
                de yada.
              </p>
              <button>Test</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;

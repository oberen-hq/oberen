import React from "react";

import Meta from "../components/Meta";
import Navbar from "~/components/Navbar";

import styles from "~/styles/index.module.css";
import TextLoop from "react-text-loop";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Meta
        title="Oberon"
        description="Oberon is a brand new open source platform which allows you to hire temporary employers, or become a temporary employee to try new things; see what you like in a job!"
        url="https://oberon.sh"
        keywords="open source, oberon, temporary work, organizations, discovery, employment"
      />
      <Navbar />
    </React.Fragment>
  );
};

export default Home;

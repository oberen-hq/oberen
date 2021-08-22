import React from "react";

import Meta from "../partials/Meta";
import Navbar from "~/components/Navbar";

import styles from "~/styles/index.module.css";
import { ToastContainer } from "react-toastify";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Meta
        title="Oberon"
        description="Oberon is a brand new open source platform which allows you to hire temporary employers, or become a temporary employee to try new things; see what you like in a job!"
        url="https://oberon.sh"
        keywords="open source, oberon, temporary work, organizations, discovery, employment"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        limit={1}
        className={styles.toast}
      />
      <Navbar />
    </React.Fragment>
  );
};

export default Home;

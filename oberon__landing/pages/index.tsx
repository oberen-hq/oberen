import React from "react";
import Meta from "partials/Meta";
import Navbar from "~/components/Navbar";
import Main from "~/components/Main";
import styles from "~/styles/index.module.css";
import { Toaster } from "react-hot-toast";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Meta
        title="Oberon"
        description="Oberon is a brand new open source platform which allows you to hire temporary employers, or become a temporary employee to try new things; see what you like in a job!"
        url="https://oberon-test.vercel.app"
        keywords="open source, oberon, temporary work, organizations, discovery, employment"
      />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={16}
        containerClassName={styles.toast}
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className={styles.container}>
        <Navbar />
        <Main />
        <img
          src="/assets/vector.png"
          className={styles.image}
          draggable={false}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;

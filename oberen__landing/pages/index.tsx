import React from "react";
import Meta from "partials/Meta";
import styles from "~/styles/index.module.css";
import { Toaster } from "react-hot-toast";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Meta
        title="Oberen"
        description="Oberen is a brand new open source platform which allows you to hire temporary employers, or become a temporary employee to try new things; see what you like in a job!"
        url="https://oberen.vercel.app"
        keywords="open source, oberen, temporary work, organizations, discovery, employment"
      />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={16}
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
          },
        }}
      />
    </React.Fragment>
  );
};

export default Home;

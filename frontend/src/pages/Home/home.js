import Sidebar from "../../components/Home/Sidebar";
import Navbar from "../../components/Home/Navbar";
import HeroSection from "../../components/Home/HeroSection";
import InfoSection from "../../components/Home/InfoSection";
import Services from "../../components/Home/Services";
import React, { useState } from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../../components/Home/InfoSection/data";
import Footer from "../../components/Home/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;

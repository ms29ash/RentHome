import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Properties from "../components/Properties";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Properties />
      <About />
    </div>
  );
};

export default Home;

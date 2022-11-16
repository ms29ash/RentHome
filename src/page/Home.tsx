import React from "react";
import About from "../components/About";
import Amunities from "../components/Amunities";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Properties from "../components/Properties";
import Sell from "../components/Sell";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Properties />
      <About />
      <Amunities />
      <Sell />
    </div>
  );
};

export default Home;

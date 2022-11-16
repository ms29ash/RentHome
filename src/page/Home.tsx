import React from "react";
import About from "../components/About";
import Amunities from "../components/Amunities";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Properties from "../components/Properties";
import Sell from "../components/Sell";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Properties />
      <About />
      <Amunities />
      <Sell />
      <Blogs />
      <Testimonials />
    </div>
  );
};

export default Home;

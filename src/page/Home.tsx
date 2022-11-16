import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Amunities from "../components/Amunities";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Properties from "../components/Properties";
import Sell from "../components/Sell";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <Properties />
      <About />
      <Amunities />
      <Sell />
      <Blogs />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

import React from "react";
import styled from "styled-components";
import Property from "./Property";
import { PropertiesList } from "../Data/Properties";

function Properties() {
  return (
    <Section>
      <h1>Our Most Popular Trending </h1>
      <Head>Properties</Head>
      <p>
        The better impression it would make. An agency, in broad terms <br /> is
        any relationship between two parties in which
      </p>
      <Wrapper>
        {PropertiesList.map((item, index) => {
          return <Property item={item} key={index} />;
        })}
      </Wrapper>
    </Section>
  );
}

export default Properties;

const Section = styled.section`
  margin: 20vh 5vw 0vh;
  max-width: 90vw;
  h1 {
    margin: 0.75rem 0;
  }
  p {
    font-size: 14px;
  }
`;
const Head = styled.h1`
  color: ${(p) => p.theme.purple};
`;
const Wrapper = styled.div`
  margin-top: 5vh;
  display: flex;
`;

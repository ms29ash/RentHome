import React from "react";
import styled from "styled-components";
import Amunity from "./Amunity";
import { AmunityList } from "../Data/Amunities";
type AmunityProp = {
  name: string;
  description: string;
};

function Amunities() {
  return (
    <Container>
      <h2>Our Main Focus</h2>
      <Wrapper>
        {AmunityList.map((item: AmunityProp, index: number) => {
          return <Amunity key={index} item={item} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Amunities;

const Container = styled.div`
  margin: 5vh 15vw 15vh;
  h2 {
    width: 100%;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  margin-top: 8vh;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
`;

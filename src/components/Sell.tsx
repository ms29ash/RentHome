import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Sell() {
  return (
    <Section>
      <Container>
        <div>
          <h2>Let's find the right selling option for you</h2>
          <p>Get your home's value and see selling options</p>
          <Button>Start exploring</Button>
        </div>
      </Container>
      <img
        src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
    </Section>
  );
}

export default Sell;

const Section = styled.section`
  display: flex;
  margin-bottom: 10vh;
  img {
    width: 40%;
  }
`;
const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.bgPurple};
  div {
    h2 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 1.5rem;
    }
  }
`;

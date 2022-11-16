import React from "react";
import styled from "styled-components";
import Button from "./Button";

function About() {
  return (
    <Section>
      <img
        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <Container>
        <h2>
          We are Providing Top <br /> <span> real estate</span> properties
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt
          fuga consequuntur teore reprehenderit atque expedita recusandae porro,
          molestias cumque.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          temporibus.
        </p>
        <Buttons>
          <Button typeOf="primary">Learn More</Button>
          <Button
            hover={"background-color:#96acd9; color:black"}
            typeOf="secondary"
          >
            Contact us
          </Button>
        </Buttons>
      </Container>
    </Section>
  );
}

export default About;

const Section = styled.section`
  margin: 10vh 0vw 15vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30%;
    height: ;
  }
`;
const Container = styled.div`
  width: 30%;
  margin-left: 5%;
  h2 {
    text-transform: capitalize;
    line-height: 2.5rem;
    span {
      color: ${(p) => p.theme.purple};
    }
  }
  p {
    margin-top: 1rem;
    font-size: 13px;
    width: 80%;
    line-height: 1.25rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 2rem;
  button {
    margin-right: 1rem;
    width: 8rem;
    padding: 0.75rem;
  }
  &:nth-child(3) {
    &:hover {
       !important;
    }
  }
`;

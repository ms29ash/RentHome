import React from "react";
import styled from "styled-components";
import { BsShieldFillCheck } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaParking } from "react-icons/fa";
import Button from "./Button";

type AmunityProp = {
  item: {
    name: string;
    description: string;
  };
};

function Amunity(props: AmunityProp) {
  const { name, description } = props.item;
  return (
    <Container>
      <Icon>
        {name === "Private Security" ? (
          <BsShieldFillCheck />
        ) : name === "Perfect Location" ? (
          <HiLocationMarker />
        ) : (
          <FaParking />
        )}
      </Icon>
      <h3>{name}</h3>
      <p>{description}</p>
      <Button typeOf="secondary" styles={"width:7rem"}>
        More
      </Button>
    </Container>
  );
}

export default Amunity;

const Container = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px solid #00000058;
  border-radius: 1rem;
  h3 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  button {
    padding: 0.75rem 2rem;
    margin-top: 2rem;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  svg {
    font-size: 4rem;
    color: ${(p) => p.theme.purple};
    fill: ${(p) => p.theme.purple};
  }
`;

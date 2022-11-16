import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Header = () => {
  return (
    <Container>
      <img src="./logo512.png" alt="" />
      <div>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Service</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>
      <Button>Signin</Button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  padding: 2vh 5vw;
  div {
    width: 40%;
    justify-content: space-around;
    display: flex;
    a {
      font-weight: semibold;
      width: 4rem;
      text-align: center;
      &:hover {
        color: ${(p) => p.theme.purple};
        font-weight: bold;
      }
    }
  }
  img {
    width: 10rem;
  }
`;

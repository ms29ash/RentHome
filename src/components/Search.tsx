import React from "react";
import styled from "styled-components";
import { CiLocationOn, CiHome, CiShoppingTag } from "react-icons/ci";
import Button from "./Button";

function Search() {
  return (
    <Container>
      <Wrapper>
        <div>
          <CiLocationOn />
          <p>Location</p>
        </div>
        <input placeholder="New Delhi" type="text" />
      </Wrapper>
      <Wrapper>
        <div>
          <CiHome />
          <p>Home Type</p>
        </div>
        <input placeholder="Duplex House" type="text" />
      </Wrapper>
      <Wrapper>
        <div>
          <CiShoppingTag />
          <p>Max Price</p>
        </div>
        <input placeholder="₹30,00,000" type="text" />
      </Wrapper>
      <Wrapper>
        <Button typeOf="secondary">Search Property</Button>
      </Wrapper>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  right: 15%;
  left: 15%;
  bottom: -5rem;
  z-index: 50;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 1.5rem 0;
`;
const Wrapper = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    p {
      margin: 0 0;
      margin-left: 0.5rem;
    }
  }
  input {
    border: none;
    outline: none;
    margin-left: 1rem;
    &:hover {
      border: none;
    }
  }
`;

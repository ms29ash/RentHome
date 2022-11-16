import React from "react";
import styled from "styled-components";
import { BlogsList } from "../Data/Blogs";
import Blog from "./Blog";

function Blogs() {
  return (
    <Container>
      <h2>Our Blogs</h2>
      <Wrapper>
        {BlogsList.map((item, index) => {
          return <Blog item={item} key={index} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Blogs;

const Container = styled.section`
  margin-bottom: 10vh;
  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15vw;
`;

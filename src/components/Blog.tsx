import React from "react";
import styled from "styled-components";

type BlogProps = {
  item: {
    title: string;
    description: string;
    createdAt: string;
    image: string;
  };
};

function Blog({ item }: BlogProps) {
  const { title, description, createdAt, image } = item;
  return (
    <Container>
      <img src={image} alt="" />
      <Wrapper>
        <h3>{title}</h3>
        <Time>{createdAt}</Time>
        <Text>{description}</Text>
        <div>
          <a href="/">Read More</a>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Blog;

const Container = styled.section`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 20rem;

  border-radius: 1rem;
  img {
    border-radius: 1rem 1rem 0 0;
    width: 20rem;
  }
`;

const Wrapper = styled.div`
  padding: 3% 10% 5%;
  & > div {
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    a {
      text-transform: uppercase;
      font-size: 12px;
      color: ${(p) => p.theme.purple};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const Text = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.gray};
  margin-top: 1.25rem;
  line-height: 18px;
`;
const Time = styled.p`
  margin: 0.5rem 0;
  font-size: 13px;
  color: ${(p) => p.theme.gray};
`;

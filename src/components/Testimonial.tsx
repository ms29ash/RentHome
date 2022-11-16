import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

interface TestimonialProps {
  item: {
    name: string;
    username: string;
    description: string;
    img: string;
  };
}

function Testimonial({ item }: TestimonialProps) {
  const { name, username, description, img } = item;
  return (
    <Container>
      <Wrap>
        <img src={img} alt="" />
      </Wrap>
      <Wrapper>
        <h3>{name}</h3>
        <p>{username}</p>
        <Ratings>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Ratings>
        <Desc>{description}</Desc>
      </Wrapper>
    </Container>
  );
}

export default Testimonial;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  flex-direction: column;
  width: 20rem;
`;
const Wrap = styled.div`
  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
  }
`;

const Desc = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${(p) => p.theme.gray};
  margin-top: 1.25rem;
  line-height: 1.25rem;
`;

const Ratings = styled.div`
  display: flex;
  margin-top: 1rem;
  svg {
    color: ${(p) => p.theme.purple};
  }
`;

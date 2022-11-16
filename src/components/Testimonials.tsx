import React from "react";
import styled from "styled-components";
import { testimonialList } from "../Data/Testimonial";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <Section>
      <h2>
        Clients say<span> About us</span>
      </h2>
      <Wrapper>
        {testimonialList.map((item, index) => {
          return <Testimonial item={item} key={index} />;
        })}
      </Wrapper>
    </Section>
  );
}

export default Testimonials;

const Section = styled.section`
  padding: 10vh 10vw 10vh;
  background-color: ${(p) => p.theme.bgPurple};
  h2 {
    text-align: center;
    width: 100%;
    margin-bottom: 4rem;
    span {
      color: ${(p) => p.theme.purple};
    }
  }
`;
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  P {
    color: ${(p) => p.theme.gray};
  }
`;

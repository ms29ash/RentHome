import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <Section>
      <Wrapper>
        <Img src="./logo512.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          quibusdam ipsa tempora culpa iure delectus.
        </p>
        <Social>
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedinIn />
          </a>
          <a href="/">
            <FaWhatsapp />
          </a>
        </Social>
      </Wrapper>
      <Wrapper>
        <h3>Quick Access</h3>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Property</a>
        <a href="/">Agent</a>
        <a href="/">Testimonial</a>
      </Wrapper>
      <Wrapper>
        <h3>Services</h3>
        <a href="/">Help Center</a>
        <a href="/">Rent</a>
        <a href="/">Buy</a>
        <a href="/">Sell</a>
        <a href="/">Contact us</a>
      </Wrapper>
      <Wrapper>
        <h3>Contact us</h3>
        <Wrap href="/">
          <HiPhone />
          <p>+91xxxxxxx</p>
        </Wrap>
        <Wrap href="/">
          <IoMail />
          <p>renthousenow@gmail.com</p>
        </Wrap>
        <Wrap href="/">
          <LocationIcon />
          <p>Malkaganj Marg, University Enclave,New Delhi,110007</p>
        </Wrap>
      </Wrapper>
    </Section>
  );
}

export default Footer;

const Section = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10vh 5vw;
`;
const Wrapper = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: column;
  h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 1.15rem;
  }
  a {
    font-size: 0.8rem;
    color: ${(p) => p.theme.gray};
    font-weight: 500;
    margin-top: 1rem;
    &:hover {
      color: ${(p) => p.theme.purple};
    }
    p {
      line-height: 0.8rem;
    }
  }
  & > p {
    font-size: 0.8rem;
    margin-top: 1rem;
    line-height: 1.2rem;
  }
`;

const Img = styled.img`
  width: 8rem;
`;

const Wrap = styled.a`
  display: flex;
  align-items: flex-start;
  margin: 0.5rem 0;
  & > p {
    line-height: 1.25rem !important;
    margin-left: 0.25rem;
  }
  & > svg {
    font-size: 1.25rem;
  }
`;

const LocationIcon = styled(HiLocationMarker)`
  font-size: 1.75rem !important;
`;
const Social = styled.div`
  display: flex;
  margin-top: 1.5rem;
  a {
    margin-right: 1rem;
    svg {
      font-size: 1.25rem;
      color: ${(p) => p.theme.gray};
      &:hover {
        color: ${(p) => p.theme.purple};
      }
    }
  }
`;

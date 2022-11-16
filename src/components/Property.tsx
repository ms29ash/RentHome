import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdBed, MdOutlineBathtub } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";

type PropertyProps = {
  item: {
    img: string;
    price: number;
    name: string;
    description: string;
    bed: number;
    bth: number;
    space: number;
  };
};

function Property({ item }: PropertyProps) {
  const { img, price, name, description, bed, bth, space } = item;
  return (
    <Container>
      <img src={img} alt="" />
      <Badge>For Sale</Badge>
      <Wrapper>
        <Price>
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            renderText={(value: any) => <h3>{value}</h3>}
          />
          <Icons>
            <button>
              <CiShare2 />
            </button>
            <button>
              <CiHeart />
            </button>
          </Icons>
        </Price>
        <h3>{name}</h3>
        <p>{description}</p>
        <Facility>
          <div>
            <MdBed />
            <p>{bed} bd</p>
          </div>
          <div>
            <MdOutlineBathtub />
            <p>{bth} bth</p>
          </div>
          <div>
            <BsArrowsFullscreen />
            <p>{space} sqft</p>
          </div>
        </Facility>
      </Wrapper>
    </Container>
  );
}

export default Property;

const Container = styled.div`
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 20rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  }
  img {
    width: 20rem;
    height: 15rem;
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
  }
  h3 {
    margin: 1rem 0;
  }
  p {
    font-size: 12px;
    line-height: 1.2rem;
    margin: 0.5rem 0;
  }
`;

const Badge = styled.div`
  background-color: ${(p) => p.theme.purple};
  color: white;
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 12px;
  padding: 0.25rem 0.75rem;
  font-weight: semibold;
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  padding: 0 1rem 1.5rem;
  user-select: none;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h3 {
    color: ${(p) => p.theme.purple};
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  & > button {
    margin-left: 1rem;
    background-color: #96acd95f;
    border-radius: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      font-size: 1.25rem;
    }
    &:hover {
      background-color: ${(p) => p.theme.purple};
      color: #fff;
      cursor: pointer;
    }
  }
`;

const Facility = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    align-items: center;
    display: flex;
    p {
      margin-left: 10px;
    }
  }
  svg {
    color: ${(p) => p.theme.purple};
  }
`;

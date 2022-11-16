import React from "react";
import styled from "styled-components";

type Type = {
  typeOf?: "primary" | "secondary";
};

type StyledProps = {
  styles?: string;
  hover?: string;
};
type ButtonProps = Type &
  StyledProps & {
    children: React.ReactNode;
  };

const Button = ({ children, typeOf, styles, hover }: ButtonProps) => {
  return (
    <>
      {typeOf === "primary" || typeOf === undefined ? (
        <PrimaryBtn hover={hover} styles={styles}>
          {children}
        </PrimaryBtn>
      ) : (
        <SecondaryBtn hover={hover} styles={styles}>
          {children}
        </SecondaryBtn>
      )}
    </>
  );
};

export default Button;

const Btn = styled.button`
  padding: 1rem;
  width: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const PrimaryBtn = styled(Btn)<StyledProps>`
  background-color: ${(p) => p.theme.purple};
  color: #fff;
  ${(p) => p?.styles};
`;

const SecondaryBtn = styled(Btn)<StyledProps>`
  border: ${(p) => `1px solid ${p.theme.purple}`};
  background-color: #fff;
  &:hover {
    background-color: ${(p) => p.theme.purple};
    color: white;
    ${(p) => p?.hover};
  }
  ${(p) => p?.styles};
`;

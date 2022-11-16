import styled from "styled-components";
import Button from "../components/Button";
import Search from "../components/Search";

const Intro = () => {
  return (
    <Container>
      <Wrapper>
        <h2>
          Find your
          <h1>
            best <span> smart home</span>
          </h1>
        </h2>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          aliquam explicabo ipsa, quo illo ullam.
        </SubTitle>
        <Button>Learn More</Button>
      </Wrapper>
      <img src="./intro.jpg" alt="" />
      <Search />
    </Container>
  );
};

export default Intro;

const Container = styled.section`
  display: flex;
  position: relative;
  img {
    width: 50vw;
  }
`;
const Wrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.bgPurple};
  padding: 0 8%;
  justify-content: center;
  h2 {
    width: max-content;
    text-transform: capitalize;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    h1 {
      font-size: 3rem;
      span {
        font-weight: extrabold;
        color: ${(p) => p.theme.purple};
      }
    }
  }
`;
const SubTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 14px;
`;

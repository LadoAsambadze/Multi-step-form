import { styled } from "styled-components";

export default function Mobile() {
  return (
    <>
      <Main>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
      </Main>
    </>
  );
}

const Main = styled.div`
  padding: 32px 20% 32px 20%;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1400px) {
    display: none;
  }
`;
const PageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: #bee2fd;
`;

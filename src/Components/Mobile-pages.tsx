import { styled } from "styled-components";
import { useSelector } from "react-redux";

export default function Mobile() {
  const page = useSelector((store: any) => store.page.Number);
  return (
    <>
      <Main>
        <PageButton
          style={{
            background: page === 1 ? "#bee2fd" : "none",
            color: page === 1 ? "#022959" : "white",
          }}
        >
          1
        </PageButton>
        <PageButton
          style={{
            background: page === 2 ? "#bee2fd" : "none",
            color: page === 2 ? "#022959" : "white",
          }}
        >
          2
        </PageButton>
        <PageButton
          style={{
            background: page === 3 ? "#bee2fd" : "none",
            color: page === 3 ? "#022959" : "white",
          }}
        >
          3
        </PageButton>
        <PageButton
          style={{
            background: page === 4 ? "#bee2fd" : "none",
            color: page === 4 ? "#022959" : "white",
          }}
        >
          4
        </PageButton>
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

import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setPage } from "../store/PageNum";

export default function Mobile() {
  const page = useSelector((store: any) => store.page.Number);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  localStorage.setItem("pagenum", JSON.stringify(page));
  useEffect(() => {
    const getNum = JSON.parse(localStorage.getItem("pagenum") || "false");
    dispatch(setPage(getNum));
  }, []);

  console.log(page);
  return (
    <>
      <Main>
        <PageButton
          style={{
            background: page === 1 ? "#bee2fd" : "none",
            color: page === 1 ? "#022959" : "white",
          }}
          onClick={() => {
            navigate("/");
            dispatch(setPage(1));
          }}
        >
          1
        </PageButton>
        <PageButton
          style={{
            background: page === 2 ? "#bee2fd" : "none",
            color: page === 2 ? "#022959" : "white",
          }}
          onClick={() => {
            navigate("/plan");
            dispatch(setPage(2));
          }}
        >
          2
        </PageButton>
        <PageButton
          style={{
            background: page === 3 ? "#bee2fd" : "none",
            color: page === 3 ? "#022959" : "white",
          }}
          onClick={() => {
            navigate("/addons");
            dispatch(setPage(3));
          }}
        >
          3
        </PageButton>
        <PageButton
          style={{
            background: page === 4 ? "#bee2fd" : "none",
            color: page === 4 ? "#022959" : "white",
          }}
          onClick={() => {
            navigate("/finish");
            dispatch(setPage(4));
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

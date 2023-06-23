import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPage } from "../store/PageNum";
import { useLocation } from "react-router-dom";
export default function Mobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <Main>
        <PageButton
          style={{
            background: location.pathname === "/" ? "#bee2fd" : "none",
            color: location.pathname === "/" ? "#022959" : "white",
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
            background: location.pathname === "/plan" ? "#bee2fd" : "none",
            color: location.pathname === "/plan" ? "#022959" : "white",
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
            background: location.pathname === "/addons" ? "#bee2fd" : "none",
            color: location.pathname === "/addons" ? "#022959" : "white",
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
            background: location.pathname === "/finish" ? "#bee2fd" : "none",
            color: location.pathname === "/finish" ? "#022959" : "white",
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

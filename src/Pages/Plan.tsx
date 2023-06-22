import { styled } from "styled-components";
import DesktopPages from "../Components/Desktop-pages";
import Mobile from "../Components/Mobile-pages";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPage } from "../store/PageNum";
import { setActive } from "../store/Active";
import { useState } from "react";
import { setBase } from "../store/DataBase";
import { useEffect } from "react";

export default function Plan() {
  const base = useSelector((store: any) => store.base);
  const active = useSelector((store: any) => store.active.Boolean);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);
  const [hasMount, setHasMount] = useState(false);

  useEffect(() => {
    hasMounted
      ? localStorage.setItem("base", JSON.stringify(base))
      : setHasMounted(true);
  }, [base, hasMounted]);

  useEffect(() => {
    hasMount
      ? localStorage.setItem("btn", JSON.stringify(active))
      : setHasMount(true);
  }, [active]);

  useEffect(() => {
    const newBtn = JSON.parse(localStorage.getItem("btn") || "false");
    dispatch(setActive(newBtn));
  }, [active]);

  console.log(active);
  const nextHandler = () => {
    dispatch(setPage(3));
    navigate("/addons");
  };

  const backHandler = () => {
    dispatch(setPage(1));
    navigate("/");
  };

  const activeHandler = () => {
    dispatch(setActive(!active));
  };

  useEffect(() => {
    if (base.mode === "arcade") {
      if (!active) {
        dispatch(setBase({ property: "price", value: "$9/mo" }));
      } else dispatch(setBase({ property: "price", value: "$90/year" }));
    } else if (base.mode === "advanced") {
      if (!active) {
        dispatch(setBase({ property: "price", value: "$12/mo" }));
      } else dispatch(setBase({ property: "price", value: "$120/year" }));
    } else if (base.mode === "pro") {
      if (!active) {
        dispatch(setBase({ property: "price", value: "$15/mo" }));
      } else dispatch(setBase({ property: "price", value: "$150/year" }));
    }
  });
  
  return (
    <>
      <Section>
        <SectionBack>
          <DesktopPages />
          <Main>
            <Mobile />
            <div>
              <Info>
                <Header>Personal info</Header>
                <Instruction>
                  Please provide your name, email address, and phone number.
                </Instruction>
              </Info>
              <Form>
                <Sector>
                  <ModeDiv
                    style={{
                      border:
                        base.mode === "arcade"
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                    }}
                    onClick={() => {
                      dispatch(setBase({ property: "mode", value: "arcade" }));
                    }}
                  >
                    <Icon src="icon-arcade.svg" />
                    <ModeTextDiv>
                      <ModeHeader>Arcade</ModeHeader>
                      <Price>{!active ? "$9/mo" : "$90/year"}</Price>
                    </ModeTextDiv>
                  </ModeDiv>
                  <ModeDiv
                    style={{
                      border:
                        base.mode === "advanced"
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                    }}
                    onClick={() => {
                      dispatch(
                        setBase({ property: "mode", value: "advanced" })
                      );
                    }}
                  >
                    <Icon src="icon-advanced.svg" />
                    <ModeTextDiv>
                      <ModeHeader>Advanced</ModeHeader>
                      <Price>{!active ? "$12/mo" : "$120/year"}</Price>
                    </ModeTextDiv>
                  </ModeDiv>
                  <ModeDiv
                    style={{
                      border:
                        base.mode === "pro"
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                    }}
                    onClick={() => {
                      dispatch(setBase({ property: "mode", value: "pro" }));
                    }}
                  >
                    <Icon src="icon-pro.svg" />
                    <ModeTextDiv>
                      <ModeHeader>Pro</ModeHeader>
                      <Price>{!active ? "$15/mo" : "$150/year"}</Price>
                    </ModeTextDiv>
                  </ModeDiv>
                </Sector>
                <ButtonDiv>
                  <Month>Monthly</Month>
                  <Button
                    style={{
                      justifyContent: active ? "flex-end" : "flex-start",
                      background: active ? "#022959" : "gray",
                    }}
                    onClick={activeHandler}
                  >
                    <Circle></Circle>
                  </Button>
                  <Year>Yearly</Year>
                </ButtonDiv>
                <NextDivDesktop>
                  <Back onClick={backHandler}>Go Back</Back>
                  <NextButtonDesktop
                    onClick={() => {
                      if (base.mode !== "null") {
                        nextHandler();
                      }
                    }}
                  >
                    Next Step
                  </NextButtonDesktop>
                </NextDivDesktop>
              </Form>
            </div>
          </Main>
          <NextDiv>
            <Back onClick={backHandler}>Go Back</Back>
            <NextButton
              onClick={() => {
                if (base.mode !== "null") {
                  nextHandler();
                }
              }}
            >
              Next Step
            </NextButton>
          </NextDiv>
        </SectionBack>
      </Section>
    </>
  );
}

const Section = styled.section`
  padding: 0;

  @media (min-width: 1400px) {
    width: 100%;
    min-height: 100vh;
    padding: 0px 250px 0px 250px;
    display: flex;
    align-items: center;
    background: #eff5ff;
  }
`;
const SectionBack = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background: white;
    padding: 16px;
    padding-bottom: 32px;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
    border-radius: 15px;
  }
`;

const Main = styled.div`
  width: 100%;
  background-image: url("bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  background-color: #eff5ff;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
  @media (min-width: 1400px) {
    background: none;
    padding: 0px 127px 0px 100px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 32px 24px;
  background-color: white;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;
  @media (min-width: 1400px) {
    box-shadow: none;
  }
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #022959;
  @media (min-width: 1400px) {
    font-size: 32px;
    line-height: 37px;
  }
`;

const Instruction = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #9699aa;
  margin-top: 9px;
  @media (min-width: 1400px) {
    margin-top: 11px;
  }
`;

const Form = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1400px) {
    margin-top: 0;
  }
`;

const Sector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  @media (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`;

const ModeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 17px 152px 20px 16px;
  background: #f8f9ff;
  border-radius: 8px;
  margin-bottom: 12px;
  cursor: pointer;

  @media (min-width: 1400px) {
    padding: 20px 50px 20px 16px;
    flex-direction: column;
    align-items: flex-start;
    width: 138px;
    margin-bottom: 0;
  }
`;

const Icon = styled.img``;

const ModeTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  @media (min-width: 1400px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;

const ModeHeader = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #022959;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
  margin-top: 7px;
`;

const ButtonDiv = styled.div`
  background: #f8f9ff;
  border-radius: 8px;
  width: 100%;
  padding: 14px 56px 14px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Month = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #022959;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  background: #022959;
  border-radius: 10px;
  width: 38px;
  height: 20px;
  margin-left: 24px;
  cursor: pointer;
`;
const Circle = styled.div`
  background: white;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

const Year = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-left: 24px;
  color: #9699aa;
`;

const NextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px 16px 16px 16px;
  cursor: pointer;
  @media (min-width: 1400px) {
    display: none;
  }
`;

const NextButton = styled.button`
  background: #022959;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  padding: 12px 16px 12px 16px;
  border: none;
`;

const NextDivDesktop = styled.div`
  display: none;
  @media (min-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-top: 105px;
  }
`;
const NextButtonDesktop = styled.button`
  display: none;
  cursor: pointer;
  @media (min-width: 1400px) {
    background: #022959;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    padding: 12px 16px 12px 16px;
    border: none;
    display: block;
    text-decoration: none;
  }
`;

const Back = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #9699aa;
  cursor: pointer;
`;

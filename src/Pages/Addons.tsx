import { styled } from "styled-components";
import DesktopPages from "../Components/Desktop-pages";
import Mobile from "../Components/Mobile-pages";
import { useNavigate } from "react-router-dom";
import { setPage } from "../store/PageNum";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { setBase } from "../store/DataBase";
export default function Addons() {
  const active = useSelector((store: any) => store.active.Boolean);
  const base = useSelector((store: any) => store.base);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState([false, false, false]);

  const nextHandler = () => {
    dispatch(setPage(4));
    navigate("/finish");
  };
  const backHandler = () => {
    dispatch(setPage(2));
    navigate("/plan");
  };

  const handleCheckboxClick = (index: number) => () => {
    const newCheckedValues = [...checkedValues];
    newCheckedValues[index] = !newCheckedValues[index];
    setCheckedValues(newCheckedValues);
  };

  const serviceRef = useRef<HTMLSpanElement | null>(null);
  const storageRef = useRef<HTMLSpanElement | null>(null);
  const profileRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    dispatch(
      setBase({
        property: "Online Service",
        value:
          checkedValues[0] === true
            ? serviceRef?.current?.textContent ?? ""
            : "",
      })
    );
    dispatch(
      setBase({
        property: "Local Storage",
        value:
          checkedValues[1] === true
            ? storageRef?.current?.textContent ?? ""
            : "",
      })
    );
    dispatch(
      setBase({
        property: "Customizable Profile",
        value:
          checkedValues[2] === true
            ? profileRef?.current?.textContent ?? ""
            : "",
      })
    );
  }, [checkedValues]);

  console.log(base);
  console.log(checkedValues);
  return (
    <>
      <Section>
        <SectionBack>
          <DesktopPages />
          <Main>
            <Mobile />
            <div>
              <Info>
                <Header>Pick add-ons</Header>
                <Instruction>
                  Add-ons help enhance your gaming experience.
                </Instruction>
                <Form>
                  <AddonDiv>
                    <ChooseDiv
                      style={{
                        border: checkedValues[0]
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                      }}
                      onClick={handleCheckboxClick(0)}
                    >
                      <CheckBox
                        style={{
                          background: checkedValues[0] ? "#483EFF" : "white",
                          borderColor: checkedValues[0] ? "#D6D9E6" : "",
                        }}
                      >
                        {checkedValues[0] ? (
                          <img src="icon-checkmark.svg" />
                        ) : null}
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Online service</TextHeader>
                        <TextP>Access to multiplayer games</TextP>
                      </ChooseTextDiv>
                      <Dollar ref={serviceRef}>
                        {!active ? "+$1/mo" : "+$10/yr"}
                      </Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <AddonDiv>
                    <ChooseDiv
                      style={{
                        border: checkedValues[1]
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                      }}
                      onClick={handleCheckboxClick(1)}
                    >
                      <CheckBox
                        style={{
                          background: checkedValues[1] ? "#483EFF" : "white",
                          borderColor: checkedValues[1] ? "#D6D9E6" : "",
                        }}
                      >
                        {checkedValues[1] ? (
                          <img src="icon-checkmark.svg" />
                        ) : null}
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Larger storage</TextHeader>
                        <TextP>Extra 1TB of cloud save</TextP>
                      </ChooseTextDiv>
                      <Dollar ref={storageRef}>
                        {!active ? "+$2/mo" : "+$20/yr"}
                      </Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <AddonDiv>
                    <ChooseDiv
                      style={{
                        border: checkedValues[2]
                          ? "1px solid #483eff"
                          : "1px solid #D6D9E6",
                      }}
                      onClick={handleCheckboxClick(2)}
                    >
                      <CheckBox
                        style={{
                          background: checkedValues[2] ? "#483EFF" : "white",
                          borderColor: checkedValues[2] ? "#D6D9E6" : "",
                        }}
                      >
                        {checkedValues[2] ? (
                          <img src="icon-checkmark.svg" />
                        ) : null}
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Customizable profile</TextHeader>
                        <TextP>Custom theme on your profile</TextP>
                      </ChooseTextDiv>
                      <Dollar ref={profileRef}>
                        {!active ? "+$2/mo" : "+$20/yr"}
                      </Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <NextDivDesktop>
                    <Back onClick={backHandler}>Go Back</Back>

                    <NextButtonDesktop onClick={nextHandler}>
                      Next Step
                    </NextButtonDesktop>
                  </NextDivDesktop>
                </Form>
              </Info>
            </div>
          </Main>
          <NextDiv>
            <Back onClick={backHandler}>Go Back</Back>
            <NextButton onClick={nextHandler} type="submit">
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
  padding-bottom: 100px;
  @media (min-width: 1400px) {
    background: none;
    padding: 0px 100px 0px 100px;
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
    margin-top: 35px;
  }
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

const AddonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  cursor: pointer;
`;

const ChooseDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  border: 1px solid #483eff;
  border-radius: 8px;
`;

const CheckBox = styled.div`
  background: #483eff;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d6d9e6;
`;

const ChooseTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const TextHeader = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #022959;
`;
const TextP = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #9699aa;
  margin-top: 3px;
`;

const Dollar = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: #483eff;
  margin-left: 20px;
`;

const NextDivDesktop = styled.div`
  display: none;
  @media (min-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-top: 95px;
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
  }
`;

const Back = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #9699aa;
  cursor: pointer;
`;

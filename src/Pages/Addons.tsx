import { styled } from "styled-components";
import DesktopPages from "../Components/Desktop-pages";
import Mobile from "../Components/Mobile-pages";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setPage } from "../store/PageNum";
export default function Addons() {
  const page = useSelector((store: any) => store.page.Number);
  const dispatch = useDispatch();

  const nextHandler = () => {
    dispatch(setPage(4));
  };
  console.log(page);
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
                    <ChooseDiv>
                      <CheckBox>
                        <img src="icon-checkmark.svg" />
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Online service</TextHeader>
                        <TextP>Access to multiplayer games</TextP>
                      </ChooseTextDiv>
                      <Dollar>+$1/mo</Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <AddonDiv>
                    <ChooseDiv>
                      <CheckBox>
                        <img src="icon-checkmark.svg" />
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Larger storage</TextHeader>
                        <TextP>Extra 1TB of cloud save</TextP>
                      </ChooseTextDiv>
                      <Dollar>+$2/mo</Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <AddonDiv>
                    <ChooseDiv>
                      <CheckBox>
                        <img src="icon-checkmark.svg" />
                      </CheckBox>
                      <ChooseTextDiv>
                        <TextHeader>Customizable profile</TextHeader>
                        <TextP>Custom theme on your profile</TextP>
                      </ChooseTextDiv>
                      <Dollar>+$2/mo</Dollar>
                    </ChooseDiv>
                  </AddonDiv>
                  <NextDivDesktop>
                    <Link to="/finish">
                      <NextButtonDesktop onClick={nextHandler}>
                        Next Step
                      </NextButtonDesktop>
                    </Link>
                  </NextDivDesktop>
                </Form>
              </Info>
            </div>
          </Main>
          <NextDiv>
            <Link to="/finish">
              <NextButton onClick={nextHandler} type="submit">
                Next Step
              </NextButton>
            </Link>
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
  justify-content: flex-end;
  background-color: white;
  padding: 16px 16px 16px 0px;
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
  padding: 5px 7px 5px 7px;
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
    justify-content: flex-end;
    background-color: white;
    margin-top: 95px;
  }
`;
const NextButtonDesktop = styled.button`
  display: none;
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

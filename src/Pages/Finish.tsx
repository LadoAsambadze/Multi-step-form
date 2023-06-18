import { styled } from "styled-components";
import DesktopPages from "../Components/Desktop-pages";
import Mobile from "../Components/Mobile-pages";

export default function Finish() {
  return (
    <>
      <Section>
        <SectionBack>
          <DesktopPages />
          <Main>
            <Mobile />
            <div>
              <Info>
                <Header>Finishing up</Header>
                <Instruction>
                  Double-check everything looks OK before confirming.
                </Instruction>
                <Form>
                  <Single>
                    <MainTextDiv>
                      <DoubleTextDiv>
                        <TextHeader>Arcade (Yearly)</TextHeader>
                        <TextP>Change</TextP>
                      </DoubleTextDiv>
                      <Dollar>$90/yr</Dollar>
                    </MainTextDiv>
                    <Line></Line>
                    <MainTextDiv>
                      <TextS>Online service</TextS>
                      <Dollar>+$10/yr</Dollar>
                    </MainTextDiv>
                    <MainTextDiv>
                      <TextS>Larger storage</TextS>
                      <Dollar>+$20/yr</Dollar>
                    </MainTextDiv>
                  </Single>
                  <FinalDiv>
                    <TextS>Total (per year)</TextS>
                    <Dollar>$120/yr</Dollar>
                  </FinalDiv>
                  <NextDivDesktop>
                    <NextButtonDesktop>Confirm</NextButtonDesktop>
                  </NextDivDesktop>
                </Form>
              </Info>
            </div>
          </Main>
          <NextDiv>
            <NextButton type="submit">Confirm</NextButton>
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
  padding-bottom: 120px;
  @media (min-width: 1400px) {
    background: none;
    padding: 0px 84px 0px 100px;
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

const Single = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f9ff;
  border-radius: 8px;
  padding: 16px;
`;
const MainTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

const DoubleTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextHeader = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #022959;
`;

const TextP = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #9699aa;
  margin-top: 3px;
`;
const Dollar = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #022959;
`;

const Line = styled.div`
  background: #9699aa;
  mix-blend-mode: normal;
  opacity: 0.2;
  width: 100%;
  height: 1px;
  margin-bottom: 12px;
`;

const TextS = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9699aa;
`;

const FinalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px 0px 16px;
`;
const NextDivDesktop = styled.div`
  display: none;
  @media (min-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: white;
    margin-top: 120px;
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

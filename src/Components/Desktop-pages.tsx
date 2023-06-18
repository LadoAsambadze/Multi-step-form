import { styled } from "styled-components";

export default function DesktopPages() {
  return (
    <>
      <DesktopNum>
        <StepNumDiv>
          <NumCircle>1</NumCircle>
          <NumTextDiv>
            <Step>Step 1</Step>
            <Description>YOUR INFO</Description>
          </NumTextDiv>
        </StepNumDiv>
        <StepNumDiv>
          <NumCircle>2</NumCircle>
          <NumTextDiv>
            <Step>Step 2</Step>
            <Description>SELECT PLAN</Description>
          </NumTextDiv>
        </StepNumDiv>
        <StepNumDiv>
          <NumCircle>3</NumCircle>
          <NumTextDiv>
            <Step>Step 3</Step>
            <Description>ADD-ONS</Description>
          </NumTextDiv>
        </StepNumDiv>
        <StepNumDiv>
          <NumCircle>4</NumCircle>
          <NumTextDiv>
            <Step>Step 4</Step>
            <Description>YOUR INFO</Description>
          </NumTextDiv>
        </StepNumDiv>
      </DesktopNum>
    </>
  );
}

const DesktopNum = styled.div`
  display: none;
  @media (min-width: 1400px) {
    background: url("bg-sidebar-desktop.svg");
    width: 300px;
    height: 568px;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: block;
    padding: 40px 0px 300px 32px;
  }
`;

const StepNumDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

const NumCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #bee2fd;
  color: #022959;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 1px solid #ffffff;
`;
const NumTextDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;
`;

const Step = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #abbcff;
`;

const Description = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 4px;
`;

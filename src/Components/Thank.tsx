import { styled } from "styled-components";

export default function Thank(props: { thank: boolean }) {
  const { thank } = props;
  return (
    <>
      <ThankYou style={{ display: thank ? "flex" : "none" }}>
        <img src="icon-thank-you.svg" alt="thank you icon" />
        <ThankHead>Thank You!</ThankHead>
        <ThankP>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </ThankP>
      </ThankYou>
    </>
  );
}

const ThankYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 79px 24px 79px 24px;
  background: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;

  @media (min-width: 1400px) {
    padding: 165px 0px 165px 0px;
  }
`;
const ThankHead = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-top: 32px;
  @media (min-width: 1400px) {
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #022959;
    margin-top: 32px;
  }
`;
const ThankP = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  margin-top: 9px;
  color: #9699aa;
  @media (min-width: 1400px) {
    margin-top: 14px;
  }
`;

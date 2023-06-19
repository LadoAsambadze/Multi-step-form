import { styled } from "styled-components";
import Mobile from "../Components/Mobile-pages";
// import { SubmitHandler, useForm } from "react-hook-form";
import DesktopPages from "../Components/Desktop-pages";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setPage } from "../store/PageNum";
import { useDispatch } from "react-redux/es/exports";

// interface Type {
//   name: string;
//   email: string;
//   number: number;
// }

export default function PersonalInfo() {
  // const { register, handleSubmit } = useForm<Type>();

  // const onSubmit: SubmitHandler<Type> = (data) => {
  //   console.log(data);
  // };
  const dispatch = useDispatch();
  const page = useSelector((store: any) => store.page.Number);
  const nextHandler = () => {
    dispatch(setPage(2));
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
                <Header>Personal info</Header>
                <Instruction>
                  Please provide your name, email address, and phone number.
                </Instruction>

                <Form>
                  <Label style={{ marginTop: 0 }}>Name</Label>
                  <Input
                    placeholder="e.g. Stephen King"
                    type="string"
                    // {...register("name")}
                  />
                  <Label>Email Address</Label>
                  <Input
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    // {...register("email")}
                  />
                  <Label>Phone Number</Label>
                  <Input
                    placeholder="e.g. +1 234 567 890"
                    type="number"
                    // {...register("number")}
                  />
                  <NextDivDesktop>
                    <Link to="/plan">
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
            <Link to="/plan">
              <NextButton type="submit" onClick={nextHandler}>
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
  padding-bottom: 135px;
  @media (min-width: 1400px) {
    background: none;
    padding: 0px 85px 0px 100px;
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

const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #022959;
  margin-top: 16px;
  @media (min-width: 1400px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

const Input = styled.input`
  margin-top: 3px;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  background: #ffffff;
  border: 1px solid #d6d9e6;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  color: #022959;
  ::placeholder {
    color: #9699aa;
  }

  @media (min-width: 1400px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-top: 8px;
    padding-top: 15px;
    padding-bottom: 15px;
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

const NextDivDesktop = styled.div`
  display: none;
  @media (min-width: 1400px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: white;
    padding: 16px 16px 0px 0px;
    margin-top: 135px;
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

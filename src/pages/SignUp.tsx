import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Header/Button";
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo";

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    fullName: "",
    password: "",
    passwordConfirmation: "",
  });

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Container>
        <StyledH1>Sign Up</StyledH1>
        <StyledForm>
          <StyledInput
            placeholder="full name"
            type={"text"}
            value={signUpInfo.fullName}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, fullName: e.target.value })
            }
          />
          <StyledInput
            placeholder="email"
            type={"email"}
            value={signUpInfo.email}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, email: e.target.value })
            }
          />
          <StyledInput
            placeholder="password"
            type={"password"}
            value={signUpInfo.password}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, password: e.target.value })
            }
          />
          <Button
            type={"submit"}
            width={"100%"}
            onClick={() => console.log(signUpInfo)}
          >
            Sign Up
          </Button>
        </StyledForm>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  margin-top: 60px;
  padding-left: 60px;
  padding-right: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledH1 = styled.div`
  font-size: 50px;
  font-weight: 700;
  font-family: "DM Sans";
  text-align: center;

  margin-top: 12vh;
  margin-bottom: 24px;
`;

const StyledForm = styled.form`
  max-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 100%;

  padding: 0px 15px;

  background-color: #2f2f2f;

  border: none;
  border-radius: 30px;

  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #bcbabb;

  &:focus {
    outline: none;
  }
`;

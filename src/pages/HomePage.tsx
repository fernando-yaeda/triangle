import { UserCircle } from "@phosphor-icons/react";
import styled from "styled-components";
import facebookLogo from "../assets/facebook-logo.png";
import googleLogo from "../assets/google-logo.png";
import Button from "../components/Button/index";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Text } from "../components/Text";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Auth>
        <UserCircle size={110} />

        <Text variant="displayMd">Sign in to Triangle</Text>
        <Text color="darkGrey" variant="textMdRegular">
          Dont have an account? Sign Up
        </Text>

        <Button width="100%" variant="whiteAndGrey">
          <img src={googleLogo} alt="google logo" />
          Sign in with Google
        </Button>
        <Button width="100%" variant="whiteAndGrey">
          <img src={facebookLogo} alt="facebook logo" />
          Sign in with Facebook
        </Button>

        <Divider>{"OR"}</Divider>

        <AuthForm>
          <Label htmlFor="email">Email Address</Label>
          <Input type="text" id="email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" />
          <Button width="100%">Login</Button>
        </AuthForm>
      </Auth>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Auth = styled.form`
  min-height: 620px;
  width: 460px;

  margin-top: 100px;
  padding: 18px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 16px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  border-radius: 12px;
`;

const AuthForm = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

interface DividerProps {
  children?: string;
}

function Divider({ children }: DividerProps) {
  return (
    <DividerContainer>
      <Line />
      {children && (
        <>
          <Text color="darkGrey" variant="textXsRegular">
            {children}
          </Text>
          <Line />
        </>
      )}
    </DividerContainer>
  );
}

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 0px 0px;
`;

const Label = styled.label`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  margin-bottom: -8px;

  color: ${(props) => props.theme.colors.darkGrey};
`;

const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 0 16px;

  border: none;
  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  background-color: ${(props) => props.theme.colors.lightGrey};

  font-size: ${(props) => props.theme.fontVariants.textMd.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textMd.lineHeight};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.mediumGrey};

    transition: none;
  }
`;

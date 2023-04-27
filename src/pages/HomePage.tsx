import { UserCircle } from "@phosphor-icons/react";
import styled from "styled-components";
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
        <Text>Sign in to Triangle</Text>
        <Text>Dont have an account? Sign Up</Text>
        <Button width="100%">Sign up with Google</Button>
        <Button width="100%">Sign up with Facebook</Button>
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

  gap: 8px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  border-radius: 12px;
`;

import { UserCircle } from "@phosphor-icons/react";
import styled from "styled-components";
import AuthContainer from "../../components/Auth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignUpForrm from "./components/SignUpForm";

export default function SignUp() {
  return (
    <Container>
      <Header />
      <AuthContainer
        icon={<UserCircle size={110} />}
        title="Sign up to Triangle"
        subtitle="Already have an account? Login"
        hasOAuth={true}
        hasDivider={true}
      >
        <SignUpForrm />
      </AuthContainer>
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

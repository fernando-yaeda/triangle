import { UserCircle } from "@phosphor-icons/react";
import styled from "styled-components";
import AuthContainer from "../../components/Auth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignInForm from "./components/SignInForm";

export default function SignIn() {
  return (
    <Container>
      <Header />
      <AuthContainer
        icon={<UserCircle size={110} />}
        title="Sign in to Triangle"
        subtitle="Don't have an account? Sign Up"
        hasOAuth={true}
        hasDivider={true}
      >
        <SignInForm />
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

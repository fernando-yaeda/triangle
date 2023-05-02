import { UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
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
        subtitle={
          <>
            {"Don't have an account? "}
            <Link to="/sign-up">Sign Up</Link>
          </>
        }
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

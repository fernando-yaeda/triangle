import { UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContainer from "../../components/Auth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useScrollPosition from "../../hooks/useScrollPosition";
import SignUpForm from "./components/SignUpForm";

export default function SignUp() {
  const { scrollY, containerRef } = useScrollPosition();

  return (
    <>
      <Container ref={containerRef}>
        <Header scrollY={scrollY} />
        <AuthContainer
          icon={<UserCircle size={110} />}
          title="Sign up to Triangle"
          subtitle={
            <>
              {"Already have an account? "}
              <Link to={"/"}>Login</Link>
            </>
          }
        >
          <SignUpForm />
        </AuthContainer>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

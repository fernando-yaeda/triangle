import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContainer from "../../components/Auth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SignInForm from "./components/SignInForm";

export default function SignIn() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <Container>
      <Header scrollY={scrollY} />
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
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
`;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button/index";
import Logo from "../Logo";

function Header() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    }
  }, []);

  return (
    <Container scrollY={scrollY}>
      <Logo />
      <ButtonsContainer>
        <Button onClick={() => navigate("/")}>Explore Features</Button>
        <Button onClick={() => navigate("/")}>Get Started</Button>
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.header<{ scrollY: number }>`
  height: 76px;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 88px;

  position: fixed;
  top: 0;
  z-index: 1;

  background-color: ${(props) => props.theme.colors.white};

  box-shadow: ${(props) =>
    props.scrollY > 0
      ? "rgba(0, 0, 0, 0.05) 0px 8px 8px 1px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px"
      : "none"};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export default Header;

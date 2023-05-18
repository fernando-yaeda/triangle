import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button/index";
import Logo from "../Logo";

type HeaderProps = {
  scrollY: number;
};

function Header({ scrollY }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Container id="headerContainer" scrollY={scrollY}>
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
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 88px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => props.theme.colors.white};

  box-shadow: ${(props) =>
    props.scrollY > 76
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

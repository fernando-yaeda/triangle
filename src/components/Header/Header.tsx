import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Logo from "../Logo";

function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <ButtonsContainer>
        <Button onClick={() => navigate("/sign-up")}>Explore Features</Button>
        <Button onClick={() => navigate("/login")}>Get Started</Button>
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 76px;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 88px;

  position: fixed;
  top: 0;

  background-color: ${(props) => props.theme.white};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export default Header;

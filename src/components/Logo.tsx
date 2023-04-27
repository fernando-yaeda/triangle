import styled from "styled-components";
import logo from "../assets/logo.png";
import { Text } from "./Text";

export default function Logo() {
  return (
    <Container>
      <LogoImage src={logo} alt="logo image" />
      <Text color="black" variant="headingLg">
        Triangle
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  user-select: none;
`;

const LogoImage = styled.img`
  height: 30px;
  width: 30px;

  margin-right: 8px;
`;

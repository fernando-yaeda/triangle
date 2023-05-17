import styled from "styled-components";
import logo from "../assets/logo.png";
import { Text } from "./Text";

type LogoProps = {
  hasText?: boolean;
};

export default function Logo({ hasText = true }: LogoProps) {
  return (
    <Container>
      <LogoImage src={logo} alt="logo image" />
      {hasText && (
        <Text color="black" variant="headingLg" style={{ marginLeft: "8px" }}>
          Triangle
        </Text>
      )}
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
`;

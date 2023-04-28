import styled from "styled-components";
import { Text } from "../Text";

export default function Footer() {
  return (
    <Container>
      <Text color="darkGrey" variant="textMd">
        © Triangle team
      </Text>
    </Container>
  );
}

const Container = styled.footer`
  height: 80px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

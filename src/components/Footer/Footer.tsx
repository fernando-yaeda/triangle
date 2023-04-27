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
  height: 76px;
  width: 100%;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

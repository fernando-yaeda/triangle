import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <Container>
      <LogoImage src={logo} alt="logo image" />
      <LogoText>Triangle</LogoText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  user-select: none;
  margin-top: 24px;
  margin-left: 80px;
`;

const LogoImage = styled.img`
  height: 30px;
  width: 30px;

  margin-right: 8px;
`;

const LogoText = styled.span`
  color: ${(props) => props.theme.black};
  font-size: ${(props) => props.theme.headingLg.fontSize};
  line-height: ${(props) => props.theme.headingLg.lineHeight};
  font-weight: 600;
`;

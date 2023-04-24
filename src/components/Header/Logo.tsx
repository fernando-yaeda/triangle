import { Typography } from "@mui/material";
import styled from "styled-components";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <Container>
      <LogoImage src={logo} alt="logo" />
      <Typography variant="headingMd">Triangle</Typography>
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

export default Logo;

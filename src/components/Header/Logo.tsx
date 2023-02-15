import styled from "styled-components";

function Logo() {
  return <StyledLogo>AppName</StyledLogo>;
}

const StyledLogo = styled.h1`
  font-family: DM Sans;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;

  color: #fff;

  user-select: none;
`;

export default Logo;

import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}

function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled.div`
  height: 62px;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;

  position: fixed;
  top: 0;

  background-color: #1f1e1f;
`;

export default Header;

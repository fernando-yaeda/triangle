import { Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../style/theme";

const colors = theme.palette.primary;

interface Props {
  children: string;
  onClick?: () => void;
  width?: string;
  type?: string;
}

export default function Button({ children, onClick, width }: Props) {
  return (
    <StyledButton style={{ width }} onClick={onClick}>
      <Typography variant={"textSm"}>{children}</Typography>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.style?.width || "auto"};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 12px;

  background-color: ${colors.black};
  color: ${colors.white};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${colors.mediumGrey};
    color: ${colors.darkGrey};
  }
`;

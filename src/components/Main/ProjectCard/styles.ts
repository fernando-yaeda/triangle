import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 180px;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;

  box-sizing: border-box;

  position: relative;

  border: 1px ${theme.colors.grey} solid;
  border-radius: 12px;
`;

export const OptionsButton = styled.button`
  all: unset;
  position: absolute;
  top: 8px;
  right: 8px;

  cursor: pointer;
`;

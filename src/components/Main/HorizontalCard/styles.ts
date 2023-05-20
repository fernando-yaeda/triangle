import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 20px 20px 20px;

  box-shadow: ${theme.borders.default};
  border-radius: 12px;
`;

export const Header = styled.div`
  height: fit-content;
  width: 100%;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

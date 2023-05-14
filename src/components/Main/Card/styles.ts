import styled from "styled-components";

export const Container = styled.div<{ hasContent: boolean }>`
  height: ${(props) => props.hasContent && "440px"};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${(props) => (props.hasContent ? "0 20px 16px 20px" : "0px 20px")};

  box-shadow: ${(props) => props.theme.borders.default};
  border-radius: 12px;
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
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

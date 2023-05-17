import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
`;

export const Left = styled.div`
  min-height: 100vh;
  width: auto;
  display: flex;
  flex-shrink: 0;
`;

export const Right = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.white};
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  padding: 20px 80px;

  overflow-y: auto;
`;

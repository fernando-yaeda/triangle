import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;

  background-color: ${(props) => props.theme.colors.white};
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: calc(100% - 288px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 76px;
  margin-left: 288px;
  padding: 18px 92px;
`;

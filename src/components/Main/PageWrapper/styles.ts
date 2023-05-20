import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Left = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 0 1 auto;
`;

export const Right = styled.div`
  height: 100vh;
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.white};
`;

export const ContentWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 auto;

  padding: 20px 72px;

  overflow-y: auto;
  overflow-x: auto;

  @media (max-width: 1040px) {
    padding: 20px 40px;
  }
`;

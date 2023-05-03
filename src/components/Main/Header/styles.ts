import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 288px);
  height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 288px;
  z-index: 1;

  padding: 0px 92px;

  background-color: ${(props) => props.theme.colors.white};

  border-bottom: 1px solid ${(props) => props.theme.colors.mediumGrey};
`;

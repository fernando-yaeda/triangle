import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  flex-shrink: 0;

  z-index: 1;

  padding: 0px 92px;

  background-color: ${(props) => props.theme.colors.white};

  border-bottom: 1px solid ${(props) => props.theme.colors.mediumGrey};
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 92px;

  background-color: ${(props) => props.theme.colors.white};

  border-bottom: 1px solid ${(props) => props.theme.colors.mediumGrey};
`;

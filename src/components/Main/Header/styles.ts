import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  z-index: 1;

  padding: 20px 72px;

  background-color: ${(props) => props.theme.colors.white};

  border-bottom: 1px solid ${(props) => props.theme.colors.mediumGrey};

  @media (max-width: 1040px) {
    padding: 20px 40px;
  }
`;

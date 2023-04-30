import styled from "styled-components";

export const Container = styled.div`
  width: 160px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const MenuItem = styled.button`
  height: 40px;
  width: 40px;

  img {
    height: 100%;
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors.mediumGrey};

  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fontVariants.textLg.fontSize};
  font-weight: 600;
`;

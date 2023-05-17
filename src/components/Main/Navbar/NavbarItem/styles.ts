import styled from "styled-components";

export const NavItem = styled.button<{
  isActive: boolean;
}>`
  border: none;
  height: 44px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  padding: 0 20px;
  border-radius: 6px;

  font-size: ${(props) => props.theme.fontVariants.textLg.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textLg.lineHeight};
  font-weight: 500;

  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.darkGrey};
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.mediumGrey
      : props.theme.colors.lightGrey};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.mediumGrey};
  }
`;

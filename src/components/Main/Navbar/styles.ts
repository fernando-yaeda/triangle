import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-width: 288px;

  background-color: ${(props) => props.theme.colors.lightGrey};

  padding: 24px 24px;

  border-right: 1px solid ${(props) => props.theme.colors.mediumGrey};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Navbar = styled.nav`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;

  padding: 44px 0;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  height: 44px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  padding: 0 20px;
  border-radius: 6px;

  font-size: ${(props) => props.theme.fontVariants.textLg.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textLg.lineHeight};
  font-weight: 500;

  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.darkGrey};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.mediumGrey : ""};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.mediumGrey};
  }
`;

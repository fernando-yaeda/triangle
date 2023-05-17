import styled from "styled-components";

export const Container = styled.div<{ isSidebarOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isSidebarOpen ? "260px" : "88px")};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${(props) => (props.isSidebarOpen ? "flex-start" : "center")};

  padding: ${(props) => (props.isSidebarOpen ? "20px 20px" : "20px 10px")};

  background-color: ${(props) => props.theme.colors.lightGrey};
  border-right: 1px solid ${(props) => props.theme.colors.mediumGrey};

  > :first-child {
    ${(props) => props.isSidebarOpen && "margin-left: 20px"};
  }

  transition: all 0.2s cubic-bezier(0, 1, 0.7, 1);
`;

export const HeaderContainer = styled.div<{ isSidebarOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.isSidebarOpen ? "flex-start" : "center"};
  position: relative;

  > svg {
    position: absolute;
    top: 36px;
    right: ${(props) => (props.isSidebarOpen ? "-12px" : "-22px")};
    z-index: 10;
    transform: ${(props) =>
      props.isSidebarOpen ? "rotate(180deg)" : "rotate(0deg)"};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

export const Navbar = styled.nav`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;

  position: sticky;
  top: 0;
  left: 0;

  padding: 44px 0;
`;

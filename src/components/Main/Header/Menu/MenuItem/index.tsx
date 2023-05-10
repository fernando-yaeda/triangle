import { ReactNode, useState } from "react";
import styled from "styled-components";

type MenuItemProps = {
  children: ReactNode;
  icon: ReactNode;
};

export function MenuItem({ children, icon }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function setIsClosed() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <Container onMouseLeave={setIsClosed}>
      <Item onClick={toggleIsOpen}>
        {icon && icon}
        <DropdownMenu isOpen={isOpen} onMouseLeave={setIsClosed}>
          {children}
        </DropdownMenu>
      </Item>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.button`
  height: 40px;
  width: 40px;

  position: relative;

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

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};

  height: 190px;
  width: 190px;

  position: absolute;
  top: 48px;
  right: -2px;

  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.borders.default};

  transition: ${(props) => (props.isOpen ? "all 0.5s" : "all 0.2s")};
`;

export const DropdownItem = styled.div`
  border: none;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  padding: 0 8px;

  font-size: ${(props) => props.theme.fontVariants.textMd.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textMd.lineHeight};
  font-weight: ${(props) => props.theme.fontVariants.textMd.fontWeight};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;

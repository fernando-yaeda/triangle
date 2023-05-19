import { ReactNode, useState } from "react";
import styled from "styled-components";

type DropdownProps = {
  children: ReactNode;
  icon: ReactNode;
  backgroundColor?: string;
  flexAlign?: string;
};

export function Dropdown({
  children,
  icon,
  backgroundColor,
  flexAlign,
}: DropdownProps) {
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
    <Container onMouseLeave={setIsClosed} flexAlign={flexAlign}>
      <Item onClick={toggleIsOpen} backgroundColor={backgroundColor}>
        {icon && icon}
        <DropdownMenu isOpen={isOpen} onMouseLeave={setIsClosed}>
          {children}
        </DropdownMenu>
      </Item>
    </Container>
  );
}

const Container = styled.div<{ flexAlign?: string }>`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: ${(props) => props.flexAlign || "center"};
`;

export const Item = styled.button<{ backgroundColor?: string }>`
  all: unset;
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

  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fontVariants.textLg.fontSize};
  font-weight: 600;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mediumGrey};
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};

  z-index: 1;
  padding: 12px;

  position: absolute;
  top: 48px;
  right: -2px;

  border-radius: 6px;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.mediumGrey};
  box-shadow: ${(props) => props.theme.borders.dropdown};

  transition: ${(props) => (props.isOpen ? "all 0.5s" : "all 0.2s")};
`;

export const DropdownItem = styled.button`
  border: none;
  width: 100%;
  height: 100%;

  text-align: start;

  display: flex;
  justify-content: flex-start;
  gap: 12px;

  border-radius: 6px;

  cursor: pointer;

  font-size: ${(props) => props.theme.fontVariants.textMd.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textMd.lineHeight};
  font-weight: ${(props) => props.theme.fontVariants.textMd.fontWeight};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;

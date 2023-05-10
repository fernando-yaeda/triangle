import { ReactNode } from "react";
import ReactDom from "react-dom";
import * as S from "./styles";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export function Modal({ isOpen, children }: ModalProps) {
  const portal = document.getElementById("portal") as HTMLElement;

  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <S.Overlay>
        <S.Modal>{children}</S.Modal>
      </S.Overlay>
    </>,
    portal
  );
}

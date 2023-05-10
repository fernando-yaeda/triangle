import { X } from "@phosphor-icons/react";
import * as S from "./styles";

type ModalProps = {
  title: string;
  closeModal: () => void;
};

export function ModalHeader({ title, closeModal }: ModalProps) {
  return (
    <S.Header>
      {title}
      <S.CloseModal onClick={closeModal}>
        <X size={24} color="#5C5F62" weight="bold" />
      </S.CloseModal>
    </S.Header>
  );
}

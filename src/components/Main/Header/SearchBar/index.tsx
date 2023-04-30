import { MagnifyingGlass } from "@phosphor-icons/react";
import * as S from "./styles";

export function SearchBar() {
  return (
    <S.InputWrapper>
      <MagnifyingGlass size={20} />
      <S.Input placeholder="Search..." />
    </S.InputWrapper>
  );
}

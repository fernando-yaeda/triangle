import { Bell, Plus } from "@phosphor-icons/react";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <S.MenuItem>
        <Plus size={20} weight="bold" />
      </S.MenuItem>
      <S.MenuItem>
        <Bell size={24} weight="bold" />
      </S.MenuItem>
      <S.MenuItem>M</S.MenuItem>
    </S.Container>
  );
}

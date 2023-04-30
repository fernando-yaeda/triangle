import { Menu } from "./Menu";
import { PageNavigator } from "./PageNavigator";
import { SearchBar } from "./SearchBar";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <PageNavigator pageName="Home" />
      <SearchBar />
      <Menu />
    </S.Container>
  );
}

import { Menu } from "./Menu";
import { PageNavigator } from "./PageNavigator";
import { SearchBar } from "./SearchBar";
import * as S from "./styles";

type HeaderProps = {
  currentPage: string;
};

export default function Header({ currentPage }: HeaderProps) {
  return (
    <S.Container>
      <PageNavigator pageName={currentPage} />
      <SearchBar />
      <Menu />
    </S.Container>
  );
}

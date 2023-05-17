import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../../hooks/useSidebar";
import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./styles";

export function PageWrapper() {
  return (
    <S.Container>
      <SidebarProvider>
        <S.Left>
          <Navbar />
        </S.Left>
      </SidebarProvider>
      <S.Right>
        <Header />
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Right>
    </S.Container>
  );
}

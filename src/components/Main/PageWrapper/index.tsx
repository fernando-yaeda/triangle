import { ReactNode } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./styles";

interface PageWrapperProps {
  children: ReactNode;
  currentPage: string;
}

export function PageWrapper({ children, currentPage }: PageWrapperProps) {
  return (
    <S.Container>
      <S.Main>
        <Navbar />
        <Header currentPage={currentPage} />
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Main>
    </S.Container>
  );
}

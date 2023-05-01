import { ReactNode } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./styles";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <S.Container>
      <Navbar />
      <S.Main>
        <Header />
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.Main>
    </S.Container>
  );
}

import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import useSidebar from "../../../../hooks/useSidebar";
import { Text } from "../../../Text";
import * as S from "./styles";

interface NavItemProps {
  name: string;
  href: string;
  icon: ReactNode;
}

export function NavItem({ name, href, icon }: NavItemProps) {
  const navigate = useNavigate();
  const isActive = location.pathname === href;
  const { isSidebarOpen } = useSidebar();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <S.NavItem type="button" onClick={handleClick} isActive={isActive}>
      {icon}
      {isSidebarOpen && <Text>{name}</Text>}
    </S.NavItem>
  );
}

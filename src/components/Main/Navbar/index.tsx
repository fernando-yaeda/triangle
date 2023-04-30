import {
  CalendarBlank,
  Cards,
  ChartLine,
  Chat,
  House,
  SquaresFour,
  Users,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Logo";
import * as S from "./styles";

export default function Navbar() {
  const location = useLocation();
  return (
    <S.Container>
      <Logo />
      <S.Navbar>
        <NavItem to="/home" isActive={location.pathname === "/home"}>
          <House size={24} weight="bold" />
          Home
        </NavItem>

        <NavItem to="/dashboard" isActive={location.pathname === "/dashboard"}>
          <ChartLine size={24} weight="bold" />
          Dashboard
        </NavItem>

        <NavItem to="/teams" isActive={location.pathname === "/teams"}>
          <Users size={24} weight="bold" />
          Teams
        </NavItem>

        <NavItem to="/boards" isActive={location.pathname === "/boards"}>
          <Cards size={24} weight="bold" />
          Boards
        </NavItem>

        <NavItem to="/inbox" isActive={location.pathname === "/inbox"}>
          <Chat size={24} weight="bold" />
          Inbox
        </NavItem>

        <NavItem to="/timeline" isActive={location.pathname === "/timeline"}>
          <CalendarBlank size={24} weight="bold" />
          Timeline
        </NavItem>

        <NavItem
          to="/more-options"
          isActive={location.pathname === "/more-options"}
        >
          <SquaresFour size={24} weight="bold" />
          More Options
        </NavItem>
      </S.Navbar>
    </S.Container>
  );
}

interface NavItemProps {
  children: ReactNode;
  to: string;
  isActive: boolean;
}

function NavItem({ children, to, isActive }: NavItemProps) {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <S.NavItem onClick={handleClick} isActive={isActive}>
      {children}
    </S.NavItem>
  );
}

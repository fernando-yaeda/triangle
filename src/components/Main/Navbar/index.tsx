import {
  CalendarBlank,
  Cards,
  CaretCircleRight,
  ChartLine,
  Chat,
  House,
  SquaresFour,
  StackSimple,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import useSidebar from "../../../hooks/useSidebar";
import Logo from "../../Logo";
import { NavItem } from "./NavbarItem";
import * as S from "./styles";

type NavItem = {
  href: string;
  icon: ReactNode;
  name: string;
};

const navbarItems: NavItem[] = [
  {
    href: "/home",
    icon: <House size={24} weight="bold" />,
    name: "Home",
  },
  {
    href: "/dashboard",
    icon: <ChartLine size={24} weight="bold" />,
    name: "Dashboard",
  },

  {
    href: "/projects",
    icon: <Cards size={24} weight="bold" />,
    name: "Projects",
  },

  {
    href: "/tasks",
    icon: <StackSimple size={24} weight="bold" />,
    name: "Tasks",
  },

  {
    href: "/inbox",
    icon: <Chat size={24} weight="bold" />,
    name: "Inbox",
  },

  {
    href: "/timeline",
    icon: <CalendarBlank size={24} weight="bold" />,
    name: "Timeline",
  },

  {
    href: "/more",
    icon: <SquaresFour size={24} weight="bold" />,
    name: "More",
  },
];

export default function Navbar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <S.Container isSidebarOpen={isSidebarOpen}>
      <S.HeaderContainer isSidebarOpen={isSidebarOpen}>
        <Logo hasText={isSidebarOpen} />
        <CaretCircleRight
          onClick={toggleSidebar}
          size={24}
          color="#5c5f62"
          weight="fill"
        />
      </S.HeaderContainer>
      <S.Navbar>
        {navbarItems &&
          navbarItems.map((item) => {
            return (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                name={item.name}
              />
            );
          })}
      </S.Navbar>
    </S.Container>
  );
}

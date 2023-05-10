import {
  Bell,
  CheckCircle,
  Plus,
  PlusCircle,
  Question,
  SignOut,
  UserCircle,
  UserCirclePlus,
} from "@phosphor-icons/react";
import { DropdownItem, MenuItem } from "./MenuItem";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Container>
      <MenuItem icon={<Plus size={20} weight="bold" />}>
        <DropdownItem>
          <PlusCircle size={28} color="#6F47EB" />
          Create Task
        </DropdownItem>
        <DropdownItem>
          <PlusCircle size={28} color="#6F47EB" />
          Create Project
        </DropdownItem>
        <DropdownItem>
          <PlusCircle size={28} color="#6F47EB" />
          Create Board
        </DropdownItem>
        <DropdownItem>
          <PlusCircle size={28} color="#6F47EB" />
          Create Timeline
        </DropdownItem>
      </MenuItem>

      <MenuItem icon={<Bell size={24} weight="bold" />}>
        <DropdownItem>
          <CheckCircle size={28} color="#5C5F62" />
          Completed Task
        </DropdownItem>
        <DropdownItem>
          <CheckCircle size={28} color="#5C5F62" />
          Completed Task
        </DropdownItem>
        <DropdownItem>
          <CheckCircle size={28} color="#5C5F62" />
          Completed Task
        </DropdownItem>
        <DropdownItem>
          <CheckCircle size={28} color="#5C5F62" />
          Completed Task
        </DropdownItem>
      </MenuItem>

      <MenuItem icon={<UserCircle size={28} color="#5C5F62" />}>
        <DropdownItem>
          <UserCircle size={28} color="#5C5F62" />
          My Profile
        </DropdownItem>
        <DropdownItem>
          <Question size={28} color="#5C5F62" />
          Help and Support
        </DropdownItem>
        <DropdownItem>
          <UserCirclePlus size={28} color="#5C5F62" />
          Invite Friends
        </DropdownItem>
        <DropdownItem>
          <SignOut size={28} color="#5C5F62" />
          Logout
        </DropdownItem>
      </MenuItem>
    </S.Container>
  );
}

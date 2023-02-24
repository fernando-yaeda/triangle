import { createContext, PropsWithChildren, ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";

interface IUserData {
  userId: string;
  fullName: string;
  email: string;
}

export type UserDataContextType = {
  userData: IUserData;
  setUserData: (userData: IUserData) => void;
};

interface Props {
  children?: ReactNode;
}

const UserDataContext = createContext<UserDataContextType | null>(null);

export default UserDataContext;

export function UserDataProvider({ children }: Props) {
  const [userData, setUserData] = useLocalStorage<IUserData>("userData", {
    userId: "",
    fullName: "",
    email: "",
  });

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

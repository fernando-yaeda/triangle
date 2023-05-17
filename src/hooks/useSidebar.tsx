import { ReactNode, createContext, useContext, useState } from "react";

type SidebarContext = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default function useSidebar(): SidebarContext {
  return useContext(SidebarContext);
}

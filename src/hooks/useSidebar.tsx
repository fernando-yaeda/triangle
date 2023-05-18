import { ReactNode, createContext, useContext, useState } from "react";
import { useWindowSize } from "usehooks-ts";

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
  const { width } = useWindowSize();

  if (width < 1200) setIsSidebarOpen(false);

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

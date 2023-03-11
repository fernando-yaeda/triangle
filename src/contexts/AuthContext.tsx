import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
  children?: ReactNode;
}

export type AuthContextType = {
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;

export function AuthContextProvider({ children }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

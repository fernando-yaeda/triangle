import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService, { User } from "../../services/AuthService";
import { SignInParams } from "../../types/SignIn";
import { SignUpParams } from "../../types/SignUp";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn({ email, password }: SignInParams): Promise<void>;
  signUp({
    email,
    username,
    firstName,
    lastName,
    password,
  }: SignUpParams): Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const { setItem, getItem, removeItem } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    function loadData() {
      const user = getItem("user");
      const token = getItem("token");
      if (user && token) {
        setUser(JSON.parse(user));
      }
    }
    loadData();
    setInitialLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function signIn({ email, password }: SignInParams) {
    setLoading(true);

    await AuthService.signIn({ email, password })
      .then((response) => {
        setUser(response.user);
        setItem("user", JSON.stringify(response.user));
        setItem("token", JSON.stringify(response.token));
        toast.success("You have successfully signed in!");
        return navigate("/home");
      })
      .catch((error) => {
        if (error.response.data.message) {
          return toast.error(error.response.data.message);
        }
        return toast.error(
          "Oops... something went wrong. Please try again later"
        );
      })
      .finally(() => setLoading(false));
  }

  async function signUp({
    email,
    username,
    firstName,
    lastName,
    password,
  }: SignUpParams) {
    setLoading(true);

    await AuthService.signUp({ email, username, firstName, lastName, password })
      .then(() => {
        toast.success("You have successfully signed up!");
        return navigate("/");
      })
      .catch((error) => {
        if (error.response.data.message) {
          return toast.error(error.response.data.message);
        }
        return toast.error(
          "Oops... something went wrong. Please try again later"
        );
      })
      .finally(() => setLoading(false));
  }

  function logout() {
    try {
      setUser(null);
      removeItem("user");
      removeItem("token");
      toast.success("You have successfully logged out!");
      return navigate("/");
    } catch (error) {
      return toast.error(
        "Oops... something went wrong. Please try again later"
      );
    }
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      signIn,
      signUp,
      logout,
    }),
    [user, loading] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}

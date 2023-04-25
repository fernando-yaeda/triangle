import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

import { ReactElement, useContext } from "react";
import { ThemeProvider } from "styled-components";
import AuthContext, {
  AuthContextProvider,
  AuthContextType,
} from "./contexts/AuthContext";
import { UserDataProvider } from "./contexts/UserContext";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer />

        <UserDataProvider>
          <AuthContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRouteGuard>
                      <Dashboard />
                    </ProtectedRouteGuard>
                  }
                ></Route>
              </Routes>
            </Router>
          </AuthContextProvider>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
}

interface Props {
  children?: ReactElement;
}

function ProtectedRouteGuard({ children }: Props) {
  const { authenticated } = useContext(AuthContext) as AuthContextType;

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default App;

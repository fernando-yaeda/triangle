import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";

import { UserDataProvider } from "./contexts/UserContext";
import AuthContext, {
  AuthContextProvider,
  AuthContextType,
} from "./contexts/AuthContext";
import { ReactElement, useContext } from "react";

function App() {
  return (
    <>
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

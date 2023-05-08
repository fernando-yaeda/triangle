import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

import { ThemeProvider } from "styled-components";
import useAuth, { AuthProvider } from "./hooks/useAuth/useAuth";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route
                path="/home"
                element={
                  <ProtectedRouteGuard>
                    <Home />
                  </ProtectedRouteGuard>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
}

export default App;

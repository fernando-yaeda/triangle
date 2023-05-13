import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import useAuth, { AuthProvider } from "./hooks/useAuth/useAuth";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
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

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserDataProvider } from "./contexts/UserContext";
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
        <UserDataProvider>
          <AuthContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Router>
          </AuthContextProvider>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
}

// interface Props {
//   children?: ReactElement;
// }

// function ProtectedRouteGuard({ children }: Props) {
//   const { authenticated } = useContext(AuthContext) as AuthContextType;

//   if (!authenticated) {
//     return <Navigate to="/" />;
//   }

//   return <>{children}</>;
// }

export default App;

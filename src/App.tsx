import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";

import { UserDataProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <ToastContainer />

      <UserDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </UserDataProvider>
    </>
  );
}

export default App;

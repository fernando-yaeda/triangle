import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageWrapper } from "../components/Main/PageWrapper";
import useAuth from "../hooks/useAuth/useAuth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<PageWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

function ProtectedRoutes() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
}

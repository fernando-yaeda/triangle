import { SignIn } from "@phosphor-icons/react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
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
  );
}

function ProtectedRouteGuard({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
}

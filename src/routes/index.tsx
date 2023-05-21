import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageWrapper } from "../components/Main/PageWrapper";
import useAuth from "../hooks/useAuth/useAuth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Inbox from "../pages/Inbox";
import More from "../pages/More";
import Projects from "../pages/Projects";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Tasks from "../pages/Tasks";
import Timeline from "../pages/Timeline";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<PageWrapper />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Route>
    </Routes>
  );
}

function ProtectedRoutes() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/" />;
}

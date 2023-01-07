import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const RequiredAdmin = () => {
  const [admin] = useAdmin();

  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default RequiredAdmin;

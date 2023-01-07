import React from "react";
import { Outlet } from "react-router-dom";
import SideDashboard from "../../components/dashboard/SideDashboard";
import "../../style/Dashboard.css";

const Dashboard = () => {
  return (
    <SideDashboard>
      <Outlet />
    </SideDashboard>
  );
};

export default Dashboard;

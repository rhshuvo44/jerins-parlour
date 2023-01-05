import React from "react";
import { BiCommand } from "react-icons/bi";
import {
    FaComment,
    FaLock,
    FaPlus,
    FaShoppingCart,
    FaUserPlus
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#E5E5E5] gap-y-2 pl-20 mt-16 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaShoppingCart /> Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaLock /> Booking list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaComment /> review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaLock /> order list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaPlus /> Add service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaUserPlus /> Make Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <BiCommand /> Manage Services
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

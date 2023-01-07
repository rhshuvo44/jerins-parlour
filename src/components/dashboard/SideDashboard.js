import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiCommand } from "react-icons/bi";
import {
  FaComment,
  FaLock,
  FaPlus,
  FaShoppingCart,
  FaUserCircle,
  FaUserPlus,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const SideDashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#E5E5E5] gap-y-2 pl-20 mt-16 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/dashboard/myProfile"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              <FaUserCircle /> My Profile
            </NavLink>
          </li>
          {!admin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaShoppingCart /> Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookingList"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaLock /> Booking list
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/review"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaComment /> review
                </NavLink>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/orderList"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaLock /> order list
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addServices"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaPlus /> Add service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addAdmin"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <FaUserPlus /> Make Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageService"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  <BiCommand /> Manage Services
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideDashboard;

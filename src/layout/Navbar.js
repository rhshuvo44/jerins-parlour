import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar md:px-20 fixed top-0 z-10 bg-[#E5E5E5]">
          <div className="flex-1 px-2 mx-2">
            <Link to="/">
              <img className="w-32 h-12" src={logo} alt="" />
            </Link>{" "}
          </div>

          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink
                  to="/home"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  our portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  our team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className=" capitalize hover:bg-transparent hover:text-primary"
                >
                  contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="primary-button">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu gap-y-2 p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/home"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              our portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              our team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className=" capitalize hover:bg-transparent hover:text-primary"
            >
              contact us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="primary-button">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

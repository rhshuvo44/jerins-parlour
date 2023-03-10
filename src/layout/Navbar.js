import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import auth from "../firebase.init";
import "../style/Navbar.css";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const { pathname } = useLocation();
  const logOut = async () => {
    const success = await signOut();
    if (success) {
      toast.success("You are sign out");
    }
  };
  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar md:px-20 fixed top-0 z-10 bg-[#E5E5E5]">
          {pathname.includes("dashboard") && (
            <label
              htmlFor="my-drawer-2"
              className="swap swap-rotate lg:hidden pr-28"
            >
              {/* <!-- this hidden checkbox controls the state --> */}
              <input type="checkbox" />

              {/* <!-- hamburger icon --> */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          )}
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
              {user && (
                <li>
                  <NavLink
                    to="/dashboard/myProfile"
                    className=" capitalize hover:bg-transparent hover:text-primary"
                  >
                    dashboard
                  </NavLink>
                </li>
              )}
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
                {user ? (
                  <button onClick={logOut} className="primary-button">
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login" className="primary-button">
                    Login
                  </NavLink>
                )}
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
          {user && (
            <li>
              <NavLink
                to="/dashboard/myProfile"
                className=" capitalize hover:bg-transparent hover:text-primary"
              >
                dashboard
              </NavLink>
            </li>
          )}
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
            {user ? (
              <button onClick={logOut} className="primary-button">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="primary-button">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

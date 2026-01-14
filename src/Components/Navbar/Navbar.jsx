import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHouseUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(true);

  const handleThemeChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };

  const navLinks = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/all-properties", label: "All Properties" },
        { to: "/properties", label: "Add Properties" },
        
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `px-4 py-2 transition-all duration-300 ${
              isActive
                ? "text-white font-semibold border-b-2 border-purple-300"
                : "text-purple-200 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="drawer z-50">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN NAVBAR */}
      <div className="drawer-content">
        <div className="flex justify-center mt-6">
          <div
            className="w-full rounded-2xl py-3 px-6 flex items-center justify-between
                       shadow-lg shadow-purple-900/40 border border-purple-400/30
                       bg-gradient-to-r from-[#3A0CA3] via-[#7209B7] to-[#B5179E]"
          >
            {/* Mobile Menu Icon */}
            <label
              htmlFor="nav-drawer"
              className="md:hidden text-white cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-semibold text-lg"
            >
              <FaHouseUser />
              HomeNest
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              {navLinks}
            </div>

            {/* Theme Toggle */}
            <label className="toggle text-white px-4">
              <input onClick={handleThemeChange} type="checkbox" />
              <svg aria-label="sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
              <svg aria-label="moon" viewBox="0 0 24 24">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </label>

            {/* User Section */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="cursor-pointer">
                    <img
                      src={user?.photoURL}
                      alt="profile"
                      className="w-10 h-10 rounded-full border-2 border-white
                                 hover:scale-105 transition"
                    />
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-3 z-[1] p-2 shadow
                               bg-base-100 rounded-xl w-44 text-gray-800"
                  >
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 rounded-lg hover:bg-purple-100"
                      >
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/dashboard/dashboard-home"
                        className="block px-4 py-2 rounded-lg hover:bg-purple-100"
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={logOut}
                        className="w-full text-left px-4 py-2 rounded-lg
                                   hover:bg-red-100 text-red-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link
                    to="/login"
                    className="px-5 py-2 rounded-lg bg-white/20 text-white
                               hover:bg-white/30 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-5 py-2 rounded-lg bg-white/20 text-white
                               hover:bg-white/30 transition"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-64 min-h-full bg-[#3A0CA3] text-white space-y-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

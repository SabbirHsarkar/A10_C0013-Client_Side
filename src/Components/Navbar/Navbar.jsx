import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../../Provider/AuthProvider";
import { FaHouseUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isChecked,setIsChecked]=useState(true)
  
  const handleThemeChange=()=>{
    setIsChecked(!isChecked);
    if(isChecked){
      document.querySelector('html').setAttribute('data-theme','dark')
    }else{
      document.querySelector('html').setAttribute('data-theme','light')
    }
    
  }
  

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-properties"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        All Properties
      </NavLink>

      <NavLink
        to="/properties"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        Add Properties
      </NavLink>

      <NavLink
        to="/my-properties"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        My Properties
      </NavLink>

      <NavLink
        to="/my-ratings"
        className={({ isActive }) =>
          `px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-white font-semibold border-b-2 border-purple-300"
              : "text-purple-200 hover:text-white"
          }`
        }
      >
        My Ratings
      </NavLink>



    </>
  );

  return (
    <div className="drawer z-50">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* MAIN NAVBAR */}
      <div className="drawer-content">
        <div className="flex justify-center mt-6">
          <div
            className="
            w-full 
            rounded-2xl 
            py-3 px-6 
            flex items-center justify-between 
            shadow-lg shadow-purple-900/40
            border border-purple-400/30
            bg-gradient-to-r from-[#3A0CA3] via-[#7209B7] to-[#B5179E]"
          >
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <Link
              to="/"
              className="flex items-center gap-2 text-white font-semibold text-lg"
            >
              {/* <img src={logo} alt="logo" className="w-6" /> */}
              <FaHouseUser />
              HomeNest
            </Link>

            <div className="hidden md:flex gap-6 text-sm font-medium text-white">
              {navLinks}
            </div>



<div className="items-center px-4 py-2">
  <label className="toggle text-base-content">
  <input 
   onClick={handleThemeChange}
  
  type="checkbox" value="synthwave" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
</div>


            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/profile">
                    <img
                      src={user?.photoURL}
                      alt="profile"
                      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-105 transition"
                    />
                  </Link>

                  <button
                    onClick={logOut}
                    className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (

              <>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

  <Link
    to="/login"
    className="w-full sm:w-auto text-center px-5 py-2 rounded-lg 
               bg-white/20 backdrop-blur-md 
               text-white font-semibold 
               hover:bg-white/30 transition-all"
  >
    Login
  </Link>

  <Link
    to="/signup"
    className="w-full sm:w-auto text-center px-5 py-2 rounded-lg 
               bg-white/20 backdrop-blur-md 
               text-white font-semibold
               hover:bg-white/30 transition-all"
  >
    Signup
  </Link>

</div>
              </>
              
              
                
               
              ) 
              
              
              
              }
            </div>
          </div>
        </div>
      </div>

      {/* responsive mobile */}
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

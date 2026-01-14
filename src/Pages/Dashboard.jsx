import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaHome,
  FaPlusCircle,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const menuItems = [
    {
      name: "Dashboard Home",
      to: "/dashboard/dashboard-home",
      icon: <FaHome />,
    },
    {
      name: "My Properties",
      to: "/dashboard/my-properties",
      icon: <FaPlusCircle />,
    },
    {
      name: "My Ratings",
      to: "/dashboard/my-ratings",
      icon: <FaStar />,
    },
    {
      name: "Profile",
      to: "/profile",
      icon: <FaUserCircle />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-[#0F172A]">
      {/* SIDEBAR */}
      <aside
        className="w-64 hidden lg:flex flex-col
                   bg-gradient-to-b from-[#3A0CA3] via-[#7209B7] to-[#B5179E]
                   text-white shadow-xl"
      >
        <div className="px-6 py-5 text-2xl font-bold border-b border-white/20">
          Dashboard
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                 ${
                   isActive
                     ? "bg-white/20 font-semibold shadow-md"
                     : "hover:bg-white/10"
                 }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <div
          className="bg-white dark:bg-[#020617] rounded-2xl shadow-lg
                     p-6 min-h-[calc(100vh-48px)]"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaHome, FaStar, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back,{" "}
          <span className="font-semibold text-purple-600">
            {user?.displayName || "User"}
          </span>
          👋
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Properties */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaHome className="text-4xl opacity-80" />
            <div>
              <h2 className="text-2xl font-bold">My Properties</h2>
              <p className="text-sm opacity-90">
                Manage your listed properties
              </p>
            </div>
          </div>

          <Link
            to="/dashboard/my-properties"
            className="inline-block mt-4 text-sm font-semibold underline underline-offset-4"
          >
            View All →
          </Link>
        </motion.div>

        {/* My Ratings */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaStar className="text-4xl opacity-80" />
            <div>
              <h2 className="text-2xl font-bold">My Ratings</h2>
              <p className="text-sm opacity-90">
                See reviews you’ve submitted
              </p>
            </div>
          </div>

          <Link
            to="/dashboard/my-ratings"
            className="inline-block mt-4 text-sm font-semibold underline underline-offset-4"
          >
            View Ratings →
          </Link>
        </motion.div>

        {/* Profile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-4xl opacity-80" />
            <div>
              <h2 className="text-2xl font-bold">My Profile</h2>
              <p className="text-sm opacity-90">
                Update your personal info
              </p>
            </div>
          </div>

          <Link
            to="/profile"
            className="inline-block mt-4 text-sm font-semibold underline underline-offset-4"
          >
            Go to Profile →
          </Link>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-white rounded-2xl shadow-md p-6 border border-gray-100"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Quick Tips
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Add new properties to attract buyers or renters</li>
          <li>Keep your listings updated for better visibility</li>
          <li>Check ratings to improve trust & engagement</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DashboardHome;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { FaHome, FaHeart, FaKey } from "react-icons/fa";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 pb-10 
      bg-gradient-to-br from-[#240046] via-[#5A189A] to-[#9D4EDD]">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-3xl 
        bg-white/10 backdrop-blur-2xl border border-white/20 
        shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 text-white overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br 
          from-purple-500/20 to-pink-400/20 blur-3xl pointer-events-none" />

        {/* Profile Header */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={user?.photoURL}
              alt="User"
              className="w-28 h-28 rounded-full object-cover 
              border-4 border-white shadow-xl"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 
              border-2 border-white rounded-full" />
          </motion.div>

          <h2 className="mt-4 text-3xl font-bold tracking-wide">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-purple-200 text-sm mt-1">
            {user?.email}
          </p>
        </div>

        <div className="divider divider-neutral my-6" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          {[
            { value: "12", label: "Properties", icon: <FaHome /> },
            { value: "5", label: "Saved", icon: <FaHeart /> },
            { value: "3", label: "Rent", icon: <FaKey /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md 
              shadow-md hover:bg-white/20 transition text-center cursor-pointer"
            >
              <div className="text-xl mb-1 flex justify-center text-pink-300">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative z-10 mt-7 p-5 rounded-2xl 
          bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition"
        >
          <h3 className="text-lg font-semibold mb-2">About You</h3>
          <p className="text-purple-200 text-sm leading-relaxed">
            Welcome to your <span className="font-semibold text-white">HomeNest</span> profile. 
            Manage your listed properties, track saved homes, and enjoy a 
            personalized real estate experience crafted just for you.
          </p>
        </motion.div>

        {/* Actions */}
        <div className="relative z-10 mt-6 flex flex-col gap-3">
          <Link
            to="/update-profile"
            className="flex items-center justify-center gap-2 py-3 rounded-xl 
            bg-gradient-to-r from-pink-500 to-purple-600 
            font-semibold hover:opacity-90 transition"
          >
            <FiEdit /> Update Profile
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 py-3 rounded-xl 
            bg-red-600 hover:bg-red-700 transition font-semibold"
          >
            <FiLogOut className="text-lg" /> Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;

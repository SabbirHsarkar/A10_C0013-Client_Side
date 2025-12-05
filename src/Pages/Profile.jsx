import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#240046] via-[#5A189A] to-[#9D4EDD]">

     
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl 
                   border border-white/20 p-8 text-white relative overflow-hidden"
      >

     
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-400/20 blur-2xl pointer-events-none"></div>

      
        <div className="flex flex-col items-center relative z-10">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={user?.photoURL}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover"
          />

          <h2 className="text-3xl font-bold mt-4 drop-shadow-md">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-purple-200 text-sm">{user?.email}</p>
        </div>

        <div className="divider divider-neutral my-6"></div>

        
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: "12", label: "Properties Added" },
            { value: "5", label: "Saved Homes" },
            { value: "3", label: "Rent" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="p-3 bg-white/10 rounded-xl shadow-md backdrop-blur-md 
                         hover:bg-white/20 transition cursor-pointer"
            >
              <h3 className="text-xl font-bold">{stat.value}</h3>
              <p className="text-sm text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        
        <div className="mt-8 bg-white/10 p-5 rounded-2xl shadow-md hover:bg-white/20 transition backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-2">About You</h3>
          <p className="text-purple-200 text-sm leading-relaxed">
             Welcome to your HomeNest profile! Manage your listed properties, 
    keep track of your saved homes, and enjoy a personalized real estate 
    management experience tailored just for you.
          </p>
        </div>

        
        <div className="mt-6 flex flex-col gap-3">

          <Link
            to="/update-profile"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 
                       text-center font-semibold hover:opacity-90 transition"
          >
            Update Profile
          </Link>

          
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <FiLogOut className="text-lg" /> Logout
          </button>

        </div>

      </motion.div>
    </div>
  );
};

export default Profile;

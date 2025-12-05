import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router";

const PopularHome = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-16 lg:px-[145px]">
      <h3 className="font-bold text-4xl text-center mb-10 ">
        Featured Real Estate
      </h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {properties.slice(0, 6).map((property, index) => (
          <motion.div
            key={property._id}
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: index * 0.2 },
            }}
            whileHover={{ scale: 1.03 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative group">
              <img
                src={property.image}
                className="w-full h-[240px] object-cover rounded-t-xl group-hover:scale-110 transition duration-700"
                alt=""
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-lg shadow-md">
                {property.category}
              </span>

              {/* Price Badge */}
              <span className="absolute bottom-3 right-3 bg-white/90 text-blue-700 px-4 py-1 text-sm font-bold rounded-lg shadow">
                ${property.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="font-semibold text-xl text-gray-800 line-clamp-1">
                {property.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {property.description}
              </p>

              <div className="flex items-center justify-between text-gray-500 text-sm pt-2">
                <p className="flex items-center gap-1">
                  <FaCalendar /> {property.date}
                </p>

                <Link to={`/details/${property?._id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    View Details
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularHome;

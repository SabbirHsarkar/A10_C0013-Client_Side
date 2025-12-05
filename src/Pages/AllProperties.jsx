import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FaCalendar } from "react-icons/fa";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  
  const [category,setCategory]=useState('');
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
  fetch(`http://localhost:3000/properties?category=${category}&search=${searchText}`)
    .then(res => res.json())
    .then(data => setProperties(data))
    .catch(err => console.log(err));
}, [category, searchText]);



  console.log(category);
  

  return (
    <div className="py-16 lg:px-[145px]">

     

 <h2 className="text-4xl font-bold text-center mb-4 ">
        All Properties
      </h2>
  
 <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search by Property Name..."
    className="w-full lg:w-1/3 px-4 py-3 border bg-white text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />

  {/* Category Dropdown */}
  <select
    onChange={(e) => setCategory(e.target.value)}
    defaultValue="Pick a Category"
    className="w-full lg:w-1/4 px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
  >
    <option disabled={true}>Pick a Category</option>
    <option value="Rent">Rent</option>
    <option value="Sale">Sale</option>
    <option value="Commercial">Commercial</option>
    <option value="Land">Land</option>
  </select>
</div>


   


      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {properties.map((property, index) => (
          <motion.div
            key={property._id}
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: index * 0.15 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative group">
              <img
                src={property?.image}
                alt=""
                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-lg shadow-md">
                {property?.category}
              </span>

              {/* Price Badge */}
              <span className="absolute bottom-3 right-3 bg-white/90 text-blue-700 px-4 py-1 text-sm font-bold rounded-lg shadow">
                ${property?.price}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
              <h3 className="font-semibold text-xl text-gray-800 line-clamp-1">
                {property?.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {property?.description}
              </p>

              <div className="flex items-center justify-between text-gray-500 text-sm pt-2">
                <p className="flex items-center gap-1">
                  <FaCalendar className="text-yellow-600" />
                  {property?.date}
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

export default AllProperties;

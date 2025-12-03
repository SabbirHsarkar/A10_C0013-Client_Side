import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const MyProperties = () => {
  const [myProperties, setMyProperties] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-properties?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyProperties(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  return (
    <div className=" lg:px-[145px]">
      <h1 className="text-3xl font-semibold mb-6">My Properties</h1>

      {/* Empty State */}
      {myProperties.length === 0 && (
        <p className="text-gray-600 text-lg bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          You haven't added any properties yet…
        </p>
      )}

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProperties.map((property) => (
          <div
            key={property._id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 w-full">
              <img
                src={property.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{property.name}</h2>
              <p className="text-gray-500 text-sm">{property.category}</p>
              <p className="text-blue-600 font-bold text-lg mb-2">
                ৳ {property.price}
              </p>

              <p className="text-gray-600 text-sm mb-1 justify-center">
                <FaLocationDot />
                {property.location}
              </p>

              <p className="text-gray-400 text-xs">Posted: {property.date}</p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/update-properties/${property._id}`}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-center"
                >
                  Update
                </Link>

                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
                  Delete
                </button>

                <Link to={`/details/${property?._id}`}>
                  <button className="btn btn-primary">View details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;

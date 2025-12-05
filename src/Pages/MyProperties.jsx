import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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


  const handleDelete=(id)=>{
     
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      axios.delete(`http://localhost:3000/delete/${id}`)
    .then(res=>{
      console.log(res.data);

      if(res.data.deletedCount==1){
        const filterData= myProperties.filter(property=>property._id!=id)
      console.log(filterData);
      setMyProperties(filterData)
      
       toast.success("Deleted successfully!");

        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

      }
      
      
    })
    .catch(err=>{
      console.log(err);
      
    })

   
  }
});
    
  
  }

  return (
    <div className="lg:px-[145px] py-10">
  <h1 className="text-3xl font-bold mb-8 ">
    My Properties
  </h1>

  {/* Empty State */}
  {myProperties.length === 0 && (
    <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl text-center text-lg text-gray-600 shadow-sm">
      You haven’t added any properties yet…
    </div>
  )}

  {/* Property Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {myProperties.map((property) => (
      <div
        key={property._id}
        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
      >
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={property.image}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {property.name}
          </h2>
          <p className="text-gray-500 text-sm">{property.category}</p>

          <p className="text-blue-600 font-bold text-xl">
            ৳ {property.price}
          </p>

          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <FaLocationDot className="text-red-500" />
            <span>{property.location}</span>
          </div>

          <p className="text-gray-400 text-xs">
            Posted: {property.date}
          </p>

          {/* Buttons */}
          <div className="pt-4 flex gap-2">
            <Link
              to={`/update-properties/${property._id}`}
   className="flex-1 bg-green-500 hover:bg-green-600 transition-all text-white py-2 rounded-lg font-medium shadow-sm items-center"
            >
            <span className="text-white ml-7">Update</span>
            </Link>

            <button
              onClick={() => handleDelete(property?._id)}
              className="flex-1 bg-red-600 hover:bg-red-700 transition-all text-white py-2 rounded-lg font-medium shadow-sm"
            >
              Delete
            </button>

            <Link to={`/details/${property?._id}`}>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-all shadow-sm">
                View
              </button>
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

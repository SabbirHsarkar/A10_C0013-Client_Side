import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router';

import Swal from 'sweetalert2';

const AddProperties = () => {


  const {user}=useContext(AuthContext);
  const navigation=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const form=e.target;
    const name=form.name.value;
     const description=form.description.value;
     const category=form.category.value;

     const price=parseInt(form.price.value);
     const location=form.location.value;
     const image=form.image.value;
     const date=form.date.value;
       const email=form.email.value;
     const username=form.username.value;

    const formData={
     name,
     description,
     category,
     price,
     location,
     image,
     date,
     email,
     username
    }
    console.log(formData)

  axios.post('https://homenest-two.vercel.app/properties',formData)
    .then(res=>{
      console.log(res);
       Swal.fire({
              icon: 'success',
              title: 'Added!',
              text: 'Property Added successfully!',
              showConfirmButton: false,
              timer: 2000
            });
      
    })
    
     setTimeout(() => {
       navigation('/all-properties')
      }, 2000);
    

  }

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-10">
      
      <div className="w-full max-w-2xl bg-white backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/40 relative overflow-hidden">

        {/* Decorative Background Shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center  text-gray-800 mb-8 drop-shadow-sm">
          Add a New <span className="text-blue-600">Property</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

          {/* Property Name */}
          <div>
            <label className="font-semibold block  text-black">Property Name</label>
            <input
              type="text"
              name="name"
              placeholder="Ex: Lakeview Apartment"
              className="input input-bordered w-full bg-white text-black backdrop-blur-md shadow focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold block   text-black">Description</label>
            <textarea
              name="description"
              placeholder="Short details about the property..."
              className="textarea textarea-bordered w-full bg-white text-black backdrop-blur-md shadow"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="relative">
            <label className="font-semibold block mb-1   text-black">Category</label>

            <div className="relative">
              <select
                name="category"
                className="
                  w-full appearance-none
                  bg-white/60 backdrop-blur-md
                  border-2 border-blue-200
                  focus:border-blue-500
                  rounded-xl p-3
                  text-gray-700 font-medium
                  shadow-sm
                  transition-all duration-300
                  cursor-pointer
                "
                required
              >
                <option value=""> Select Category</option>
                <option value="Rent"> Rent</option>
                <option value="Sale"> Sale</option>
                <option value="Commercial"> Commercial</option>
                <option value="Land"> Land</option>
              </select>

              {/* Arrow Icon */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-600">
                ▼
              </span>
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold block   text-black">Price (BDT)</label>
            <input
              type="number"
              name="price"
              placeholder="Ex: 35000"
              className="input input-bordered w-full bg-white text-black backdrop-blur-md shadow"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold block   text-black">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Area, or Full Address"
              className="input input-bordered w-full bg-white text-black backdrop-blur-md shadow"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold block   text-black">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste property image link"
              className="input input-bordered w-full bg-white text-black backdrop-blur-md shadow"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-semibold block   text-black"> Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full bg-white text-black backdrop-blur-md shadow"
              required
            />
          </div>

          {/* Email (Read Only) */}
          <div>
            <label className="font-semibold block  text-black">User Email</label>
            <input
              type="email"
              name="email"
              value={user?.email}
              className="input w-full bg-white text-black cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Username (Read Only) */}
          <div>
            <label className="font-semibold block   text-black">User Name</label>
            <input
              type="text"
              name="username"
              value={user?.displayName}
              className="input w-full bg-white text-black cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full bg-blue-600 hover:bg-blue-700 
              text-white font-semibold text-lg p-3 
              rounded-xl shadow-lg 
              transition-all duration-300 
              hover:scale-[1.03]
            "
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;

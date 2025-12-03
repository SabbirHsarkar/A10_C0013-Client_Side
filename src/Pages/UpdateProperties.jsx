import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateProperties = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [properties, setProperties] = useState();
  const [category, setCategory] = useState(properties?.category);
  const navigation=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${id}`).then((res) => {
      setProperties(res.data);
      setCategory(res.data.category);
    });
  }, [id]);

  console.log(properties);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;

    const price = parseInt(form.price.value);
    const location = form.location.value;
    const image = form.image.value;

    const email = form.email.value;
    const username = form.username.value;

    const formData = {
      name,
      description,
      category,
      price,
      location,
      image,
      email,
      username,
    };
    console.log(formData);

    axios.put(`http://localhost:3000/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigation(`/details/${properties?._id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Update Property</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Property Name */}
        <div>
          <label className="font-semibold">Property Name</label>
          <input
            type="text"
            name="name"
            defaultValue={properties?.name}
            placeholder="Enter property name"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            defaultValue={properties?.description}
            placeholder="Write description"
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price (in BDT)</label>
          <input
            type="number"
            name="price"
            defaultValue={properties?.price}
            placeholder="Enter price"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={properties?.location}
            placeholder="City, area, or full address"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/*Img*/}
        <div>
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={properties?.image}
            placeholder="Paste image link"
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* User Email*/}
        <div>
          <label className="font-semibold">User Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full p-3 border bg-gray-100 rounded-lg cursor-not-allowed"
          />
        </div>

        {/* User Name (Read Only) */}
        <div>
          <label className="font-semibold">User Name</label>
          <input
            type="text"
            name="username"
            value={user?.displayName}
            readOnly
            className="w-full p-3 border bg-gray-100 rounded-lg cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProperties;

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

import Swal from "sweetalert2";

const PropertyDetails = () => {
  const { myId } = useParams();
  const { user } = useContext(AuthContext);

  const [property, setProperty] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");

  // Load property + ratings
  useEffect(() => {
    axios.get(`https://homenest-two.vercel.app/properties/${myId}`).then((res) => {
      setProperty(res.data);
    });

    axios.get(`https://homenest-two.vercel.app/property-ratings/${myId}`)
      .then((res) => setRatings(res.data));
  }, [myId]);

  // Submit a new rating
  const handleSubmit = (e) => {
    e.preventDefault();

    const ratingData = {
      propertyId: myId,
      propertyName: property.name,
      thumbnail: property.image,
      stars,
      reviewText: review,
      reviewDate: new Date().toLocaleDateString(),
      reviewerName: user.displayName,
      reviewerEmail: user.email,
    };

    axios.post("https://homenest-two.vercel.app/ratings", ratingData).then(() => {
      setRatings([...ratings, ratingData]);
      setStars(0);
      setReview("");
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your review has been added successfully.',
        showConfirmButton: false,
        timer: 2000
      });
    });
  };

  if (!property) return <p className="text-center mt-10"><span className="loading loading-dots loading-xl"></span></p>;

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-3">{property.name}</h2>

      <img
        className="w-full max-w-[700px] h-[400px] rounded-lg mx-auto"
        src={property.image}
        alt="Property"
      />

      <div className="mt-5 text-lg space-y-2">
        <p><strong>Category:</strong> {property?.category}</p>
        <p><strong>Price:</strong> {property?.price} BDT</p>
        <p><strong>Location:</strong> {property?.location}</p>
        <p><strong>Description:</strong> {property?.description}</p>
        <p><strong>Posted by:</strong> {property?.username} ({property.email})</p>
        <p><strong>Posted date:</strong> {property?.date}</p>
      </div>

      {/*Form */}
      <form onSubmit={handleSubmit}
        className="mt-8 bg-white p-5 rounded-lg shadow">
        <h3 className="text-xl bg-white text-black font-semibold mb-3">Add Rating</h3>

        <input 
          type="number"
          min="1"
          max="5"
          value={stars}
          onChange={(e) => setStars(parseInt(e.target.value))}
          required
          className="w-full border p-2 rounded mb-3  bg-white text-black"
          placeholder="Rating (1-5)"
        />

        <textarea
          className="w-full border p-2 rounded mb-3  bg-white text-black"
          placeholder="Write a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <button className="bg-blue-500 text-white p-2 rounded w-full">
          Submit Review
        </button>
      </form>

      {/*Ratings*/}
      <div className="mt-10  bg-white text-black rounded-2xl ">
        <h3 className="text-2xl font-bold mb-4 ml-4">Ratings & Reviews</h3>

        {ratings.length === 0 && (
          <p className="text-gray-600">No reviews yet. Be the first!</p>
        )}

        {ratings.map((r, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-4 rounded-lg mb-3 shadow-sm"
          >
            <p className="font-semibold text-lg">{r.reviewerName}</p>
            <p className="text-yellow-500 text-xl">
              {"★".repeat(r.stars)}{" "}
              {"☆".repeat(5 - r.stars)}
            </p>
            <p className="italic">"{r.reviewText}"</p>
            <p className="text-sm text-gray-500 mt-1">{r.reviewDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;

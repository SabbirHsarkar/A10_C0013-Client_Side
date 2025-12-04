import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const PropertyDetails = () => {
  const { myId } = useParams();
  const { user } = useContext(AuthContext);

  const [property, setProperty] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");

  // Load property + ratings
  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${myId}`).then((res) => {
      setProperty(res.data);
    });

    axios.get(`http://localhost:3000/property-ratings/${myId}`)
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

    axios.post("http://localhost:3000/ratings", ratingData).then(() => {
      setRatings([...ratings, ratingData]);
      setStars(0);
      setReview("");
      alert("Review added!");
    });
  };

  if (!property) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* ----------------- Property Info ----------------- */}
      <h2 className="text-3xl font-bold mb-3">{property.name}</h2>

      <img
        className="w-full max-w-[700px] h-[400px] rounded-lg mx-auto"
        src={property.image}
        alt="Property"
      />

      <div className="mt-5 text-lg space-y-2">
        <p><strong>Category:</strong> {property.category}</p>
        <p><strong>Price:</strong> {property.price} BDT</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Posted by:</strong> {property.username} ({property.email})</p>
        <p><strong>Posted date:</strong> {property.postedDate}</p>
      </div>

      {/* ---------------- Review Form ---------------- */}
      <form onSubmit={handleSubmit}
        className="mt-8 bg-white p-5 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-3">Add Rating</h3>

        <input
          type="number"
          min="1"
          max="5"
          value={stars}
          onChange={(e) => setStars(parseInt(e.target.value))}
          required
          className="w-full border p-2 rounded mb-3"
          placeholder="Rating (1-5)"
        />

        <textarea
          className="w-full border p-2 rounded mb-3"
          placeholder="Write a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <button className="bg-blue-500 text-white p-2 rounded w-full">
          Submit Review
        </button>
      </form>

      {/* ---------------- Ratings List ---------------- */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Ratings & Reviews</h3>

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

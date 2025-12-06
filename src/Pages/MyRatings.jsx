import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://homenest-two.vercel.app/my-ratings?email=${user.email}`)
        .then((res) => setRatings(res.data))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        My Ratings & Reviews
      </h1>

      {ratings.length === 0 && (
        <p className="text-center ">No reviews yet.</p>
      )}

      <div className="space-y-5">
        {ratings.map((rating) => (
          <div
            key={rating._id}
            className="bg-white shadow-lg p-4 rounded-xl flex gap-4"
          >
            <img
              src={rating.thumbnail}
              alt="Property"
              className="w-28 h-20 object-cover rounded-lg"
            />

            <div>
              <h2 className="text-xl bg-white text-black font-semibold">{rating.propertyName}</h2>

              <p className="text-green-500 text-sm">
                <strong>Reviewed By:</strong> {rating.reviewerName}
              </p>

              <p className="text-yellow-500 text-lg mt-1">
                {"★".repeat(rating.stars)}
                {"☆".repeat(5 - rating.stars)}
              </p>

              <p className="italic mt-2 text-black">"{rating.reviewText}"</p>

              <p className="text-gray-500 text-sm mt-1">
                <strong>Date:</strong> {rating.reviewDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;

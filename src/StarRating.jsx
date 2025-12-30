import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
  const totalStars = 5; // always show 5 stars
  return (
    <div className="flex text-yellow-500">
      {[...Array(totalStars)].map((_, i) =>
        i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
    </div>
  );
};
export default StarRating;

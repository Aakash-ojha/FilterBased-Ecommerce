import React from "react";
import StarRating from "../StarRating";
import { useWishlist } from "../Context/WishlistContext";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ products }) => {
  const { wishlist = [], toggleWishlist } = useWishlist();
  return (
    <div className="grid gap-0.2 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] p-4 gap-3">
      {products.map((shoe, index) => {
        const isLoved = wishlist.some((item) => item.id === shoe.id);

        return (
          <div
            className=" flex flex-col  p-5  border border-[#ededed] rounded-lg cursor-pointer transition-all duration-300 hover:border-[#ccc] shadow-md hover:shadow-lg transform hover:scale-105 gap-3 w-full max-w-62.5 relative"
            key={index}
          >
            <button
              className="absolute top-3 right-3 text-red-500 text-xl"
              onClick={() => toggleWishlist(shoe)}
            >
              {isLoved ? <IoHeart /> : <IoHeartOutline />}
            </button>

            <img alt={shoe.title} src={shoe.img} className="w-full h-auto " />

            <h3 className="font-bold text-sm text-center">{shoe.title}</h3>
            <p className="text-gray-500 text-xs">{shoe.category}</p>

            <div className="flex items-center gap-1 mt-1 text-yellow-500 ">
              <span className="flex-row flex">
                <StarRating rating={shoe.Star} />
              </span>{" "}
              <span>{shoe.reviews}</span>
            </div>

            <div className="mt-2 font-semibold">
              <span className="line-through text-gray-400 mr-2">
                {shoe.prevPrice}
              </span>
              <span>${shoe.newPrice}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

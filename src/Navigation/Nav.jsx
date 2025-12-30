import React from "react";
import {
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";

const Nav = ({ query, setQuery }) => {
  const { wishlist } = useWishlist();
  return (
    <div className=" flex flex-row justify-between gap-5 flex-wrap ">
      <Input setQuery={setQuery} query={query} />

      <div className="flex items-center gap-2 sm:gap-7">
        <Link to="/wishlist" className="relative">
          <IoHeartOutline className="w-5  h-6 " />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </Link>
        <IoCartOutline className="w-5  h-6" />
        <IoPersonOutline className="w-5  h-6" />
      </div>
    </div>
  );
};

export default Nav;

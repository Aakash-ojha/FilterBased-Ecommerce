import { useWishlist } from "./Context/WishlistContext";
import Product from "./Product";

const Wishlist = () => {
  const { wishlist = [] } = useWishlist();

  if (wishlist.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No loved items ❤️</p>;
  }

  return <Product products={wishlist} />;
};

export default Wishlist;

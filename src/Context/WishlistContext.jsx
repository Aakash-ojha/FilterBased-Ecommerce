import { createContext, useContext, useState } from "react";
const wishlistContext = createContext();

//Provider component
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  return (
    <wishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistProvider;

export const useWishlist = () => useContext(wishlistContext);

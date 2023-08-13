/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";
import { fetchWhishList } from "../api/fetch-wishlist";
import { AddToWishlist } from "../api/add-to-wishlist";
import { RemoveFromWishlist } from "../api/remove-from-wishlist";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { token } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (token) {
      fetchWhishList(token).then(setWishlist);
    }
  }, [token]);

  const addToWishlist = (itemId) => {
    console.log("Attempting to add item to wishlist with ID:", itemId);

    AddToWishlist(token, itemId)
      .then((response) => {
        if (response.success) {
          console.log(response);
          const id = response.data.item.data.id;
          const item_id = response.data.item.data.item_id;
          setWishlist([...wishlist, { id, item_id }]);
          console.log("Item added to wishlist with ID:", id);
        } else {
          console.error("Failed to add item to wishlist:", response);
        }
      })
      .catch((error) => {
        console.error(
          "An error occurred while adding item to wishlist:",
          error
        );
      });
  };

  const removeFromWishlist = (itemId) => {
    console.log("wishlit before:", wishlist);
    RemoveFromWishlist(token, itemId).then(() => {
      const newWishlist = wishlist.filter((item) => item.item_id !== itemId);
      setWishlist(newWishlist);
      console.log("wishlit after:", wishlist);
      console.log("Item removed from wishlist:", itemId);
    });
  };

  const isItemInWishlist = (itemId) => {
    console.log("Checking if item is in wishlist:", itemId);

    const result = wishlist.some((item) => {
      console.log("Comparing with item ID:", item.item_id);
      console.log("Are they exactly equal?", itemId === item.item_id);
      return itemId === item.item_id;
    });

    console.log("Item in wishlist:", result);
    return result;
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isItemInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

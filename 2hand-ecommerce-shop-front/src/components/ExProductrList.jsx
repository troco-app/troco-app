/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ExProductItem } from "./ExProductItem";
import { fetchUserItems } from "../api/fetch-user-items";

export function ExProductList({ userId, onSelect, selectedProducts }) {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchUserItems(userId)
        .then((data) => setUserItems(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  // Here's the new part: we create an array of unique items based on their ID
  const uniqueUserItems = [...new Set(userItems.map((item) => item.id))].map(
    (id) => userItems.find((item) => item.id === id)
  );

  const handleProductSelect = (product, isSelected) => {
    let updatedSelectedProducts;
    if (isSelected) {
      updatedSelectedProducts = [...selectedProducts, product];
    } else {
      updatedSelectedProducts = selectedProducts.filter(
        (selectedProduct) => selectedProduct.id !== product.id
      );
    }
    // Call the parent handler with the updated products
    onSelect(updatedSelectedProducts);
  };

  return (
    <>
      {uniqueUserItems
        .filter((product) => product.status === "available")
        .map((product) => (
          <ExProductItem
            product={product}
            key={product.id}
            onSelect={handleProductSelect}
            isSelected={selectedProducts.some(
              (selectedProduct) => selectedProduct.id === product.id
            )}
          />
        ))}
    </>
  );
}

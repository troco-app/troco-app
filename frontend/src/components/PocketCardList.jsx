import "../assets/css/PocketCardList.css";
import { ItemCardPocket } from "./ItemCardPocket";

/* eslint-disable react/prop-types */
export function PocketCardList({ products, onDeleteItem }) {
  const uniqueProducts = products
    .filter(
      (product) => product.status === "available" && product.is_deleted === 0
    )
    .filter(
      (product, index, self) =>
        index === self.findIndex((p) => p.id === product.id)
    );

  return (
    <>
      {uniqueProducts.map((product) => (
        <ItemCardPocket
          product={product}
          key={product.id}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </>
  );
}

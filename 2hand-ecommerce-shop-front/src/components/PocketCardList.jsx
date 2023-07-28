import "../assets/css/PocketCardList.css";
import { ItemCardPocket } from "./ItemCardPocket"; // Import your ItemCardBig component

/* eslint-disable react/prop-types */
export function PocketCardList({ products }) {
  return (
    <>
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <ItemCardPocket product={product} key={product.id} /> // Use your ItemCardBig component here
        ))}
    </>
  );
}

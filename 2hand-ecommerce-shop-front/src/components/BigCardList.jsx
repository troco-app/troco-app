import "../assets/css/BigCardList.css";
import { ItemCardBig } from "./ItemCardBig"; // Import your ItemCardBig component

/* eslint-disable react/prop-types */
export function BigCardList({ products }) {
  return (
    <div className="sellerProductItems">
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <ItemCardBig product={product} key={product.id} /> // Use your ItemCardBig component here
        ))}
    </div>
  );
}

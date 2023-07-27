import "../assets/css/BigCardList.css";
import { ItemCardBig } from "./ItemCardBig"; // Import your ItemCardBig component

/* eslint-disable react/prop-types */
export function BigCardList({ products }) {
  return (
    <div className="sellerProducItems">
      <h1 className="productListH1">Things offer to exchange:</h1>
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <ItemCardBig product={product} key={product.id} /> // Use your ItemCardBig component here
        ))}
    </div>
  );
}

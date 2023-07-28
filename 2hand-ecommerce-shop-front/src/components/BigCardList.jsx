import "../assets/css/BigCardList.css";
import { ItemCardBig } from "./ItemCardBig"; // Import your ItemCardBig component

/* eslint-disable react/prop-types */
export function BigCardList({ products }) {
  return (
<<<<<<< HEAD
    <div className="sellerProducItems">
=======
    <div className="sellerProductItems">
      
>>>>>>> cbd4acfc477b28aeaa643939f467f950fe86511d
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <ItemCardBig product={product} key={product.id} /> // Use your ItemCardBig component here
        ))}
    </div>
  );
}

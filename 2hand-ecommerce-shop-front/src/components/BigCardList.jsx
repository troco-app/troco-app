import "../assets/css/BigCardList.css";
import { ItemCardBig } from "./ItemCardBig";

/* eslint-disable react/prop-types */
export function BigCardList({ products }) {
  const uniqueProducts = products.reduce((acc, product) => {
    if (!acc.some((item) => item.id === product.id)) {
      acc.push(product);
    }
    return acc;
  }, []);

  return (
    <div className="sellerProductItems">
      {uniqueProducts
        .filter(
          (product) =>
            product.status === "available" && product.is_deleted === 0
        )
        .map((product) => (
          <ItemCardBig product={product} key={product.id} />
        ))}
    </div>
  );
}

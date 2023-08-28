import "../assets/css/BigCardList.css";
import { ItemCardBigWish } from "./ItemCardBigWish";

/* eslint-disable react/prop-types */
export function BigCardWishlist({ products }) {
  const uniqueProducts = products.reduce((acc, product) => {
    if (!acc.some((item) => item.item_id === product.item_id)) {
      acc.push(product);
    }
    return acc;
  }, []);

  return (
    <div className="sellerProductItems">
      {uniqueProducts
        .filter((product) => product.status === "available")
        .map((product) => (
          <ItemCardBigWish product={product} key={product.item_id} />
        ))}
    </div>
  );
}

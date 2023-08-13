import "../assets/css/ReviewPocketCardList.css";
import { ReviewItemCardPocket } from "./ReviewItemCardPocket";

/* eslint-disable react/prop-types */
export function ReviewPocketCardList({ products }) {
  return (
    <>
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <ReviewItemCardPocket product={product} key={product.id} />
        ))}
    </>
  );
}

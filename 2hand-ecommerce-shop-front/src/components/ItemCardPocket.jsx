/* eslint-disable react/prop-types */
import "../assets/css/ItemCardPocket.css";
import StarRating from "./StarRating";

export function ItemCardPocket({ product }) {
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  return (
    <>
      <article className="item">
        <div
          className="imageItem"
          style={{ backgroundImage: `${BASE_URL}${product.imageURL}` }}
        >
          <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
        </div>
        <div className="textItem">
          <h2 className="titleItem">{product.name}</h2>
          <p className="paragraphItem">{product.description}</p>
          <p className="nameUser">{product.username}</p>
          <StarRating rating={averageRating} />
        </div>
      </article>
    </>
  );
}

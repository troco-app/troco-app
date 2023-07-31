/* eslint-disable react/prop-types */
import StarRating from "./StarRating";
import "../assets/css/ExProductItem.css";

export function ExProductItem({ product, onSelect, isSelected }) {
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  return (
    <article className="item">
      <div className="selection">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(product, e.target.checked)}
        />
      </div>
      <div
        className="imageItem"
        style={{ backgroundImage: `url(${BASE_URL}${product.imageURL})` }}
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
  );
}

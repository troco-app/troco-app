/* eslint-disable react/prop-types */
import "../assets/css/ReviewItemCardPocket.css";

export function ReviewItemCardPocket({ product }) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  return (
    <>
      <article className="Review-Item">
        <div
          className="Review-Image-Item"
          style={{
            backgroundImage: `${BASE_URL}${product.imageURL}`,
          }}
        >
          <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
        </div>
        <div className="Review-Text-Item">
          <h1 className="Title-Item">{product.name}</h1>
          <p className="Review-Paragraph-Item">{product.description}</p>
          <p className="Review-Paragraph-Item">
            Estimated Price:{product.estimated_price}€
          </p>
        </div>
      </article>
    </>
  );
}

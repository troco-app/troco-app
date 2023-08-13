/* eslint-disable react/prop-types */
import "../assets/css/ExProductItem.css";

export function ExProductItem({ product, onSelect, isSelected }) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  return (
    <article className="Ex-item">
      <div className="Ex-selection">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(product, e.target.checked)}
        />
      </div>
      <div
        className="Ex-image-item"
        style={{
          backgroundImage: `url(${BASE_URL}${product.imageURL})`,
        }}
      >
        <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
      </div>
      <div className="Ex-text-item">
        <h2 className="Ex-title-item">{product.name}</h2>
        <p className="Ex-paragraph-item">{product.description}</p>
        <p className="Ex-paragraph-item">
          Estimated Price:{product.estimated_price}€
        </p>
      </div>
    </article>
  );
}

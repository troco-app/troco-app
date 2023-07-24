/* eslint-disable react/prop-types */
export function ProductList({ products }) {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  return (
    <div className="seller-product items">
      {products
        .filter((product) => product.status === "available")
        .map((product) => (
          <div key={product.id} className="product-card">
            <img src={`${BASE_URL}${product.imageURL}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category_name}</p>
            <p>Sold by {product.username}</p>
          </div>
        ))}
    </div>
  );
}

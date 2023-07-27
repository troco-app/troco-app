/* eslint-disable react/prop-types */
import "../assets/css/ItemCardBig.css";
import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";

export function ItemCardBig({ product }) {
  // Parse the average rating to a number
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  return (
    <>
      <article className="product">
        <div className="textProduct">
          <div
            className="imageProduct"
            style={{ backgroundImage: `${BASE_URL}${product.imageURL}` }}
          >
            <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
          </div>
          <a className="buttonWishList" href="/wishlist">
            <button className="wishListButtonProduct">
              <FaHeart className="faHeart" /> Wishlist
            </button>
          </a>
          <h2 className="categoriesProduct">{product.category_name}</h2>
          <h3 className="nameProduct">{product.name}</h3>
          <p className="paragraphProduct">{product.description}</p>
          <div className="footerProduct">
            <div className="valorationUser">
              <p className="userName">{product.username}</p>
              <StarRating rating={averageRating} />
            </div>
            <div className="contenedorUserButtonWrapper">
              <a className="buttonExchangeProduct" href="/ExchangeProduct">
                <button className="userButtonWrapper">EXCHANGE</button>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

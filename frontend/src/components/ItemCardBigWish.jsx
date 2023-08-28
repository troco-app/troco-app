/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../assets/css/ItemCardBig.css";
import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../contexts/WishListContext";

export function ItemCardBigWish({ product }) {
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const { isItemInWishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const inWishlist = isItemInWishlist(product.item_id);

  const handleExchangeClick = () => {
    navigate(`/ProductPage/${product.item_id}`);
  };

  const handleStoreDetailClick = (userId) => {
    navigate(`/StoreDetail/${userId}`);
  };

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(product.item_id);
    } else {
      addToWishlist(product.item_id);
    }
  };

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
          <a className="buttonWishList" onClick={handleWishlistClick}>
            <button className="wishListButtonProduct">
              <FaHeart className={`faHeart${inWishlist ? " red" : ""}`} />{" "}
              {inWishlist ? "Wishlisted" : "Wishlist"}
            </button>
          </a>
          <h2 className="categoriesProduct">{product.category_name}</h2>
          <h3 className="nameProduct">{product.name}</h3>
          <p className="paragraphProduct">{product.description}</p>
          <div className="footerProduct">
            <div className="valorationUser">
              <a
                onClick={() => handleStoreDetailClick(product.user_id)}
                style={{ cursor: "pointer" }}
              >
                <p className="userName">{product.username}</p>
              </a>
              <StarRating rating={averageRating} />
            </div>
            <div className="contenedorUserButtonWrapper">
              <button
                className="userButtonWrapper"
                onClick={handleExchangeClick}
              >
                EXCHANGE
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

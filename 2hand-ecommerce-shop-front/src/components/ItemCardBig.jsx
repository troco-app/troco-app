/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import "../assets/css/ItemCardBig.css";
import "../assets/css/CustomPopUpStyle.css";
import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../contexts/WishListContext";
import { useState } from "react";

export function ItemCardBig({ product }) {
  const { currentUser } = useContext(AuthContext);
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const { isItemInWishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const inWishlist = isItemInWishlist(product.id);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  console.log(product);

  const handleExchangeClick = () => {
    navigate(`/ProductPage/${product.id}`);
  };

  const handleStoreDetailClick = (userId) => {
    navigate(`/StoreDetail/${userId}`);
  };

  const handleWishlistClick = () => {
    if (!currentUser) {
      setShowPopup(true);
      setPopupMessage("You need to be logged in to wishlist a product.");
      return;
    }

    if (currentUser.id === product.user_id) {
      setShowPopup(true);
      setPopupMessage("You cannot wishlist your own product.");
      return;
    }

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="custom-popup">
          <div className="custom-popup-content">
            <span
              className="custom-popup-close"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </span>
            {popupMessage}
          </div>
        </div>
      )}
      <article className="product">
        <div className="textProduct">
          <div
            className="imageProduct"
            style={{
              backgroundImage: `${BASE_URL}${product.imageURL}`,
            }}
          >
            <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
          </div>
          <a className="buttonWishList" onClick={handleWishlistClick}>
            <button className="wishListButtonProduct">
              <FaHeart className={`faHeart${inWishlist ? " red" : ""}`} />{" "}
              {inWishlist ? "Wishlisted" : "Wishlist"}
            </button>
          </a>
          <div className="productInformation">
            <h2 className="categoriesProduct">{product.category_name}</h2>
            <h3 className="nameProduct">{product.name}</h3>
            <p className="paragraphProduct">{product.description}</p>
            <p className="priceProduct">{product.estimated_price}€</p>
          </div>
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

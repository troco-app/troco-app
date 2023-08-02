/* eslint-disable react/prop-types */
import "../assets/css/ItemCardBig.css";
import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { fetchWhishList } from "../api/fetch-wishlist";
export function ItemCardBig({ product }) {
  // Parse the average rating to a number
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const { currentUser, token } = useContext(AuthContext);
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      const wishlistItems = await fetchWhishList(token);
      const isProductInWishlist = wishlistItems.some(
        (item) => item.id === product.id
      );
      setInWishlist(isProductInWishlist);
    };

    checkWishlist();
  }, [product.id, token]);

  const handleExchangeClick = () => {
    navigate(`/ProductPage/${product.id}`);
  };

  const handleStoreDetailClick = (userId) => {
    navigate(`/StoreDetail/${userId}`);
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
          <a className="buttonWishList" href="/wishlist">
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

/* eslint-disable react/prop-types */
import { RemoveItem } from "../api/remove-item";
import "../assets/css/ItemCardPocket.css";
import StarRating from "./StarRating";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function ItemCardPocket({ product, onDeleteItem }) {
  const { token } = useContext(AuthContext);
  const averageRating = parseFloat(product.user_average_rating);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const location = useLocation();
  const showDeleteButton = location.pathname.startsWith("/storeDetail/");
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    RemoveItem(token, product.id)
      .then(() => {
        console.log(`Successfully deleted product with ID: ${product.id}`);
        onDeleteItem(product.id);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID: ${product.id}`, error);
      });
  };

  const handleTitleClick = () => {
    navigate(`/ProductPage/${product.id}`);
  };

  const handleStoreDetailClick = (userId) => {
    navigate(`/StoreDetail/${userId}`);
  };

  return (
    <>
      <section className="itemContent">
        <div className="itemsContainer">
          <article className="item-pocket">
            <div
              className="imageItem"
              style={{
                backgroundImage: `${BASE_URL}${product.imageURL}`,
              }}
            >
              <a
                onClick={() => handleTitleClick(product.user_id)}
                style={{ cursor: "pointer" }}
              >
                <img src={`${BASE_URL}${product.imageURL}`} alt="imagenItem" />
              </a>
            </div>
            <div className="textItem">
              <a
                onClick={() => handleTitleClick(product.user_id)}
                style={{ cursor: "pointer" }}
              >
                <h2 className="titleItem">{product.name}</h2>
                <p className="paragraphItem">{product.description}</p>
              </a>
              <a
                onClick={() => handleStoreDetailClick(product.user_id)}
                style={{ cursor: "pointer" }}
              >
                <p className="nameUser">{product.username}</p>
              </a>
              <p className="productStatus">
                {showDeleteButton && `Status: ${product.status}`}
              </p>
              <a
                onClick={() => handleStoreDetailClick(product.user_id)}
                style={{ cursor: "pointer" }}
              >
                <StarRating rating={averageRating} />
              </a>
              {showDeleteButton && (
                <button onClick={handleDeleteClick} className="binButton">
                  Delete
                </button>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

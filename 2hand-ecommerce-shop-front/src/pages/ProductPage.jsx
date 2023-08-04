import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/fetch-item";
import { fetchItemImages } from "../api/fetch-item-images";
import { fetchUserItems } from "../api/fetch-user-items";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { BigCardList } from "../components/BigCardList";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context.jsx";

import StarRating from "../components/StarRating";

import "../assets/css/pagescss/ProductPage.css";

export function ProductPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [userItems, setUserItems] = useState([]);
  const [itemImages, setItemImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const id = currentUser?.id;
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleExchangeClick = () => {
    if (item.user_id === id) {
      setShowPopup(true);
      setPopupMessage("You can't exchange one of your own products!");
    } else {
      navigate("/ExchangeProduct", {
        state: {
          itemId: item.id,
          sellerId: item.user_id,
          ownerName: item.username,
        },
      });
    }
  };

  useEffect(() => {
    if (itemId) {
      fetchItem(itemId)
        .then((data) => setItem(data))
        .catch((error) => console.error(error));
    }
  }, [itemId]);

  useEffect(() => {
    if (itemId) {
      fetchItemImages(itemId)
        .then((data) => setItemImages(data))
        .catch((error) => console.error(error));
    }
  }, [itemId]);

  useEffect(() => {
    if (item && item.user_id) {
      fetchUserItems(item.user_id)
        .then((data) => setUserItems(data))
        .catch((error) => console.error(error));
    }
  }, [item]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {popupMessage}
          </div>
        </div>
      )}
      <Categories />
      <div className="mainContainer">
        <section className="productSection">
          <div className="imagesContainer">
            <div className="productImage">
              {itemImages.length > 0 ? (
                <img
                  src={`${BASE_URL}${itemImages[selectedImageIndex].imageURL}`}
                  alt={`Main image of ${item.name}`}
                  width="208"
                  height="208"
                />
              ) : (
                <div className="noImageMessage">No images available</div>
              )}
            </div>
            <div className="productImages">
              {itemImages.map((img, index) => (
                <img
                  key={img.id}
                  src={`${BASE_URL}${img.imageURL}`}
                  alt={`Additional image ${index + 1} of ${item.name}`}
                  width="100"
                  height="100"
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="productDetails">
            <h2 className="productName">{item.name}</h2>
            <p className="productDescription">{item.description}</p>
            <div className="ownerDetails">
              <h3 className="ownerName">{item.username}</h3>
              <StarRating className="rating" rating={4} />
            </div>
            <div className="contenedorButtonProductPage">
              <button
                className="userButtonWrapper"
                onClick={handleExchangeClick}
              >
                EXCHANGE
              </button>
            </div>
          </div>
        </section>
        <h3 className="otherProductsH3">
          Other Products from: {item.username}
        </h3>
        <section className="otherProducts">
          <div className="productList">
            <BigCardList products={userItems} className="bigCardList" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

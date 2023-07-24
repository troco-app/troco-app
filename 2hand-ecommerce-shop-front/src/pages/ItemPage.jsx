import "../assets/css/pagescss/ItemPage.css";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/fetch-item";
import { fetchUserItems } from "../api/fetch-user-items";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProducList";

export function ItemPage() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [userItems, setUserItems] = useState([]);
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    // Check if id is not null before making the API call
    if (itemId) {
      fetchItem(itemId)
        .then((data) => setItem(data))
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
      <Categories />
      <div className="main-container">
        <section className="product-section">
          <div className="product-image">
            <img src={`${BASE_URL}${item.imageURL}`} alt="" />
          </div>
          <div className="product-details">
            <h1 className="product-name">{item.name}</h1>
            <p className="product-description">{item.description}</p>
            <div className="owner-details">
              <h3 className="owner-name">{item.username}</h3>
              <StarRating className="rating" rating={4} />
            </div>
          </div>
        </section>
        <section className="other-products">
          <h1>Other Products from {item.username}</h1>
          <ProductList
            products={userItems}
            className="other-products-images scrollable"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

import { Categories } from "../components/Categories";
import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import MapView from "../components/MapView";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "../assets/css/pagescss/SellerPage.css";
import { getUserInfo } from "../api/get-user-info";
import { fetchUserItems } from "../api/fetch-user-items";
import { ProductList } from "../components/ProducList";
import { Footer } from "../components/Footer";

export function SellerPage() {
  const { sellerId } = useParams();
  const [sellerInfo, setSellerInfo] = useState(null);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    // Check if id is not null before making the API call
    if (sellerId) {
      getUserInfo(sellerId)
        .then((data) => setSellerInfo(data))
        .catch((error) => console.error(error));
    }
  }, [sellerId]);

  useEffect(() => {
    if (sellerId) {
      fetchUserItems(sellerId)
        .then((data) => setUserItems(data))
        .catch((error) => console.error(error));
    }
  }, [sellerId]);

  if (!sellerInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Categories />
      <section className="seller-section">
        <article className="seller-article">
          <div className="seller-info">
            <img src={sellerInfo.profile_img} alt="" className="seller-image" />
            <h1 className="seller-name">{sellerInfo.username}</h1>
            <StarRating className="rating" rating={4} />
          </div>
          <div className="seller-description">
            <h2>Bio:</h2>
            <p className="seller-bio">{sellerInfo.bio_summary}</p>
            <h2>Location:</h2>
            <h3>{sellerInfo.city}</h3>
            <MapView city={sellerInfo.city} className="map-view" />
          </div>
        </article>
        <article className="seller-product">
          <ProductList products={userItems} />
        </article>
      </section>
      <Footer />
    </>
  );
}

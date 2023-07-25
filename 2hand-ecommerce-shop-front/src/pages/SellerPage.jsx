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
            <div className="sellerSection">
                <article className="sellerArticle">
                    <div className="sellerInfoUser">
                        <div className="sellerImgUser">
                            <img
                                src={sellerInfo.profile_img}
                                alt="image"
                                className="sellerImage"
                            />
                        </div>
                        <div className="infoUser">
                            <h2 className="sellerName">
                                {sellerInfo.username}
                            </h2>
                            <StarRating className="ratingSeller" rating={4} />
                        </div>
                    </div>
                    <div className="sellerDescription">
                        <h2 className="sellerDescriptionH2">Bio:</h2>
                        <p className="sellerBio">{sellerInfo.bio_summary}</p>
                        <h3 className="sellerDescriptionH3">
                            Location:{sellerInfo.city}
                        </h3>
                        <MapView city={sellerInfo.city} className="mapView" />
                    </div>
                </article>
                <article className="sellerProduct">
                    <ProductList products={userItems} />
                </article>
            </div>
            <a className="aSellerButtonBack" href="/">
                <div className="buttonContainer">
                    <button className="sellerButtonBack ">
                        {" "}
                        Back to troco
                    </button>
                </div>
            </a>
            <Footer />
        </>
    );
}

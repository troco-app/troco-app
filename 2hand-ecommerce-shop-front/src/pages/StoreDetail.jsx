import { Categories } from "../components/Categories";
import { BigCardList } from "../components/BigCarList";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../api/get-user-info";
import { fetchUserItems } from "../api/fetch-user-items";
import StarRating from "../components/StarRating";
import MapView from "../components/MapView";
import "leaflet/dist/leaflet.css";
import "../assets/css/pagescss/StoreDetail.css";

export function StoreDetail() {
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
                                alt={`${sellerInfo.username}'s profile`}
                                className="sellerImage"
                            />
                        </div>
                        <div className="infoUser">
                            <h1 className="sellerName">
                                {sellerInfo.username}
                            </h1>
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
                    <BigCardList products={userItems} />
                </article>
            </div>
            <a className="aSellerButtonBack" href="/">
                <div className="buttonContainer">
                    <button className="sellerButtonBack ">Back to Troco</button>
                </div>
            </a>
            <Footer />
        </>
    );
}

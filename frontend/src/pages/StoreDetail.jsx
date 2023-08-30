import { Categories } from "../components/Categories";
import { PocketCardList } from "../components/PocketCardList";
import { Footer } from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../api/get-user-info";
import { fetchUserItems } from "../api/fetch-user-items";
import StarRating from "../components/StarRating";
import MapView from "../components/MapView";
import "leaflet/dist/leaflet.css";
import "../assets/css/pagescss/StoreDetail.css";
import { AuthContext } from "../contexts/auth-context.jsx";
import { CustomButtonBack } from "../components/CustomButtonBack";

export function StoreDetail() {
    const { sellerId } = useParams();
    const [sellerInfo, setSellerInfo] = useState(null);
    const [userItems, setUserItems] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const id = currentUser?.id;
    const showUploadButton = sellerId === id;

    const handleDeleteItem = (itemId) => {
        setUserItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

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
                            {showUploadButton && (
                                <a href="/AddProduct">
                                    <button className="seller-upload-product">
                                        Upload Product
                                    </button>
                                </a>
                            )}
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
                <article className="storeDetailPocket">
                    <h3 className="titleProductsH3">
                        Things offer to exchange:
                    </h3>
                    <PocketCardList
                        products={userItems}
                        onDeleteItem={handleDeleteItem}
                    />
                </article>
            </div>
            <CustomButtonBack />
            <Footer />
        </>
    );
}

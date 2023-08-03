import "../assets/css/pagescss/UserInfo.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { getUserInfo } from "../api/get-user-info";
import { getUserDeals } from "../api/get-user-deals";
import { Footer } from "../components/Footer";
import { FaUpload, FaHeart } from "react-icons/fa";
import StarRating from "../components/StarRating";

export function UserInfo() {
    const { currentUser, token } = useContext(AuthContext);
    const id = currentUser?.id;
    const [userInfo, setUserInfo] = useState(null);
    const [userDeals, setUserDeals] = useState(null);
    const [averageRating, setAverageRating] = useState(null);

    useEffect(() => {
        // Check if id is not null before making the API call
        if (id) {
            getUserInfo(id)
                .then((data) => {
                    const averageRating = parseFloat(data.average_rating);
                    setAverageRating(averageRating); // Set average rating in state
                    setUserInfo(data);
                })
                .catch((error) => console.error(error));
        }
        // Fetch user deals
        getUserDeals(token)
            .then((data) => setUserDeals(data))
            .catch((error) => console.error(error));
    }, [id, token]);

    // handle the loading state
    if (!userInfo || !userDeals || averageRating === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="profile-box">
                <section className="profile-section">
                    <h1 className="profile-name">{userInfo.first_name}</h1>
                    <img
                        className="profile-image"
                        src={userInfo.profile_img}
                        alt={`${userInfo.first_name}'s profile`}
                    />
                    <StarRating className="rating" rating={averageRating} />
                </section>
                <section className="actions-section">
                    <div className="headline">
                        <h2 className="headlineH2">Headline</h2>
                    </div>
                    <div className="actions-buttons">
                        <a href="/AddProduct">
                            <button className="upload-button">
                                <FaUpload /> Upload Something
                            </button>
                        </a>
                        <a href="wishlist">
                            <button className="wishlist-button">
                                <FaHeart /> Wishlist
                            </button>
                        </a>
                    </div>
                </section>
                <section className="info-section">
                    <div>
                        <h2 className="info-title">Profile Info</h2>
                    </div>
                    <div className="info-content">
                        <ul className="info-ul">
                            <li>{userInfo.first_name}</li>
                            <li>{userInfo.last_name}</li>
                            <li>{userInfo.city}</li>
                            <li>{userInfo.email}</li>
                            <li>{userInfo.bio_summary}</li>
                        </ul>
                    </div>
                    <section className="history-section">
                        <div>
                            <h2 className="history-title">Deals History</h2>
                        </div>
                        <div className="history-content">
                            {userDeals.map((deal) => (
                                <div className="deal" key={deal[0].id}>
                                    <h3 className="deal-date">
                                        Deal created at:{" "}
                                        {new Date(
                                            deal[0].createdAt
                                        ).toLocaleString()}
                                    </h3>
                                    <h4 className="deal-status ">
                                        Status: {deal[0].status}
                                    </h4>
                                    {deal.map((item, i) => (
                                        <div className="deal-item" key={i}>
                                            <p className="item-owner">
                                                Owner: {item.owner_username}
                                            </p>
                                            <p className="item-name">
                                                Item: {item.item_name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
            <Footer />
        </>
    );
}

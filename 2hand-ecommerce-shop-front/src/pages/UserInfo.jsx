import "../assets/css/UserInfo.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { getUserInfo } from "../api/get-user-info";
import { getUserDeals } from "../api/get-user-deals";
import StarRating from "../components/StarRating";

export function UserInfo() {
  const { currentUser, token } = useContext(AuthContext);
  const id = currentUser?.id;
  const [userInfo, setUserInfo] = useState(null);
  const [userDeals, setUserDeals] = useState(null);

  useEffect(() => {
    // Check if id is not null before making the API call
    if (id) {
      getUserInfo(id)
        .then((data) => setUserInfo(data))
        .catch((error) => console.error(error));
    }

    // Fetch user deals
    getUserDeals(token)
      .then((data) => setUserDeals(data))
      .catch((error) => console.error(error));
  }, [id, token]);

  console.log(userInfo?.email);
  console.log(token);
  console.log(userDeals);

  // handle the loading state
  if (!userInfo || !userDeals) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-box">
      <section className="profile-section">
        <h1 className="profile-name">{userInfo.firstname}</h1>
        <img className="profile-image" src={userInfo.profile_img} alt="" />
        <StarRating className="rating" rating={4} />
      </section>
      <section className="actions-section">
        <div>
          <h1 className="headline">Headline</h1>
        </div>
        <div className="actions-buttons">
          <button className="upload-button">Upload Something</button>
          <button className="wishlist-button">Whislist</button>
        </div>
      </section>
      <section className="info-section">
        <div>
          <h1 className="info-title">Profile Info</h1>
        </div>
        <div className="info-content">
          <ul>
            <li>{userInfo.firstname}</li>
            <li>{userInfo.last_name}</li>
            <li>{userInfo.city}</li>
            <li>{userInfo.email}</li>
            <li>{userInfo.bio_summary}</li>
          </ul>
        </div>
        <section className="history-section">
          <div>
            <h1 className="history-title">Deals History</h1>
          </div>
          <div className="history-content">
            {userDeals.map((deal) => (
              <div className="deal" key={deal[0].id}>
                <h2 className="deal-date">
                  Deal created at:{" "}
                  {new Date(deal[0].createdAt).toLocaleString()}
                </h2>
                <h3 className="deal-status">Status: {deal[0].status}</h3>
                {deal.map((item, i) => (
                  <div className="deal-item" key={i}>
                    <p className="item-owner">Owner: {item.owner_username}</p>
                    <p className="item-name">Item: {item.item_name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

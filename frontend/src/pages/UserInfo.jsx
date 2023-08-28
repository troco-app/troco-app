import "../assets/css/pagescss/UserInfo.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { getUserInfo } from "../api/get-user-info";
import { getUserDeals } from "../api/get-user-deals";
import { Footer } from "../components/Footer";
import { FaUpload, FaHeart, FaEdit, FaSave } from "react-icons/fa";
import StarRating from "../components/StarRating";
import { modifyUserInfo } from "../api/modify-user-info";

export function UserInfo() {
  const { currentUser, token } = useContext(AuthContext);
  const id = currentUser?.id;
  const [userInfo, setUserInfo] = useState(null);
  const [userDeals, setUserDeals] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({});

  useEffect(() => {
    if (id) {
      getUserInfo(id)
        .then((data) => {
          const averageRating = parseFloat(data.average_rating);
          setAverageRating(averageRating);
          setUserInfo(data);
        })
        .catch((error) => console.error(error));
    }
    getUserDeals(token)
      .then((data) => setUserDeals(data))
      .catch((error) => console.error(error));
  }, [id, token]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (!isEditMode) {
      setUpdatedInfo({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        city: userInfo.city,
        bio_summary: userInfo.bio_summary,
        profile_img: userInfo.profile_img,
        password: userInfo.password,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await modifyUserInfo(updatedInfo, token);
      if (response && response.success) {
        setUserInfo(updatedInfo);
        setIsEditMode(false);
      } else {
        console.error("Failed to update user info:", response.message);
      }
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

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
            <h2 className="headlineH2">Actions</h2>
          </div>
          <div className="actions-buttons">
            <a href="/AddProduct">
              <button className="upload-button">
                <FaUpload /> Upload Something
              </button>
            </a>
            <a href="/WishListPage">
              <button className="wishlist-button">
                <FaHeart /> Wishlist
              </button>
            </a>
            {isEditMode ? (
              <button className="edit-button" onClick={toggleEditMode}>
                <FaEdit /> Cancel
              </button>
            ) : (
              <button className="edit-button" onClick={toggleEditMode}>
                <FaEdit />
                Edit Profile Info
              </button>
            )}
          </div>
        </section>
        <section className="info-section">
          <div>
            <h2 className="info-title">Profile Info</h2>
          </div>
          {isEditMode ? (
            <div className="info-content-edit">
              <label htmlFor="first_name">First Name:</label>
              <input
                id="first_name"
                name="first_name"
                value={updatedInfo.first_name}
                onChange={handleChange}
                className="edit-input"
              />

              <label htmlFor="last_name">Last Name:</label>
              <input
                id="last_name"
                name="last_name"
                value={updatedInfo.last_name}
                onChange={handleChange}
                className="edit-input"
              />

              <label htmlFor="city">City:</label>
              <input
                id="city"
                name="city"
                value={updatedInfo.city}
                onChange={handleChange}
                className="edit-input"
              />

              <label htmlFor="bio_summary">Bio Summary:</label>
              <textarea
                id="bio_summary"
                name="bio_summary"
                value={updatedInfo.bio_summary}
                onChange={handleChange}
                className="edit-input"
              />

              <label htmlFor="profile_img">Profile Image URL:</label>
              <input
                id="profile_img"
                name="profile_img"
                value={updatedInfo.profile_img}
                onChange={handleChange}
                className="edit-input"
              />

              <button className="save-button" onClick={handleSubmit}>
                <FaSave /> Save Changes
              </button>
            </div>
          ) : (
            <div className="info-content">
              <ul className="info-ul">
                <li className="bold">First Name</li>
                <li>{userInfo.first_name}</li>
                <li className="bold">Last Name</li>
                <li>{userInfo.last_name}</li>
                <li className="bold">City</li>
                <li>{userInfo.city}</li>
                <li className="bold">Email</li>
                <li>{userInfo.email}</li>
                <li className="bold">Bio Summary</li>
                <li>{userInfo.bio_summary}</li>
              </ul>
            </div>
          )}
          <section className="history-section">
            <div>
              <h2 className="history-title">Deals History</h2>
            </div>
            <div className="history-content">
              {userDeals.map((deal) => (
                <div className="deal" key={deal[0].id}>
                  <h3 className="deal-date">
                    Deal created at:{" "}
                    {new Date(deal[0].createdAt).toLocaleString()}
                  </h3>
                  <h4 className="deal-status">Status: {deal[0].status}</h4>
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
      <Footer />
    </>
  );
}

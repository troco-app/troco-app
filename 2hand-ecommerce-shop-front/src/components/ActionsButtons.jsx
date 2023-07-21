import { FaUpload, FaHeart } from "react-icons/fa";

const ActionsButtons = () => {
  return (
    <div className="actions-buttons">
      <button className="upload-button">
        <FaUpload className="faUpload"/> Upload Something
      </button>
      <button className="wishlist-button">
        <FaHeart className="faHeart"/> Wishlist
      </button>
    </div>
  );
};

export default ActionsButtons;

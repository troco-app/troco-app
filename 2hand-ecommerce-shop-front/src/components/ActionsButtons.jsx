import { FaUpload, FaHeart } from "react-icons/fa";

const ActionsButtons = () => {
  return (
    <div className="actions-buttons">
      <button className="upload-button">
        <FaUpload /> Upload Something
      </button>
      <button className="wishlist-button">
        <FaHeart /> Wishlist
      </button>
    </div>
  );
};

export default ActionsButtons;

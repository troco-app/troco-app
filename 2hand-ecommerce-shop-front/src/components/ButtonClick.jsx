import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
FaHeart

export function ButtonClick() {
  const [isClicked, setIsClicked] = useState(false);

  function handleButtonClick() {
    setIsClicked(true);
  }

  return (
    <section className="productContent">
      <button
        className={`wishlist-button-product ${isClicked ? 'wishlist-button-clicked' : ''}`}
        onClick={handleButtonClick}
      >
        <FaHeart className="faHeart" /> Wishlist
      </button>
    </section>
  );
}










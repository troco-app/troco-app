import { BigCardWishlist } from "../components/BigCardWishlist";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { fetchWhishList } from "../api/fetch-wishlist";
import "../assets/css/pagescss/WishList.css";
import { Footer } from "../components/Footer";
import empty_box from "../assets/img/empty_box.png";

export function WishListPage() {
  const [itemsWished, setItemsWished] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      fetchWhishList(token)
        .then((data) => setItemsWished(data))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <>
      <div className="wishlist-page">
        <h1 className="wishlist-h1">Your Wish List Treasures </h1>
        <div className="card-list-desktop">
          {itemsWished.length === 0 ? (
            <div className="no-items-text">
              <img src={empty_box} alt="empty Box" />
              <p className="no-items-description">
                You do not have any items in your wishlist yet. Browse products
                and add the ones you love!
              </p>
            </div>
          ) : (
            <BigCardWishlist products={itemsWished} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

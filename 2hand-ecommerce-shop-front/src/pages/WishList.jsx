import { BigCardList } from "../components/BigCardList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";
import { fetchWhishList } from "../api/fetch-wishlist";
import "../assets/css/pagescss/WishList.css";
import { Footer } from "../components/Footer";

export function WishList() {
  const [itemsWished, setItemsWished] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      // Only make the API call if token is not null
      fetchWhishList(token)
        .then((data) => setItemsWished(data))
        .catch((error) => console.error(error));
    }
  }, [token]); // Include token in the dependencies array

  return (
    <>
      <div className="wishlist-page">
        <h1 className="wishlist-h1">Your Wish List Treasures: </h1>
        <div className="card-list-desktop">
          <BigCardList products={itemsWished} />
        </div>
      </div>
      <Footer />
    </>
  );
}

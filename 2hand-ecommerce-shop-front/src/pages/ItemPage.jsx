import "../assets/css/pagescss/ItemPage.css";
import StarRating from "../components/StarRating";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItem } from "../api/fetch-item";
import { fetchUserItems } from "../api/fetch-user-items";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { ProductList } from "../components/ProducList";

export function ItemPage() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [userItems, setUserItems] = useState([]);
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    useEffect(() => {
        // Check if id is not null before making the API call
        if (itemId) {
            fetchItem(itemId)
                .then((data) => setItem(data))
                .catch((error) => console.error(error));
        }
    }, [itemId]);

    useEffect(() => {
        if (item && item.user_id) {
            fetchUserItems(item.user_id)
                .then((data) => setUserItems(data))
                .catch((error) => console.error(error));
        }
    }, [item]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <header>
                <Categories />
            </header>
            <main>
                <article className="mainContainer">
                    <section className="productSection">
                        <div className="productImage">
                            <img
                                src={`${BASE_URL}${item.imageURL}`}
                                alt={item.name}
                            />
                        </div>
                        <div className="productDetails">
                            <h1 className="productName">{item.name}</h1>
                            <p className="productDescription">
                                {item.description}
                            </p>
                            <div className="ownerDetails">
                                <h2 className="ownerName">{item.username}</h2>
                                <StarRating className="rating" rating={4} />
                            </div>
                        </div>
                    </section>
                    <section className="otherProducts">
                        <h3 className="otherProductsH3">
                            Other Products from: {item.username}
                        </h3>
                        <div className="productList">
                            <ProductList products={userItems} />
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}

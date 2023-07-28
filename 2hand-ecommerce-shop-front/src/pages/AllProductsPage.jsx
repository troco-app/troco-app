import "../assets/css/pagescss/AllProductsPage.css";
import { BigCardList } from "../components/BigCardList";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { fetchAllItems } from "../api/fetch-all-items";
import { useEffect } from "react";
import { useState } from "react";



export function AllProductsPage() {

    const [allItems, setAllItems] = useState([]);
    useEffect(() => {

        fetchAllItems()
          .then((data) => setAllItems(data))
          .catch((error) => console.error(error));
  
    }, );

    return (
        <>
            <Categories />
            <BigCardList products={allItems}/>
            <Footer />
        </>
    );
}

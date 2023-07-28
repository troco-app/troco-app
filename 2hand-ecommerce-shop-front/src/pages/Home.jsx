import { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Box } from "../components/Box";
import atari from "../assets/img/Atari-2600.jpg";
import nintendo from "../assets/img/nintendo.jpg";
import psp from "../assets/img/psp.jpg";
import "../assets/css/Home.css";
import { fetchLatestProduct } from "../api/fetch-latest-products";
import { PocketCardList } from "../components/PocketCardList";
import { BigCardList } from "../components/BigCardList";

export function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [atari, nintendo, psp];
    const [allProducts, setAllProducts] = useState([]);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        fetchLatestProduct()
            .then((data) => {
                setAllProducts(data);
                const firstThreeProducts = data.slice(0, 3);
                setLatestProducts(firstThreeProducts);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <header>
                <Categories />
            </header>
            <main>
                <section className="pageSectionNav">
                    <div className="leftContainer">
                        <h1>Trade your treasure and</h1>
                        <h2>Game on!</h2>
                        <nav className="sectionLinks">
                            <a href="/AllProductsPage">
                                <button className="buttonPageSection">
                                    EXPLORE ALL PRODUCTS
                                </button>
                            </a>
                        </nav>
                    </div>
                    <img
                        src={images[currentImage]}
                        alt="Trade Your Treasure"
                        className="sectionImage"
                    />
                </section>
                <h2 className="h2CardList">Fresh from the oven</h2>
                <PocketCardList products={latestProducts} />
                <h2 className="h2BigCardList">Most exchanged goodies</h2>
                <BigCardList products={latestProducts} />
                <Box />
            </main>
            <Footer />
        </>
    );
}

export default Home;

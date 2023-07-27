import { useEffect } from "react";
import { Categories } from "../components/Categories";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Box } from "../components/Box";
import atari from "../assets/img/Atari-2600.jpg";
import nintendo from "../assets/img/nintendo.jpg";
import psp from "../assets/img/psp.jpg";
import { ItemsPocket } from "../components/ItemsPocket";
import "../assets/css/Home.css";
import { ItemProduct } from "../components/ItemProduct";

export function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [atari, nintendo, psp];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);
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
                <ItemsPocket />
                <ItemProduct />
                <Box />
            </main>
            <Footer />
        </>
    );
}

export default Home;

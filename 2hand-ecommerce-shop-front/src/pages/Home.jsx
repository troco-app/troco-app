import { useEffect } from "react";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { useState } from "react";
import { Footer } from "../components/Footer";
//import { CookieConsent } from "../components/CookieConsent";
import "../assets/css/Home.css";
import atari from "../assets/img/Atari-2600.jpg";
import nintendo from "../assets/img/nintendo.jpg";
import psp from "../assets/img/psp.jpg";

export function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [atari, nintendo, psp];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Header />
            <Categories />
            <section className="pageSectionNav">
                <div className="leftContainer">
                    <h1>Trade your treasure and</h1>
                    <h2>Game on!</h2>
                    <nav className="sectionLinks">
                        <button className="buttonPageSection">
                            <a href="#">EXPLORE ALL PRODUCTS</a>
                        </button>
                    </nav>
                </div>
                <img
                    src={images[currentImage]}
                    alt="Imagen"
                    className="sectionImage"
                />
            </section>
            <Footer />
        </>
    );
}

export default Home;

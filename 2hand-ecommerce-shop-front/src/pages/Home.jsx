import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Categories } from "../components/Categories";
import { useState } from "react";
import { PopupHome } from "../components/PopupHome";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Footer } from "../components/Footer";
import "../assets/css/Popup.css";
//import { CookieConsent } from "../components/CookieConsent";
import "../assets/css/Home.css";
import logo from "../assets/img/logo.svg";
import atari from "../assets/img/Atari-2600.jpg";
import nintendo from "../assets/img/nintendo.jpg";
import psp from "../assets/img/psp.jpg";
import userhome from "../assets/img/user_white.svg";

export function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
      <nav className="navPrincipal">
        <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
        <NavbarDesktop />
        <button className="popupHome" onClick={openPopup}>
          <i className="material-symbols-rounded ">menu</i>
          <img className="userhome" src={userhome} alt="Icono usuario" />
        </button>
        <PopupHome isOpen={isPopupOpen} onClose={closePopup} />
      </nav>
      <Navbar />
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
        <img src={images[currentImage]} alt="Imagen" className="sectionImage" />
      </section>

      <Footer />
    </>
  );
}

export default Home;

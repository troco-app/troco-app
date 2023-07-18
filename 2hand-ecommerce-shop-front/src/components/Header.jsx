import { useState } from "react";
import { PopupHome } from "../components/PopupHome";
import { Navbar } from "../components/Navbar";
import userhome from "../assets/img/user_white.svg";
import logo from "../assets/img/logo.svg";
import "../assets/css/Popup.css";
import "../assets/css/Navbar.css";
import "../assets/css/Header.css" ;


export function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <nav className="navPrincipal">
                <div
                    className="logo"
                    style={{ backgroundImage: `url(${logo})` }}
                ></div>
                <Navbar />
                <button className="popupHome" onClick={openPopup}>
                    <i className="material-symbols-rounded ">menu</i>
                    <img
                        className="userhome"
                        src={userhome}
                        alt="Icono usuario"
                    />
                </button>
                <PopupHome isOpen={isPopupOpen} onClose={closePopup} />
            </nav>
        
        </>
    );
}

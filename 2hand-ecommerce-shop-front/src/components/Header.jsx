
import { Navbar } from "../components/Navbar";
import userhome from "../assets/img/user_white.svg";
import logo from "../assets/img/logo.svg";
import "../assets/css/Popup.css";
import "../assets/css/Navbar.css";
import "../assets/css/Header.css";

export function Header() {

    return (
        <>
            <nav className="navPrincipal">
                <a href="/">
                    <div
                        className="logo"
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                </a>
                <Navbar />
                <a className="aButtonLogin" href="/login">
                <button className="popupHome" onClick>
                    <i className="material-symbols-rounded ">menu</i>
                    <img
                        className="userhome"
                        src={userhome}
                        alt="Icono usuario"
                    />
                </button>
                </a>
                
            </nav>
        </>
    );
}

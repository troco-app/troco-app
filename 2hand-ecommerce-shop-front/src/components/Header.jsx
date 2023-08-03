import { Navbar } from "../components/Navbar";
import userhome from "../assets/img/user_white.svg";
import logo from "../assets/img/troco.svg";
import "../assets/css/Popup.css";
import "../assets/css/Navbar.css";
import "../assets/css/Header.css";
import { AuthContext } from "../contexts/auth-context.jsx";
import { useContext, useState } from "react";


export function Header() {
  const { currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <nav className="navPrincipal">
        <a href="/">
          <div
            className="logo-header"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </a>
        <Navbar />
        <div className="userMenu">
          <button className="popupHome" onClick={toggleMenu}>
            <i className="material-symbols-rounded">menu</i>
            <img className="userhome" src={userhome} alt="Icono usuario" />
          </button>
          {menuOpen && (
            <div className="menuDropdown">
              {currentUser ? (
                <>
                  <div onClick={() => handleMenuClick("/UserInfo")}>
                    Profile
                  </div>
                  <div onClick={() => handleMenuClick("/UserDeals")}>
                    Deals
                  </div>
                  <div onClick={() => handleMenuClick("/WishList")}>
                    Wishlist
                  </div>
                </>
              ) : (
                <>
                  <div onClick={() => handleMenuClick("/login")}>Login</div>
                  <div onClick={() => handleMenuClick("/register")}>
                    Register
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

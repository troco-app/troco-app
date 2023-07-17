import "../assets/css/NavbarDesktop.css";
import { useState } from "react";
import { useEffect } from "react";


export function NavbarDesktop() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return showNavbar ? (
    <nav className="navbardesktop">
      <input type="text" placeholder="FIND SOMETHING" />
    </nav>
  ) : null;
}


import "../assets/css/Navbar.css";
import { useState } from "react";
import { useEffect } from "react";

export function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        setShowNavbar(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return showNavbar ? (
      <nav className="navbar">
        <input type="text" placeholder="FIND SOMETHING" />
      </nav>
    ) : null;
  }

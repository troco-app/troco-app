import "../assets/css/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.trim()) {
        navigate(`/SearchPage?search=${searchTerm}`);
      } else {
        navigate("/SearchPage");
      }
    }
  };

  return (
    <nav className="navbar">
      <input
        className="input-navbar"
        type="text"
        placeholder="Find Something"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleSearch}
      />
    </nav>
  );
}

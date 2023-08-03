import "../assets/css/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      // To trigger the search on pressing Enter
      navigate(`/SearchPage?search=${searchTerm}`); // Redirecting to the search page with the search term
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

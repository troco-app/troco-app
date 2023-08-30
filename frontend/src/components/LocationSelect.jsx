/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/css/LocationSelect.css";

export function LocationSelect({ locations, onLocationSelected }) {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleClick = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
    onLocationSelected(value); // call the callback
  };

  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  return (
    <div className="location-select">
      <input
      className="location-select-2"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      {showSuggestions && (
        <ul>
          {filteredLocations.map((location) => (
            <li key={location} onClick={() => handleClick(location)}>
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

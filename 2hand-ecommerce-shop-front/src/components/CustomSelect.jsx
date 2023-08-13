/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../assets/css/CustomSelect.css";
import { useRef } from "react";

export function CustomSelect({
  options,
  onOptionSelected,
  id,
  name,
  placeholder,
}) {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isFirstClick = useRef(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };

  const handleClick = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
    onOptionSelected(value);
  };

  const filteredOptions = options.filter((option) =>
    option["name"].toLowerCase().startsWith(inputValue.toLowerCase())
  );

  const handleInputClick = () => {
    if (isFirstClick.current) {
      setShowSuggestions(true);
      isFirstClick.current = false;
    }
  };

  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={wrapperRef}>
      <input
        className="inputCustomSelect"
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleChange}
        onClick={handleInputClick}
        placeholder={placeholder}
      />

      {showSuggestions && (
        <ul className="ulCustomSelect">
          <li
            className="liCustomSelect"
            onClick={() => {
              handleClick("");
            }}
          >
            Clear Selection
          </li>
          {filteredOptions.map((option) => (
            <li
              className="liCustomSelect"
              key={option["id"]}
              onClick={() => handleClick(option["name"])}
            >
              {option["name"]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

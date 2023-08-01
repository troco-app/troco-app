import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BigCardList } from "../components/BigCardList";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { searchItems } from "../api/search-items";
import categories from "../utils/category-list";
import conditionOptions from "../utils/conditions-options";
import locations from "../utils/locations-list";
import { LocationSelect } from "../components/LocationSelect";

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [results, setResults] = useState([]);

  const urlLocation = useLocation();
  const searchParams = new URLSearchParams(urlLocation.search);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    const items = await searchItems({
      search: searchTerm,
      category_name: categoryName,
      item_condition: itemCondition,
      location: location,
      min_price: minPrice,
      max_price: maxPrice,
    });
    console.log(items);
    setResults(items);
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <>
      <Categories />
      {/* Removed the input for search term here */}
      <select
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      >
        <option value="">--Please choose a category--</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        value={itemCondition}
        onChange={(e) => setItemCondition(e.target.value)}
      >
        <option value="">--Please choose an item condition--</option>
        {conditionOptions.map((condition) => (
          <option key={condition} value={condition}>
            {condition}
          </option>
        ))}
      </select>
      <LocationSelect locations={locations} onLocationSelected={setLocation} />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
      />
      <button onClick={handleSearch}>Filter</button>
      <BigCardList products={results} />
      <Footer />
    </>
  );
}

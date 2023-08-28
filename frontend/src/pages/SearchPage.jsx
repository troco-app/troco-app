import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BigCardList } from "../components/BigCardList";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { searchItems } from "../api/search-items";
import categories from "../utils/category-list";
import conditionOptions from "../utils/conditions-options";
import locations from "../utils/locations-list";
import { CustomSelect } from "../components/CustomSelect";
import "../assets/css/pagescss/SearchPage.css";

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
    const categoryQuery = searchParams.get("category_name");
    setCategoryName(categoryQuery || "");
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  const handleSearch = async () => {
    const items = await searchItems({
      search: searchTerm || undefined,
      category_name: categoryName || undefined,
      item_condition: itemCondition || undefined,
      location: location || undefined,
      min_price: minPrice || undefined,
      max_price: maxPrice || undefined,
    });
    console.log(items);
    setResults(items);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm, categoryName, itemCondition, location, minPrice, maxPrice]);

  return (
    <>
      <header>
        <nav>
          <Categories />
        </nav>
      </header>

      <div className="mainSearchPage">
        <form className="search-form">
          <CustomSelect
            options={categories}
            onOptionSelected={setCategoryName}
            id="category-select"
            name="category-select"
            placeholder="All Categories"
          />

          <CustomSelect
            options={conditionOptions}
            onOptionSelected={setItemCondition}
            name="condition-select"
            id="condition-select"
            placeholder="Any State"
          />

          <CustomSelect
            options={locations}
            onOptionSelected={setLocation}
            id="location-select"
            name="location-select"
            placeholder="All Provinces"
          />

          <input
            className="inputPrice "
            type="number"
            name="minPrice"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
          />

          <input
            className="inputPrice"
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
          />

          <button
            className="Button-Search-Page"
            type="button"
            onClick={handleSearch}
          >
            Filter
          </button>
        </form>
        <BigCardList products={results} />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

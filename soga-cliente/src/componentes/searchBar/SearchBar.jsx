import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { ImSearch } from "react-icons/im";

const BASEURL = "http://localhost:3000/api/users";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 1) {
      try {
        const response = await axios.get(
          `${BASEURL}/search?query=${searchQuery}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className={style.searchBar}>
      <ImSearch size={20} />
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Pesquisar..."
      />
      {results.length > 0 && (
        <div className={style.dropdown}>
          {results.map((user) => (
            <Link
              key={user.id}
              to={`/perfilde/${user.id}`}
              className={style.dropdownItem}
            >
              <img
                src={`http://localhost:3000/uploads/${user.profile_picture}`}
                alt={user.nome}
              />
              <span>{user.nome}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

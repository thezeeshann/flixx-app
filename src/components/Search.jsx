import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import MovieContext from "../context/movieContext";
import "./Search.css"

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(MovieContext);

  return (
    <section className="search">
      <div className="container">
        <div id="alert"></div>
        <form className="search-form">
          <div className="search-flex">
            <input
              type="text"
              name="search-term"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-term"
              placeholder="Enter search term"
            />
            <button className="btn" type="submit">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;

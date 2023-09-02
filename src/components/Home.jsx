import Search from "./common/Search";
import NowPlaying from "./NowPlaying";
import "./Home.css";
import { useState } from "react";
import TopRated from "./movies/TopRated";
import Upcoming from "./movies/Upcoming";
import Popular from "./movies/Popular"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    popular: true,
    top_rated: false,
    upcoming: false,
  });

  function handleCategory(category) {
    setSelectedCategory((prev) => ({
      ...prev,
      popular: category === "popular" ? true : false,
      top_rated: category === "top_rated" ? true : false,
      upcoming: category === "upcoming" ? true : false,
    }));
  }

  return (
    <main>
      <NowPlaying />
      <Search />
      <section className="container">
        <h2>{`${selectedCategory.top_rated ? "TOP RATED MOVIES" : selectedCategory.upcoming ? "UPCOMING MOVIES" : "POPULAR MOVIES"}`}</h2>
        <div className="movies-sections">
          <h3
            onClick={() => handleCategory("popular")}
            className={`${
              selectedCategory.popular ? "active-movies-category" : ""
            }`}
          >
            POPULAR 🌟
          </h3>
          <h3
            onClick={() => handleCategory("top_rated")}
            className={`${
              selectedCategory.top_rated ? "active-movies-category" : ""
            }`}
          >
            Top Rated 👌
          </h3>
          <h3
            onClick={() => handleCategory("upcoming")}
            className={`${
              selectedCategory.upcoming ? "active-movies-category" : ""
            }`}
          >
            Upcoming 📅
          </h3>
        </div>
        {selectedCategory.top_rated ? (
          <TopRated />
        ) : selectedCategory.upcoming ? (
          <Upcoming />
        ) : (
          <Popular />
        )}
      </section>
    </main>
  );
};

export default Home;

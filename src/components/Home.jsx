import { FaSearch } from "react-icons/fa";
import Movie from "./Movie";
import "./Home.css";

const Home = () => {
  return (
    <main>

      {/* <!-- Now Playing Section --> */}
      <section className="now-playing">
        <h2>Now Playing</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* <div className="swiper-slide">
            <a href="movie-details.html?id=1">
              <img src="./images/no-image.jpg" alt="Movie Title" />
            </a>
            <h4 className="swiper-rating">
              <i className="fas fa-star text-secondary"></i> 8 / 10
            </h4>
          </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Search Movies --> */}
      <section className="search">
        <div className="container">
          <div id="alert"></div>
          <form action="/search.html" className="search-form">
            {/* <!-- movies and shows radio box --> */}
            {/* <div className="search-radio">
              <input type="radio" id="movie" name="type" value="movie" />
              <label htmlFor="movies">Movies 🎞</label>
              <input type="radio" id="tv" name="type" value="tv" />
              <label htmlFor="shows">TV Shows 📺</label>
            </div> */}
            <div className="search-flex">
              <input
                type="text"
                name="search-term"
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

      <Movie />
    </main>
  );
};

export default Home;

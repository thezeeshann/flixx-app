import { useContext } from "react";
import {Link} from "react-router-dom"
import AppContext from "../context/movieContext";
import Search from "./Search";
import NowPlaying from "./NowPlaying";
import movieImage from "../images/image.jpg";
import Spinner from "./Spinner";

const Shows = () => {
  const { isLoading,tvShow } = useContext(AppContext);
  return (
    <main>
    {/* <!-- Now Playing Section --> */}
    <NowPlaying />
    {/* <!-- Search Movies --> */}
    <Search />
    {/* shows */}
    <section className="container">
      <h2>Popular TV Shows</h2>
      <div id="popular-movies" className="grid">
        {isLoading ? (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner /></div>
        ) : (
          tvShow.map((show) => (
            <div key={show.id} className="card">
              <Link to={`/movie-details/${show.id}`}>
              {/* <a href="movie-details.html?id=1"> */}
                <img
                  src={show.poster_path ? `https://image.tmdb.org/t/p/w500/${show.poster_path}` : movieImage }
                  className="card-img-top"
                  alt={show.original_name}
                />
              {/* </a> */}
              </Link>
              <div className="card-body">
                <h5 className="card-title">{show.original_name}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Release: {show.first_air_date}
                  </small>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  </main>
  )
}

export default Shows
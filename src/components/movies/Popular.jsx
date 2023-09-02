import { useContext } from "react";
import { Link } from "react-router-dom";
import movieImage from "../../images/image.jpg";
import Spinner from "../common/Spinner";
import AppContext from "../../context/AppContext";
import "./index.css";

const Popular = () => {
  const { isLoading, movies } = useContext(AppContext);

  return (
    <div id="popular-movies" className="grid">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="card">
            <Link to={`/movie-details/${movie.id}`}>
              {/* <a href="movie-details.html?id=1"> */}
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : movieImage
                }
                className="card-img-top"
                alt={movie.original_title}
              />
              {/* </a> */}
            </Link>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                <small className="text-muted">
                  Release: {movie.release_date}
                </small>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Popular;

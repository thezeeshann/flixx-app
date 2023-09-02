import image from "../images/image.jpg";
import { Link } from "react-router-dom";
import "./SingleMovieCard.css"

const SingleMovieCard = ({ movie }) => {
  return (
    <div key={movie.id} id="movie-details">
      <div className="details-top">
        <div>
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : image
            }
            className="card-img-top"
            alt="Movie Title"
          />
        </div>
        <div className="">
          <h2>{movie.original_title}</h2>
          <p>
            <i className="fas fa-star text-primary"></i>{" "}
            <span className="text-muted">Average Vote:</span>{" "}
            {Math.round(movie.vote_average)} / 10
          </p>
          <p>
            <span className="text-muted">Release Date:</span>{" "}
            {movie.release_date}
          </p>
          <p>{movie.overview}</p>
          <div className="movie-heading">
            <h5 className="text-muted">TagLine :</h5>
            <ul>
              <li>{movie.tagline}</li>
            </ul>
            <h5 className="text-muted">Language :</h5>
            <ul>
              <li>{movie.original_language}</li>
            </ul>
            <h5 className="text-muted">Genres :</h5>
            <ul className="list-group">
              {movie.genres?.map((genre) => (
                <li key={genre.id}>{genre.name},</li>
              ))}
            </ul>
          </div>
          <Link to={movie.homepage} target="_blank" className="btn">
            Visit Movie Homepage
          </Link>
        </div>
      </div>
      <div className="details-bottom">
        <h2>Movie Info</h2>
        <ul>
          <li>
            <span className="text-secondary">Budget:</span> ${movie.budget}
          </li>
          <li>
            <span className="text-secondary">Revenue:</span> ${movie.revenue}
          </li>
          <li>
            <span className="text-secondary">Runtime:</span> {movie.runtime}{" "}
            minutes
          </li>
          <li>
            <span className="text-secondary">Status:</span> {movie.status}
          </li>
        </ul>
        <div className="companies-countries">
          <div className="companies">
            <h4 className="text-muted">Production Companies :</h4>
            <div className="list-group">
              {movie.production_companies?.map((production_companie) => (
                <p key={production_companie.id}>{production_companie.name}</p>
              ))}
            </div>
          </div>
          <span>
            <li></li>
          </span>
          <div className="countries">
            <h4 className="text-muted">Production Countries :</h4>
            <div className="list-group">
              {movie.production_countries?.map((production_countrie) => (
                <p key={production_countrie.id}>{production_countrie.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieCard;

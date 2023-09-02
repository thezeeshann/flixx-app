import { Link } from "react-router-dom";
import movieImage from "../images/image.jpg";
import "./SingleShowCard.css";

const SingleShowCard = ({ show }) => {
  return (
    <>
      {/* <!-- Show Details Output --> */}
      <div key={show.id} id="show-details">
        <div className="details-top">
          <div>
            <img
              src={
                show.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${show.backdrop_path}`
                  : movieImage
              }
              className="card-img-top"
              alt="Show Name"
            />
          </div>
          <div>
            <h2>{show.name}</h2>
            <p>
              <i className="fas fa-star text-primary"></i>
              <h5 className="text-muted">Average Vote:</h5> {Math.floor(show.vote_average)} / 10
            </p>
            <p className="text-muted">Release Date: {show.first_air_date}</p>
            <p>{show.overview}</p>
            <div className="show-heading">
              <h5 className="text-muted">TagLine :</h5>
              <ul>
                <li>{show.tagline}</li>
              </ul>
              <h5 className="text-muted">Language :</h5>
              <ul>
                <li>{show.original_language}</li>
              </ul>
            </div>
            <h5 className="text-muted">Genres</h5>
            {show.genres?.map((genre) => (
              <>
                <ul key={genre.id} className="list-group">
                  <li>{genre.name || "Genre 1"}</li>
                </ul>
              </>
            ))}

            <Link to={show.homepage} target="_blank" className="btn">
              Visit Show Homepage
            </Link>
          </div>
        </div>
        <div className="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li>
              <span className="text-secondary">Number Of Episodes:</span>{" "}
              {show.number_of_episodes}
            </li>
            <li>
              <span className="text-secondary">Number Of Seasons:</span>{" "}
              {show.number_of_seasons}
            </li>
            <li>
              <span className="text-secondary">Last Episode To Air:</span>
              {Array.isArray(show.last_episode_to_air) ? (
                show.last_episode_to_air?.map((last_episode) => (
                  <div key={last_episode.id}>{last_episode.name}</div>
                ))
              ) : (
                <div>No last episodes available</div>
              )}
            </li>
            <li>
              <span className="text-secondary">Status:</span> {show.status}
            </li>
          </ul>
          <h4 className="text-muted">Production Companies</h4>
          {show.production_companies?.map((companie) => (
            <div key={companie.id} className="list-group">
              {companie.name}
            </div>
          ))}
          <h4 className="text-muted">Production Countries</h4>
          {show.production_countries?.map((countrie) => (
            <div key={countrie.id} className="list-group">
              {countrie.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleShowCard;

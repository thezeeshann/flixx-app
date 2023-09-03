import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import movieImage from "../../images/image.jpg";
import Spinner from "../common/Spinner";

const TopRatedShow = () => {
  const { isLoading, topRatedTvShow } = useContext(AppContext);

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
        topRatedTvShow.map((show) => (
          <div key={show.id} className="card">
            <Link to={`/shows-details/${show.id}`}>
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
                    : movieImage
                }
                className="card-img-top"
                alt={show.original_name}
              />
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
  );
};

export default TopRatedShow;

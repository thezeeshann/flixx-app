import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import Spinner from "./Spinner";
import SingleMovieCard from "./SingleMovieCard";
import AppContext from "../context/movieContext";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading, API_URL, API_KEY } =
    useContext(AppContext);
  const [singleMovie, setSingleMovie] = useState({});
  const isLoadingSpinner = isLoading === true;

  useEffect(() => {
    async function fetchSingleMovieData() {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API_URL[0]}${movieId}?api_key=${API_KEY}`);
        setSingleMovie(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSingleMovieData();
  }, [movieId]);

  return (
    <section className="container">
      {isLoadingSpinner ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="back">
            <Link to="/" className="btn">
              Back To Movies
            </Link>
          </div>
          <SingleMovieCard movie={singleMovie} />
        </>
      )}
    </section>
  );
};

export default MovieDetails;

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/";
  const KEY_WORDS = "popular";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const fetchMovieData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}${KEY_WORDS}?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
      // console.log(response.data.results)
    } catch (error) {
      console.log("Something wrong while fetching the data", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const data = {
    isLoading,
    setIsLoading,
    fetchMovieData,
    movies,
    setMovies,
    API_URL,
    API_KEY,
    KEY_WORDS,
  };

  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export default MovieContext;

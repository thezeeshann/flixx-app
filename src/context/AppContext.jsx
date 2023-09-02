import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const API_URL = [
    "https://api.themoviedb.org/3/movie/",
    "https://api.themoviedb.org/3/tv/",
  ];
  const KEY_WORDS = ["popular", "top_rated", "upcoming"];
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  // const [topRated,setTopRated] = useState([])
  // const [upcoming,setUpcoming] = useState([])
  const [movieCategory, setMovieCategory] = useState({
    topRated: 0,
    upcoming: 0,
  });

  // const topRatedMovie = movieCategory.topRated;
  // const upComingMovie = movieCategory.upcoming;
  // console.log("TOP",movieCategory.topRated)

  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovieData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL[0]}${KEY_WORDS[0]}?api_key=${API_KEY}`
      );
      setMovies(response.data.results);
      // console.log(response.data.results)
    } catch (error) {
      console.log("Something wrong while fetching the data", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTvShowData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_URL[1]}${KEY_WORDS[0]}?api_key=${API_KEY}`
      );
      setTvShow(response.data.results);
      // console.log(response.data.results)
    } catch (error) {
      console.log("Something wrong while fetching the data", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoviesCategory = async (keyword) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL[0]}${keyword}?api_key=${API_KEY}`);
      const categoryData = res.data.results;
      if (keyword === "top_rated") {
        setMovieCategory((prev) => ({
          ...prev,
          topRated: categoryData,
        }));
      }
      if (keyword === "upcoming") {
        setMovieCategory((prev) => ({
          ...prev,
          upcoming: categoryData,
        }));
      }
    } catch (error) {
      console.log("Something wrong while fetching the category data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
    fetchTvShowData();
    fetchMoviesCategory(KEY_WORDS[1]);
    fetchMoviesCategory(KEY_WORDS[2]);
  }, []);

  const searchDataMovie =
    searchQuery.length > 0
      ? movies.filter((movie) =>
          `${movie.original_title} ${movie.title}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : movies;

  const searchDataShow =
    searchQuery.length > 0
      ? tvShow.filter((show) =>
          `${show.name} ${show.original_name}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : tvShow;

  const data = {
    API_URL,
    API_KEY,
    KEY_WORDS,
    isLoading,
    setIsLoading,
    fetchMovieData,
    movies: searchDataMovie,
    setMovies,
    tvShow: searchDataShow,
    setTvShow,
    topRatedMovie: movieCategory.topRated,
    upComingMovie: movieCategory.upcoming,
    fetchTvShowData,
    searchQuery,
    setSearchQuery,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;

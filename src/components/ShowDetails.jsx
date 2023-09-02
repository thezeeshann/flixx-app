import "./ShowDetails.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import Spinner from "./common/Spinner";
import SingleShowCard from "./SingleShowCard";

// https://api.themoviedb.org/3/tv/popular?api_key=5e4d5b125fbebc28eadf025316db0eff

const ShowDetails = () => {
  const { showId } = useParams();
  const { isLoading, setIsLoading, API_URL, API_KEY } = useContext(AppContext);
  const [singleShow, setSingleShow] = useState({});
  const isLoadingSpinner = isLoading === true;

  useEffect(() => {
    const fetchSingleShowData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL[1]}${showId}?api_key=${API_KEY}`);
        console.log("single show data", response.data);
        setSingleShow(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSingleShowData();
  }, [showId]);

  return (
    // <!-- Show Details -->
    <section className="container">
      {isLoadingSpinner ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div className="back">
          <Link to="/shows" className="btn">
            Back To TV Shows
          </Link>
          {/* <a className="btn" href="shows.html">Back To TV Shows</a> */}
          <SingleShowCard show={singleShow} />
        </div>
      )}
    </section>
  );
};

export default ShowDetails;

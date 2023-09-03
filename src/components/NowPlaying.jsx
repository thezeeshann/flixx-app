import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import MovieImage from "../images/image.jpg";
import AppContext from "../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "./NowPlaying.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const NowPlaying = () => {
  const { nowPlayingMovie } = useContext(AppContext);

  return (
    <section className="now-playing">
      <h2>Now Playing</h2>
      <div className="swiper">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {nowPlayingMovie.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Link to={`/movie-details/${movie.id}`}>
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : MovieImage
                        }
                        alt={movie.original_title}
                      />
                    </Link>
                    <h4 className="swiper-rating">
                      <span>
                        <FaStar />
                      </span>{" "}
                      {Math.floor(movie.vote_average)} / 10
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default NowPlaying;

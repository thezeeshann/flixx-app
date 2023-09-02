import "./NowPlaying.css"
import image from "../images/image.jpg"
import { FaStar } from "react-icons/fa";

const NowPlaying = () => {
  return (
    <section className="now-playing">
        <h2>Now Playing</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
            <a href="movie-details.html?id=1">
              <img src={image} alt="Movie Title" />
            </a>
            <h4 className="swiper-rating">
              <span><FaStar/></span>  8 / 10
            </h4>
          </div>
          </div>
        </div>
      </section>
  )
}

export default NowPlaying
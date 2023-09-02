import { useState } from "react"
import PopularShow from "./shows/PopularShow"
import TopRatedShow from "./shows/TopRatedShow"
import OnAirShow from "./shows/OnAirShow"

const Shows = () => {

  const [selectedCategory, setSelectedCategory] = useState({
    popular: true,
    top_rated: false,
    on_the_air: false,
  });

  function handleCategory(category) {
    setSelectedCategory((prev) => ({
      ...prev,
      popular: category === "popular" ? true : false,
      top_rated: category === "top_rated" ? true : false,
      on_the_air: category === "on_the_air" ? true : false,
    }));
  }

  return (
    <main>
    {/* shows */}
    
    <section className="container">
      <h2>Popular TV Shows</h2>
      <div className="movies-sections">
          <h3
            onClick={() => handleCategory("popular")}
            className={`${
              selectedCategory.popular ? "active-movies-category" : ""
            }`}
          >
            POPULAR 🌟
          </h3>
          <h3
            onClick={() => handleCategory("top_rated")}
            className={`${
              selectedCategory.top_rated ? "active-movies-category" : ""
            }`}
          >
            Top Rated 👌
          </h3>
          <h3
            onClick={() => handleCategory("on_the_air")}
            className={`${
              selectedCategory.on_the_air ? "active-movies-category" : ""
            }`}
          >
            On The Air 🌨️
          </h3>
        </div>
        {
          selectedCategory.top_rated ? <TopRatedShow/> : selectedCategory.on_the_air ? <OnAirShow/> : <PopularShow/>
        }

        <PopularShow/>
    </section>
  </main>
  )
}

export default Shows
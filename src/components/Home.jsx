import Movie from "./Movie";
import Search from "./Search";
import NowPlaying from "./NowPlaying";
import "./Home.css";

const Home = () => {
  return (
    <main>
      {/* <!-- Now Playing Section --> */}
      <NowPlaying />
      {/* <!-- Search Movies --> */}
      <Search />
      {/* movies */}
      <Movie />
    </main>
  );
};

export default Home;

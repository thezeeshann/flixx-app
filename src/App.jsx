import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Shows from "./components/Shows"
import ShowDetails from "./components/ShowDetails"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie-details/:movieId" element={<MovieDetails/>} />
      <Route path="/shows" element={<Shows/>} />
      <Route path="/shows-details/:showId" element={<ShowDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

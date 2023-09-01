import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shows from "./components/Shows"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie-details/:movieId" element={<MovieDetails/>} />
      <Route path="/shows" element={<Shows/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

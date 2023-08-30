import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie-details/:movieId" element={<MovieDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

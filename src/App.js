import { Container } from "@mui/system";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/header/MainNav";
import Trending from "./pages/trending/Trending";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/series/TvSeries";
import Search from "./pages/search/Search";

function App() {
  return (
    <>
      <Header />
      <>     
        <div className="container">
          MoviesFlix
          <Container>
          <Routes>
              <Route path="/" exact element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvseries" element={<TvSeries />} />
              <Route path="/search" element={<Search />} />
            </Routes>
           
          </Container>
        </div>
      <SimpleBottomNavigation />
      </>
    </>
  );
}

export default App;

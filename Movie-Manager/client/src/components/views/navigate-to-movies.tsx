
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import FavoriteMovies from '../favorites';
import MoviesComing from '../movies-coming';
import MoviesInTheatres from '../movies-in-theaters';
import TopRatedIndia from '../top-rated-india';
import TopRatedMovies from '../top-rated-movies';
import MovieDescription from './movie-description-view';


function MoviesView() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesInTheatres/>} />
        <Route path="/movies-in-theaters" element={<MoviesInTheatres/>} />
        <Route path="/movies-coming" element={<MoviesComing/>} />
        <Route path="/top-rated-india" element={<TopRatedIndia/>}/>
        <Route path="/top-rated-movies" element={<TopRatedMovies/>}/>
        <Route path="/favorites" element={<FavoriteMovies/>}/>
        <Route path="/movie-description" element={<MovieDescription/>}/>
      </Routes>
    </Router>
  );

}

export default MoviesView;
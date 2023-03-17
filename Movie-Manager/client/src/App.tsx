import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesView from './components/views/navigate-to-movies';
import MenuItems from './components/views/menu-items';
import IMovie from './models/movie';

function App() {
  return (
    <div className="App">
     <MoviesView/>
    </div>
  );
}

export default App;

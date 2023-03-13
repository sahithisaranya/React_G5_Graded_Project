import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesView from './components/navigate-to-movies';
import MenuItems from './components/menu-items';
import IMovie from './models/movie';

function App() {
  return (
    <div className="App">
     <MenuItems movies={null}/>
     <MoviesView/>
     
    </div>
  );
}

export default App;

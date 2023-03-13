import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesInTheatres } from '../services/movie-service';
import FilterMovies from "./filter-movies";
import MenuItems from "./menu-items";
import DisplayMovies from "./movie-cards-view";

function MoviesInTheatres() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesInTheatres = async () => {
            try {
                const response = await getAllMoviesInTheatres();
                console.log("All movies in theatres response = "+response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesInTheatres();
    }, []);

   
    return(
        <div>
            <MenuItems movies={movies}/>
            <DisplayMovies movies={movies} />
        
        </div>
    ) ;
}

export default MoviesInTheatres;
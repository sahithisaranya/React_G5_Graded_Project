import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesTopRatedIndia } from '../services/movie-service';
import DisplayMovies from "./movie-cards-view";

function TopRatedIndia() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesTopRatedIndia = async () => {
            try {
                const response = await getAllMoviesTopRatedIndia();
                console.log("Movies top rated India response = "+response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesTopRatedIndia();
    }, []);

   
    return <DisplayMovies movies={movies} />;
}

export default TopRatedIndia;
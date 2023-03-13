import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesTopRated } from '../services/movie-service';
import DisplayMovies from "./movie-cards-view";

function TopRatedMovies() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesTopRated = async () => {
            try {
                const response = await getAllMoviesTopRated();
                console.log("Movies top rated response = "+response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesTopRated();
    }, []);

   
    return <DisplayMovies movies={movies} />;
}

export default TopRatedMovies;
import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesComingUp } from '../services/movie-service';
import DisplayMovies from "./movie-cards-view";

function MoviesComing() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesComingUp = async () => {
            try {
                const response = await getAllMoviesComingUp();
                console.log("All movies coming up response = " + response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesComingUp();
    }, []);


    return <DisplayMovies movies={movies} />;
}

export default MoviesComing;
import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesComingUp } from '../services/movie-service';
import DisplayMovies from "./views/movie-cards-view";
import MenuItems from "./views/menu-items";


function MoviesComing() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [filteredMovies,setFilteredMovies]=useState<IMovie[]>([]);

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

    const refreshParentAfterFilter=(newlyCreatedMoviesList:IMovie[])=>{
        setFilteredMovies(newlyCreatedMoviesList);
    }


    return(
        <div>
            <MenuItems movies={movies} refreshParent={refreshParentAfterFilter}></MenuItems>
            {
                (filteredMovies.length<=0)?(
                    <DisplayMovies movies={movies} />
                ):(
                    <DisplayMovies movies={filteredMovies} />
                )
            }
        </div>
    ) ;
}

export default MoviesComing;
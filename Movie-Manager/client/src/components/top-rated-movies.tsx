import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesTopRated } from '../services/movie-service';
import DisplayMovies from "./movie-cards-view";
import MenuItems from "./menu-items";

function TopRatedMovies() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [filteredMovies,setFilteredMovies]=useState<IMovie[]>([]);

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

export default TopRatedMovies;
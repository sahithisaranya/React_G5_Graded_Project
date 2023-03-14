import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesTopRatedIndia } from '../services/movie-service';
import DisplayMovies from "./movie-cards-view";
import MenuItems from "./menu-items";

function TopRatedIndia() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [filteredMovies,setFilteredMovies]=useState<IMovie[]>([]);

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

export default TopRatedIndia;
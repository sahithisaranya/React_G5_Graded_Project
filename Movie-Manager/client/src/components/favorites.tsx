import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesFavorite } from '../services/movie-service';
import DisplayFavoriteMovies from "./views/favorite-movies-view";
import MenuItems from "./views/menu-items";


const FavoriteMovies=()=>{
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [filteredMovies,setFilteredMovies]=useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesFavorite= async () => {
            try {
                const response = await getAllMoviesFavorite();
                console.log("All movies in favorite list = "+response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesFavorite();
    }, []);

    const refreshParentAfterFilter=(newlyCreatedMoviesList:IMovie[])=>{
        setFilteredMovies(newlyCreatedMoviesList);
    }

      
    return(
        <div>
            <MenuItems movies={movies} refreshParent={refreshParentAfterFilter}></MenuItems>
            {
                (filteredMovies.length<=0)?(
                    <DisplayFavoriteMovies movies={movies} />
                ):(
                    <DisplayFavoriteMovies movies={filteredMovies} />
                )
            }
        </div>
    ) ;
}

export default FavoriteMovies;
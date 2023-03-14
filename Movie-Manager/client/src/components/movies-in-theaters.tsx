import { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesInTheatres } from '../services/movie-service';
import MenuItems from "./menu-items";
import DisplayMovies from "./movie-cards-view";


function MoviesInTheatres() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [filteredMovies,setFilteredMovies]=useState<IMovie[]>([]);

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

export default MoviesInTheatres;
























































// import { useEffect, useState } from "react";
// import IMovie from '../models/movie';
// import { getAllMoviesInTheatres } from '../services/movie-service';
// import MenuItems from "./menu-items";
// import DisplayMovies from "./movie-cards-view";


// function MoviesInTheatres() {

//     const [movies, setMovies] = useState<IMovie[]>([]);

//     useEffect(() => {
//         const invokeGetAllMoviesInTheatres = async () => {
//             try {
//                 const response = await getAllMoviesInTheatres();
//                 console.log("All movies in theatres response = "+response);
//                 setMovies(response);
//             }
//             catch (error) {
//                 console.log(error);
//             }
//         }
//         invokeGetAllMoviesInTheatres();
//     }, []);

//     const [filteredItems, setFilteredItems] = useState<IMovie[]>([]);

//     const handleFilter = (filter: string) => {
//         const filtered = movies.filter((item) =>
//           item.title.toLowerCase().includes(filter.toLowerCase())
//         );
//         setFilteredItems(filtered);
//       };

      
//     return(
//         <div>
//             <MenuItems movies={movies}/>
//             <DisplayMovies movies={movies} />
//         </div>
//     ) ;
// }

// export default MoviesInTheatres;
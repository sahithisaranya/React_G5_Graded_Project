import IMovie from "../models/movie";
import React, { useState } from "react";

type FilterMovieModel = {
    movies: IMovie[];
    query: String;
    refreshMenuItems: (newlyCreatedMovieList: IMovie[]) => void;
}

const FilterMovies = ({ movies, query, refreshMenuItems }: FilterMovieModel) => {

    const handleFilterMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const searchTerm = query.toLowerCase();
        console.log("movies list in filtermovie = " + movies);
        console.log(searchTerm);

        const filtered = movies?.filter((item) =>
            item.title.toLowerCase().includes(searchTerm)
        );
        console.log("Filtered movies = " + filtered);

        refreshMenuItems(filtered);
    }
}

export default FilterMovies;

























// import IMovie from "../models/movie";
// import React,{ useState } from "react";
// import DisplayMovies from "./movie-cards-view";

// interface Props{
//     movies?:IMovie[]|null;
//     query:string;
// }

// const FilterMovies:React.FC<Props>=({movies,query})=> {

//     //const [filteredMovies, setFilteredCardItems] = useState<IMovie[]>(movies?);

//    // const doFilter=()=>{
//     const searchTerm = query.toLowerCase();
//     console.log("movies list in filtermovie = "+movies);
//     console.log(searchTerm);

//         const filtered = movies?.filter((item) =>
//           item.title.toLowerCase().includes(searchTerm)
//         );
//         console.log("Filtered movies = "+filtered);

//     //return <DisplayMovies movies={filtered} />;
//     return(<div></div>);
// }

// export default FilterMovies;


import axios from "axios";
import IMovie from "../models/movie";

const GET_MOVIES_COMING_URL="http://localhost:4000/movies-coming";
const GET_MOVIES_IN_THEATRES_URL= "http://localhost:4000/movies-in-theaters";
const GET_MOVIES_TOP_RATED_INDIA_URL="http://localhost:4000/top-rated-india";
const GET_MOVIES_TOP_RATED_URL="http://localhost:4000/top-rated-movies";
const GET_MOVIES_FAVORITE_URL="http://localhost:4000/favourite";
const POST_MOVIES_FAVORITE_URL="http://localhost:4000/favourite";
const POST_DELETE_FAVORITE_URL="http://localhost:4000/favourite";


const getAllMoviesComingUp=async()=>{
    const response=await axios.get<IMovie[]>(GET_MOVIES_COMING_URL);
    return response.data;
}

const getAllMoviesInTheatres=async()=>{
    const response=await axios.get<IMovie[]>(GET_MOVIES_IN_THEATRES_URL);
    return response.data;
}

const getAllMoviesTopRatedIndia=async()=>{
    const response=await axios.get<IMovie[]>(GET_MOVIES_TOP_RATED_INDIA_URL);
    return response.data;
}

const getAllMoviesTopRated=async()=>{
    const response=await axios.get<IMovie[]>(GET_MOVIES_TOP_RATED_URL);
    return response.data;
}

const getAllMoviesFavorite=async()=>{
    const response=await axios.get<IMovie[]>(GET_MOVIES_FAVORITE_URL);
    return response.data;
}

const postFavoriteMovie=async(newFavMovie:IMovie)=>{
    const response=await axios.post<IMovie>(POST_MOVIES_FAVORITE_URL,newFavMovie,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response.data;
}

const postDeleteFromFavorites=async(delMovie:IMovie)=>{
    const response=await axios.delete<IMovie>(POST_MOVIES_FAVORITE_URL+`/${delMovie.id}`);
    return response.data;
}

export {getAllMoviesComingUp};
export {getAllMoviesInTheatres};
export {getAllMoviesTopRatedIndia};
export {getAllMoviesTopRated};
export {getAllMoviesFavorite};

export{postFavoriteMovie};
export{postDeleteFromFavorites};
import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IMovie from "../models/movie";
import { searchStyle } from "../styles/poster-styles";


type FilterMovieModel = {
    movies: IMovie[];
    refreshParent: (newlyCreatedMovieList: IMovie[]) => void;
}

const MenuItems=({ movies, refreshParent }: FilterMovieModel)=> {
    
    const handleFilteredMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let filtered:IMovie[];
        const query=event.target.value;
        const searchTerm = query.toLowerCase();
        console.log("movies list in filtermovie = " + movies);
        console.log(searchTerm);

        filtered = movies?.filter((item) =>
            item.title.toLowerCase().includes(searchTerm)
        );
        console.log("Filtered movies = " + filtered);
        console.log("movies after filter = "+movies);
        
        refreshParent(filtered);
    }

   

    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/"></Nav.Link>
                    <Nav.Link href="/movies-in-theaters">Movies in theaters</Nav.Link>
                    <Nav.Link href="/movies-coming">Coming soon</Nav.Link>
                    <Nav.Link href="/top-rated-india">Top rated Indian</Nav.Link>
                    <Nav.Link href="/top-rated-movies">Top rated movies</Nav.Link>
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                </Nav>
                {
                    <input type="search" placeholder="Search here" style={searchStyle} onChange={handleFilteredMovies} />
                }
                
           </Navbar.Collapse>
        </Navbar>
        
        
        </>
        

    );
}

export default MenuItems;



































// import React, { useState } from "react";
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import FilterMovies from "./filter-movies";
// import IMovie from "../models/movie";
// import DisplayMovies from "./movie-cards-view";


// interface Props{
//     movies?:IMovie[];
// }

// const MenuItems=({movies}:Props)=> {
//     const[value,setValue]=useState('');

//     const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
      
//         setValue(event.target.value);
//     }

//     return (
//         <>
//         <Navbar bg="dark" variant="dark" fixed="top">
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav.Link href="/"></Nav.Link>
//                     <Nav.Link href="/movies-in-theaters">Movies in theaters</Nav.Link>
//                     <Nav.Link href="/movies-coming">Coming soon</Nav.Link>
//                     <Nav.Link href="/top-rated-india">Top rated Indian</Nav.Link>
//                     <Nav.Link href="/top-rated-movies">Top rated movies</Nav.Link>
//                     <Nav.Link href="/favorites">Favorites</Nav.Link>
//                 </Nav>


//                 {/* <Form style={{ display: "flex", justifyContent: "right" }}> */}

//                     {/* <FormControl type="search" placeholder="Search movie" className="ml-2 mr-sm-2" /> */}
//                     {/* <Button>
//                         <FontAwesomeIcon icon={faSearch} />
//                     </Button> */}
//                     <input type="search" placeholder="Search here" onChange={handleChange}/>
//                     {value && <FilterMovies movies={movies} query={value}/>}

//                 {/* </Form> */}
                
                
//             </Navbar.Collapse>
//         </Navbar>
        
        
//         </>
        

//     );
// }

// export default MenuItems;
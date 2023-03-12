import { Container } from "react-bootstrap";
import MenuItems from "./menu-items";
import MovieCard from "./movie-cards";

function DisplayMoviesOnScreen() {
    return (
        <Container>
            <MenuItems/>
            <MovieCard/>
        </Container>
    );
}

export default DisplayMoviesOnScreen;
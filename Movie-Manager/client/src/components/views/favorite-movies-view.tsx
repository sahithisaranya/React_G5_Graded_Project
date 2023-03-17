import IMovie from "../../models/movie";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cardTopStyle, posterStyle } from '../../styles/poster-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { postDeleteFromFavorites } from "../../services/movie-service";
import { useState } from "react";


interface Props {
    movies?: IMovie[];
}


function DisplayFavoriteMovies({ movies }: Props) {

    const handleAddFavorite = async (favMovie: IMovie, index: number) => {
        try{
            const newlyAddedFavMovie = await postDeleteFromFavorites(favMovie);
            console.log("Newly added favorite movie: " + newlyAddedFavMovie);
            window.location.reload();
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <>
            {
                <div className="row no-gutters">
                    <Row xs={2} md={6} gutter={6} className="g-4">
                        {
                            movies?.map((movie, index) => (
                                <Col>
                                    <Card key={movie.id} style={cardTopStyle}>
                                        <Card.Img variant='top' src={process.env.PUBLIC_URL + '/Images/' + movie.poster} alt={movie.title} style={posterStyle} />
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '15px' }}>{movie.title}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer className="text-center">
                                            <Button variant="outline-secondary" onClick={() => handleAddFavorite(movie, index)}>Remove from Favourites!
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>

                            ))
                        }

                    </Row>
                </div>

            }
        </>
    );
}

export default DisplayFavoriteMovies;


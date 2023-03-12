import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import IMovie from '../models/movie';
import { getAllMoviesComingUp } from '../services/movie-service';

function MovieCard() {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const invokeGetAllMoviesComingUp = async () => {
            try {
                const response = await getAllMoviesComingUp();
                console.log(response);
                setMovies(response);
            }
            catch (error) {
                console.log(error);
            }
        }
        invokeGetAllMoviesComingUp();
    }, []);

    const cardTopStyle = {
        width: "15rem",
        height: "18rem",
        top: '30px',
    };

    const posterStype={
        width:'15rem'
    }
    
    return (
        <>
            {
                <div className="row no-gutters">
                    <Row xs={2} md={5} gutter={6} className="g-4">
                        {
                            movies.map((movie) => (
                                <Col>
                                    <Card key={movie.id} style={cardTopStyle}>
                                        <Card.Img variant='top' src={process.env.PUBLIC_URL + '/Images/'+ movie.poster} />
                                        <Card.Body>
                                            <Card.Title>{movie.title}</Card.Title>
                                            <Button href={movie.posterurl}>Add to favorites</Button>
                                        </Card.Body>
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

export default MovieCard;
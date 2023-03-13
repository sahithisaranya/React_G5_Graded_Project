import IMovie from "../models/movie";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cardTopStyle,posterStyle } from '../styles/poster-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

interface Props{
    movies?:IMovie[];
}

function DisplayMovies({movies}:Props){
    return (
        <>
            {
                <div className="row no-gutters">
                    <Row xs={2} md={6} gutter={6} className="g-4">
                        {
                            movies?.map((movie) => (
                                <Col>
                                    <Card key={movie.id} style={cardTopStyle}>
                                        <Card.Img variant='top' src={process.env.PUBLIC_URL + '/Images/'+ movie.poster} style={posterStyle} />
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '15px' }}>{movie.title}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer className="text-center">
                                        <Button variant="outline-secondary" href={movie.posterurl}>Add to favorites  
                                        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
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

export default DisplayMovies;
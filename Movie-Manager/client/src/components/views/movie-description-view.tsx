import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MovieDescription = () => {
    const location = useLocation();
    const currentMovie = location.state.currentMovie;

    return (
        <>
            <Link to="/">Back to Home</Link>
            <Card border={'0'} style={{ top: '50px', left: '50px', height: '400px', width:'95%'}}>
                <Row >
                    <Col md={2}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/Images/' + currentMovie.poster} alt={currentMovie.title} style={{ height: '400px', width: '300px' }} />
                    </Col>
                    <Col md={10}>
                        <Card.Body>
                            <Card.Title style={{ fontWeight: 'bold', fontSize: '30px' }}>{currentMovie.title}({currentMovie.year})</Card.Title>
                            <Card.Text>
                                <table>
                                    <tr>
                                        <td style={{fontWeight: 'bold', width: '15rem'}}>Imdb Rating</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.imdbRating}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Content Rating</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.contentRating}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Average Rating</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.averageRating}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Duration</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.duration}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Genres</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.genres}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Actors</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.actors}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Release Date</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.releaseDate}</td>
                                    </tr>
                                    <tr>
                                    <td style={{fontWeight: 'bold'}}>Story line</td>
                                        <td>  :  </td>
                                        <td>{currentMovie.storyline}</td>
                                    </tr>
                                </table>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default MovieDescription;

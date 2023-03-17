import IMovie from "../../models/movie"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { movieDescPosterStyle } from "../../styles/poster-styles";
interface Props {
    movie?: IMovie | null;
}

const MovieDescription = ({ movie }: Props) => {
    return (
        <>
            <Link to="/">Back to Home</Link>
            {
                <div className="row no-gutters">
                    <Row xs={2} md={2} gutter={6} className="g-4">
                        <Col>
                            <Card key={movie?.id}>
                                <Card.Img variant='top' src={process.env.PUBLIC_URL + '/Images/' + movie?.poster} alt={movie?.title} style={movieDescPosterStyle} />

                            </Card>
                        </Col>

                        <Col>
                            <div>
                                Desc column
                            </div>
                        </Col>


                    </Row>
                </div>

            }
        </>
    );
}

export default MovieDescription;

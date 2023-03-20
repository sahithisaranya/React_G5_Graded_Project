import IMovie from "../../models/movie";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cardTopStyle, posterStyle } from '../../styles/poster-styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { postDeleteFromFavorites } from "../../services/movie-service";
import {useNavigate} from "react-router-dom";


interface Props {
    movies?: IMovie[];
}


function DisplayFavoriteMovies({ movies }: Props) {

    const navigate=useNavigate();

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


    const handleCardClick=(movie:IMovie)=>{
        console.log("movie desc component called");
        {
            navigate("/movie-description",{state:{currentMovie:movie}});
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
                                        <Card.Img variant='top' src={process.env.PUBLIC_URL + '/Images/' + movie.poster} alt={movie.title} style={posterStyle} onClick={()=>handleCardClick(movie)}/>
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


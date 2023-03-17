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
import { getAllMoviesFavorite, postFavoriteMovie } from "../../services/movie-service";
import { useState } from "react";
import MovieDescription from "./movie-description-view";
import {useNavigate} from "react-router-dom";


interface Props {
    movies?: IMovie[];
}


function DisplayMovies({ movies }: Props) {

    const navigate=useNavigate();
    const [buttonText, setButtonText] = useState<string[]>(
        new Array(movies?.length).fill("Add to Favourites!")
    );
    const [buttonDisabled, setButtonDisabled] = useState<boolean[]>(
        new Array(movies?.length).fill(false)
    );
    const handleAddFavorite = async (favMovie: IMovie, index: number) => {
        try{
            const alreadyAddedFavoriteMovies=await getAllMoviesFavorite();
            let foundInFavorites:boolean=false;
            
            //search if favMovie is already there in list of favorites
            const checkInFavorites=alreadyAddedFavoriteMovies.filter((movie)=>movie.id===favMovie.id);

            //if movie is already in fav list then display text 
            //on button that already added to favorites
            console.log("Current fav movies list = "+alreadyAddedFavoriteMovies);
            console.log("CheckinFavorites list = "+checkInFavorites);
            if(checkInFavorites.length>0){
                const newCardBtnText = [...buttonText];
                newCardBtnText[index] = "Already in Favourites!";
                setButtonText(newCardBtnText);
            }
            else{
                const newlyAddedFavMovie = await postFavoriteMovie(favMovie);
                console.log("Newly added favorite movie: " + newlyAddedFavMovie);
                const newCardBtnText = [...buttonText];
                newCardBtnText[index] = "Added to Favourites";
                setButtonText(newCardBtnText);
            }

            const newCardBtnDisabled = [...buttonDisabled];
            newCardBtnDisabled[index] = true;
            setButtonDisabled(newCardBtnDisabled);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleCardClick=(movie:IMovie)=>{
        console.log("movie desc component called");
        {
            navigate("/movie-description");
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
                                            <Button variant="outline-secondary" onClick={() => handleAddFavorite(movie, index)} disabled={buttonDisabled[index]} >
                                            
                                                {buttonDisabled[index]?buttonText[index]:"Add to Favourites!"}
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
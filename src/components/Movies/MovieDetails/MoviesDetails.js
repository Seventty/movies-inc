import React, { useEffect, useState } from 'react';
import config from '../../../config';
import ReactStars from 'react-rating-stars-component'
import "./MoviesDetails.css"
import { useHistory } from 'react-router-dom';


const MovieDetails = ({ match }) => {



    const [movie, setMovie] = useState('');
    const [idx, setIdx] = useState(Number(match.params.id));
    const [genres, setGenres] = useState([]);

    const history = useHistory();

    const getBacktoMovies = () => {
        history.push('/Home')
    }

    useEffect(() => {

        const fetchMovie = async () => {
            const api_key = config[process.env.NODE_ENV].api_key;
            const response = await fetch("https://api.themoviedb.org/3/movie/" + idx.toString() + "?api_key=" + api_key + "&language=en-US")
            const result = await response.json();


            setMovie(result);
            setGenres(result.genres)



        }
        fetchMovie();

    }, [])


    return (
        <div className="container">
            <div className="row align-items-center">

                <div className="col">
                    <div className="card mb-3" style={{ "width": "18 rem" }}>
                        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.overview}.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Release Date: </b>{movie.release_date}</li>
                            <li className="list-group-item"><b>Average Vote: </b>{movie.vote_average}</li>
                            <li className="list-group-item">

                                <ReactStars
                                    count={5}
                                    
                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />

                            </li>

                        </ul>

                        <div className="card-body">
                            <b>Genres:</b>
                            <ul>
                                {genres.map((genre) => {
                                    return (<li>{genre.name}</li>)
                                })}


                            </ul>



                        </div>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item"><button className="btn btn-danger" style={{ "color": "white" }} onClick={() => { getBacktoMovies() }}>Get back</button></li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>

    );

};

export default MovieDetails;
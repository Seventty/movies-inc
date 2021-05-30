import React from 'react';

const Movie = ({movie}) => {


    return (
        
        <div className="card h-50" style={{"width":"18 rem"}}>
            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+movie.poster_path} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Release Date: </b>{movie.release_date}</li>
                <li className="list-group-item"><b>Average Vote: </b>{movie.vote_average}</li>
                
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
        
    );

}

export default Movie;
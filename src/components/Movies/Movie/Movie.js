import React from 'react';
import { useHistory } from "react-router-dom";

const Movie = ({movie}) => {

    const history = useHistory();

    const goToDetails = () => {
        history.push(`Movies/${movie.id}`);
      };
    
    

    return (
        
        <div className="card h-100" style={{"width":"18 rem"}}>
            <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+movie.poster_path} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Release Date: </b>{movie.release_date}</li>
                <li className="list-group-item"><b>Average Vote: </b>{movie.vote_average}</li>
                <li className="list-group-item"><button className="btn btn-info" style={{"color":"white"}} onClick= {()=>{goToDetails()}} >View details</button></li>
                
            </ul>
            
        </div>
        
    );

}

export default Movie;
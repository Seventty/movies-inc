import React, { useEffect, useState } from 'react';
import MovieList from '../Movies/MovieList/MovieList';
import config  from '../../config';


const Home = ()=>{

    
    const api_key= config[process.env.NODE_ENV].api_key;
    const [username,setUserName]=useState('');
    const [sessionId,setSessionId]=useState(localStorage.getItem('session_id'))


    

    useEffect(()=>{
        
        

        const fetchUserName = async ()=>{

            
            const response = await fetch('https://api.themoviedb.org/3/account?api_key='+api_key+"&session_id="+sessionId);
    
            const result = await response.json();
            
    
             setUserName(result.username);
    
        }

        fetchUserName();

       

    },[])

    return (
    <div>
        <h1>Hello {username} !</h1>
        <MovieList></MovieList>
    </div>
        
    );

}

export default Home;
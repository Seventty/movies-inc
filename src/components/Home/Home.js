import React, { useEffect, useState } from 'react';
import MovieList from '../Movies/MovieList/MovieList';
import config  from '../../config';


const Home = ({onLoadUser})=>{

    
    const api_key= config[process.env.NODE_ENV].api_key;
    const [user,setUser]=useState('');
    const [sessionId,setSessionId]=useState(localStorage.getItem('session_id'))


    

    useEffect(()=>{
        
        

        const fetchUser = async ()=>{

            
            const response = await fetch('https://api.themoviedb.org/3/account?api_key='+api_key+"&session_id="+sessionId);
    
            const result = await response.json();
            
            onLoadUser(user);
    
             setUser(result);
    
        }

        fetchUser();

       

    },[])

    return (
    <div>
        <h1>Hello {user.username} !</h1>
        <MovieList user={user}></MovieList>
    </div>
        
    );

}

export default Home;
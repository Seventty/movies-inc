
import React,{useState, useEffect} from "react";
const Auth =()=>{

        const [requestToken,setRequestToken]= useState('');
        const API_KEY = '0c0eca362b40cdc4df74e5a1e2c95781';
      
        
        
        async function authenticate(){
      
           
          const  response = await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key="+API_KEY);
          const result = await response.json();
          
          const token = result.request_token;
      
          setRequestToken(token);
      
          window.location.href ="https://www.themoviedb.org/authenticate/"+token+"?redirect_to=http://localhost:3000/Home";
        
        
        }
       
        
        useEffect( ()=>{
      
           
          authenticate();
          
        
        },[]);
      
        return(<h1>Auth</h1>
            
            
            )

}

export default Auth;
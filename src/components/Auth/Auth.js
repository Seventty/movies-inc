
import React,{useState, useEffect} from "react";
import dotenv from 'dotenv';
import { HttpHelper } from "../../extras/HttpHelper";
dotenv.config();

const Auth = () => {
        const [requestToken,setRequestToken]= useState('');
        const API_KEY = process.env.API_KEY || "API_KEY doesnt exist, create a .env file and put it inside, you can use this key to test 0c0eca362b40cdc4df74e5a1e2c95781";
  
        const authenticate = async() => {
          const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`;

          const  response = await HttpHelper().get(url);
          const result = await response.json();
          
          const {request_token} = result;
      
          setRequestToken(request_token);
          window.location.href ="https://www.themoviedb.org/authenticate/"+request_token+"?redirect_to=http://localhost:3000/Session";
        };
        useEffect( () => {
          authenticate();
        }, []);
      
        return(null);

}

export default Auth;
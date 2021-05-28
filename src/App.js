import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [requestToken,setRequestToken]= useState('');
  const API_KEY = '0c0eca362b40cdc4df74e5a1e2c95781';

  
    async function fetchToken(){
    
    const promise = await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key="+API_KEY)
    const result = await promise.json();
    const token = result.request_token;
    setRequestToken(token);
    
  }

  
  useEffect(async ()=>{
    await fetchToken();
    console.log(requestToken)
  
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

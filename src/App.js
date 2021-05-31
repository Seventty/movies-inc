import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory} from "react-router-dom";
import Session from './components/Session/Session';
import Auth from "./components/Auth/Auth";
import Home from './components/Home/Home';
import MovieDetails from "./components/Movies/MovieDetails/MoviesDetails";


  const  App = ()=>{

    const [user,setUser]= useState([]);
    

    const onLoadUser= (user)=>{
      setUser(user);
    }

    

  return (
   <Router>
     <Switch>
       <Route path='/Session' exact component={Session}></Route>
       <Route path='/Auth' exact component={Auth}></Route>
       <Route path='/Home'  component={()=><Home onLoadUser={onLoadUser}></Home>}></Route>
       <Route path='/Movies/:id'  
              render={({match})=><MovieDetails id={match.params.id} user={user}/>}

              /> 

     </Switch>
   </Router>
  );
}

export default App;

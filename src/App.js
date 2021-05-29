import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory} from "react-router-dom";
import Session from './components/Session/Session';
import Auth from "./components/Auth/Auth";
import Home from './components/Home/Home';


  const  App = ()=>{


  return (
   <Router>
     <Switch>
       <Route path='/Session' exact component={Session}></Route>
       <Route path='/Auth' exact component={Auth}></Route>
       <Route path='/Home' exact component={Home}></Route>
     </Switch>
   </Router>
  );
}

export default App;

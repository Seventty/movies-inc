import React,{useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,useHistory} from "react-router-dom";
import Home from './components/Home/Home';
import Auth from "./components/Auth/Auth"


  const  App = ()=>{


  return (
   <Router>
     <Switch>
       <Route path='/Home' exact component={Home}></Route>
       <Route path='/Auth' exact component={Auth}></Route>
     </Switch>
   </Router>
  );
}

export default App;

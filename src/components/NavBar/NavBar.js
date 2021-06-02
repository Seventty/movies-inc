//IMPORTANT: THIS COMPONENT WORKS WELL WITH BOOTSTAP 4


import { useHistory} from "react-router-dom";
const NavBar = ({username,onSignOut}) => {

  const history = useHistory();
    
    return (
        <header className="header">
        
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        
        <a className="navbar-brand" href="/ChatBox">Movies.Inc</a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mr-auto">
        <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
           
        </ul>

        <ul className="navbar-nav">
        <li className="nav-item"><a class="nav-link" href="#">{username}</a></li>
        
        <li className="nav-item"> <button type="button" id="signout" className="btn btn-danger" onClick={()=>{
            
            history.push("/")
            onSignOut();
        
        }}>Sign out</button></li>
        </ul>


        </div>

    
       
       
      </nav>
      </div>
        </header>
       
      
    );
}


export default NavBar;
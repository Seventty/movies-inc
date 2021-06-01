//IMPORTANT: THIS COMPONENT WORKS WELL WITH BOOTSTAP 4


import { useHistory} from "react-router-dom";
const NavBar = ({username,onSignOut}) => {

  const history = useHistory();
    
    return (
        <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/ChatBox">Movies.Inc</a>
        <p className="ml-auto mr-1">{username}</p>
        <button type="button" id="signout" className="btn btn-danger ml-auto mr-1" onClick={()=>{
            
            history.push("/")
            onSignOut();
        
        }}>Sign out</button>
       
      </nav>
        </header>
       
      
    );
}


export default NavBar;
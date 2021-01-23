import { Link } from "react-router-dom";
// import Search from "./Search"; 
import Button from 'react-bootstrap/Button'

function Home(props) {


  return ( 
    <div className="home"> 
      <h1>Home</h1> 
      
      {props.searchResults && props.searchResults.map((cocktail, index) => (
        <div key={index}>{cocktail.fields.name }</div>
      ))}
    <div className="new">
      <Button variant="outline-secondary" size="lg"
        onClick={() => props.getShaken()}><Link className="button" to="/show/shaken">
          Shaken?
        </Link>
        </Button> 
    </div>   
    <div className="new"> 
      <Button variant="outline-secondary" size="lg"
        onClick={() => props.getStirred()}><Link className="button" to="/showstirred">
          Stirred?
        </Link>
      </Button>
    </div> 
    </div>
    
  )
} 

export default Home;
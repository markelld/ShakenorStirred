import { Link, Route } from "react-router-dom";
import Search from "./Search";

function Home(props) {


  return ( 
    <div> 
      <h1>Home</h1> 
      
      {props.searchResults && props.searchResults.map((cocktail, index) => (
        <div key={index}>{cocktail.fields.name }</div>
      ))}

      <button className="shakenButton"
        onClick={() => props.getShaken()}><Link to="/show/shaken">
          Shaken
        </Link>
        </button> 
      <button className="stirredButton"
        onClick={() => props.getStirred()}><Link to="/showstirred">
          Stirred
        </Link>
      </button>
    </div>
    
  )
} 

export default Home;
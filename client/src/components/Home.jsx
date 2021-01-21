 import { Link, Route } from "react-router-dom";
import Search from "./Search";

function Home(props) {


  return ( 
    <div> 
      <h1>Home</h1> 
      {props.searchResults.map((cocktail, index) => (
        <div key={index}>{cocktail.fields.name }</div>
      ))}

      <button
        onClick={() => props.getShaken()}><Link to="/show/shaken">
          Shaken
        </Link>
        </button> 
      <button
        onClick={() => props.getStirred()}>Stirred
      </button>
    </div>
    
  )
} 

export default Home;
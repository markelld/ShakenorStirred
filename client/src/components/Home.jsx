// import { Link, Route } from "react-router-dom";
import Search from "./Search";

function Home(props) {


  return ( 
    <div> 
      <h1>Home</h1> 
      <Search
        handleChange={props.handleChange} 
        search={props.search}
        />
      <button onClick={() => props.getShaken()}>Shaken</button> 
      <button>Stirred</button>
    </div>
    
  )
} 

export default Home;
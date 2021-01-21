import { Link } from "react-router-dom"; 
import Search from "./Search";

function Nav(props) {
  return (
    <nav className="navbar"> 
      <Link to="/">Shaken or Stirred?</Link> 
      <Link>New Cocktail</Link> 
      <Link>Contact</Link> 
      <Search
        handleChange={props.handleChange} 
        search={props.search}
        />
    </nav>
  )
} 
    

export default Nav;
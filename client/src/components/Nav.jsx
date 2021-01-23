import { Link } from "react-router-dom"; 
// import Search from "./Search"
function Nav(props) {
  return (
    <nav className="navbar"> 
      <Link className="hometext"  to="/">Shaken or Stirred?</Link> 
      <Link className="hometext" to="/new">New Cocktail</Link> 
      <Link className="hometext" to="/contact">Contact</Link> 
      {/* <Search classname="searchbar"
        handleChange={props.handleChange} 
        search={props.search} /> */}
    </nav>
  )
} 
    

export default Nav; 


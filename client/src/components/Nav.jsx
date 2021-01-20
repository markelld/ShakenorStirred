import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar"> 
      <Link to="/">Shaken or Stirred?</Link> 
      <Link>New Cocktail</Link> 
      <Link>Contact</Link>
    </nav>
  )
} 
    

export default Nav;
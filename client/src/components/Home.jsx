import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'



function Home(props) {


  return ( 
    <div className="home"> 
    <div className="new">
      <Button variant="light" size="lg"
        onClick={() => props.getShaken()}><Link className="button" to="/show/shaken">
          Shaken?
        </Link>
        </Button> 
    </div>   
    <div className="new"> 
      <Button variant="light" size="lg"
        onClick={() => props.getStirred()}><Link className="button" to="/showstirred">
          Stirred?
        </Link>
      </Button>  
    </div> 
    </div>
    
  )
} 

export default Home;
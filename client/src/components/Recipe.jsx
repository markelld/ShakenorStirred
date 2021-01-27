import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services/index";  
import Button from 'react-bootstrap/Button'


function Recipe(props) { 
  const history = useHistory();
  const params = useParams();
  const cocktail = props.cocktails.find(cocktail => cocktail.id === params.id)
  
  const handleDelete = async (id) => {
    const recordURL = `${baseURL}/${id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };

  
  
  return (
    <div className="recipe"> 
      { cocktail && <div> 
        <Link to="/">
          <h1 >{cocktail.fields.name}</h1> 
        </Link>
        <h2>{cocktail.fields.type}</h2> 
        <h3>{cocktail.fields.ingredients}</h3> 
        <h3>{cocktail.fields.build}</h3> 
      </div>} 
      <Button variant="danger" onClick={() => handleDelete(cocktail.id)}>Delete</Button>
   </div>

  )
} 

export default Recipe;
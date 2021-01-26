import { Link } from "react-router-dom";

function Show(props) { 
  
  const { shaken, getShaken } = props  
 
  return ( 
    <div className="shaken-list"> 
      <h1>Shaken</h1>   
      {shaken && <div>
      {shaken.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/recipe/${cocktail.id}`}><div
          >{cocktail.fields.name}</div></Link>)
      })}</div>}  
    </div>
  )
} 

export default Show; 

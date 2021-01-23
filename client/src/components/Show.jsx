//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Show(props) { 
  
  const { shaken, getShaken } = props  
 
  return ( 
    //create onclick inside H1 that calls function to function and links to recipe page 
    <div className="shakelist"> 
      <h1>Shaken List</h1>   
      {shaken && <div>
      {shaken.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/recipe/${cocktail.id}`}><div
          //onClick={() => ........()} link tags goes around cocktail.field.name
          >{cocktail.fields.name}</div></Link>)
      })}</div>}  
    </div>
  )
} 

export default Show; 

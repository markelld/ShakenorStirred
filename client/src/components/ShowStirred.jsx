import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";




function ShowStirred(props) { 

  const { stirred, getStirred } = props 
  

  console.log(stirred)
  return (
    <div> 
      <h1>Stirred</h1>
      {stirred && <div>
      {stirred.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/recipe/${cocktail.id}`}><div
          //onClick={() => ........()} link tags goes around cocktail.field.name
          >{cocktail.fields.name}</div></Link>)
      })}</div>}
      </div>
  )
} 

export default ShowStirred;
//import { Link, Route } from "react-router-dom";
//import { useEffect, useState } from "react";




function ShowStirred(props) { 

  const { stirred, getStirred } = props 
  
  // const stirredRecipe = () => {
    

  // }

  //console.log(stirred)
  console.log(stirred)
  return (
    <div> 
      <h1>Stirred</h1>
      {stirred && <div>
      {stirred.map((cocktail, index) => {
        return (<div
          //onClick={() => ........()} link tags goes around cocktail.field.name
          key={index}>{cocktail.fields.name}</div>)
      })}</div>}
      </div>
  )
} 

export default ShowStirred;
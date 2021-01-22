//import { useEffect, useState } from "react";
//import { Link, Route } from "react-router-dom";

function Show(props) { 
  
  const { shaken, getShaken } = props  
 
  return ( 
    //create onclick inside H1 that calls function to function and links to recipe page 
    <div> 
      <h1>Shaken List</h1>   
      {shaken && <div>
      {shaken.map((cocktail, index) => {
        return (<div
          //onClick={() => ........()} link tags goes around cocktail.field.name
          key={index}>{cocktail.fields.name}</div>)
      })}</div>}  
    </div>
  )
} 

export default Show; 

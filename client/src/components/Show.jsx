//import { useEffect, useState } from "react";

function Show(props) { 
  //console.log(props.shaken)  
  //console.log(props.stirred)
  const { shaken, getShaken } = props  
  const { stirred, getStirred} = props
  // useEffect(() => { 
  //  console.log("Hi") 
  //   setToggle(prev => !prev)
  // }, []);
  //console.log(shaken)
 
  return (
    <div>
      <h1>Cocktail List</h1>   
      {shaken && <div>
      {shaken.map((cocktail, index) => {
        return (<div key={index}>{cocktail.fields.name}</div>)
      })}</div>}  
      
      {stirred && <div>
      {stirred.map((cocktail, index) => {
        return (<div key={index}>{cocktail.fields.name}</div>)
      })}</div>}
      </div>
  )
} 

export default Show;
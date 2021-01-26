import { Link } from "react-router-dom";



function ShowStirred(props) { 

  const { stirred, getStirred } = props 
  

  console.log(stirred)
  return (
    <div className="stirred-list"> 
      <h1>Stirred</h1>
      {stirred && <div>
      {stirred.map((cocktail) => {
        return (<Link key={cocktail.id} to={`/recipe/${cocktail.id}`}><div
          >{cocktail.fields.name}</div></Link>)
      })}</div>}
    </div>
  )
} 

export default ShowStirred;
import { useParams, Link } from "react-router-dom";




function Recipe(props) {
  const params = useParams()
  console.log(params)
  
  // const { shaken, getShaken } = props  
  // const { stirred, getStirred } = props 
  // const { cocktails, setCocktails} = props
  
  
  
  const cocktail = props.cocktails.find(cocktail => cocktail.id === params.id)
  console.log(cocktail)
  
  
  return (
    <div className="Recipe"> 
      { cocktail && <div> 
        <Link to="/">
          <h1>{cocktail.fields.name}</h1> 
        </Link>
        <h2>{cocktail.fields.type}</h2> 
        <h2>{cocktail.fields.ingredients}</h2> 
        <h2>{cocktail.fields.build}</h2> 
      </div>}
   </div>

  )
} 

export default Recipe;
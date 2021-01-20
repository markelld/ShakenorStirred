

function Recipe(props) {
  return (
    <div>
      <form>
        <h1>New Cocktail</h1> 
        <label htmlFor="name">Name:</label> 
        <input
        // name="name"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        /> 
        <label htmlFor="type">Shaken or Stirred?:</label> 
        <input
        // name="name"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <label htmlFor="ingredients">Ingredients:</label> 
        <input
          // name="name"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <label htmlFor="build">Build:</label> 
        <input
        // name="message"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <button type="submit">new</button>
      </form>
   </div>
  )
} 

export default Recipe;
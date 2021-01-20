
function Search(props) {
  return ( 
    <input
      type="text"
      name="search"
      value={props.search} 
      onChange={(e) => props.handleChange(e)}
      />
    

  )
} 
export default Search;
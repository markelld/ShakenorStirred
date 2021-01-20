import axios from "axios";  
import { baseURL, config } from "./services/index";  
import { Link, Route, useHistory } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import './App.css';
import Home from "./components/Home";
// import Nav from "./components/Nav";  
// import Recipe from "./components/Recipe"; 
import Show from "./components/Show"; 
// import Contact from "./components/Contact";
// import Footer from "./components/Footer"

function App() {  
  const [cocktails, setCocktails] = useState([]); 
  const [shaken, setShaken] = useState([]);  
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(""); 

  const history = useHistory();
  
  useEffect(() => { 
    const getCocktails = async () => {
      const resp = await axios.get(baseURL, config); 
      setCocktails(resp.data.records); 
      //console.log(resp.data.records)
    }
    getCocktails()
  }, []);  

  const getShaken = () => { 
    // console.log(cocktails) 
    const resultsShaken =cocktails.filter(cocktail => cocktail.fields.type === "Shaken")  
    console.log(shaken)
    setShaken(resultsShaken) 
    history.push("/show")
  }  

  const handleChange = (e) => { 
    console.log(e.target.value) 
    setSearch(e.target.value)

    if (e.target.value.lenght > 3) {
      const resultsSearch = cocktails.filter(cocktail => cocktail.fields.name === e.target.value)    
      setSearchResults(setSearch)
    }
  } 
  

  return (
    <div className="App">  
      {/* <Nav />  */} 
      <Route exact path="/">
        <Home 
          getShaken={getShaken}
          handleChange={handleChange} 
          search={search} 

        />
      </Route> 
      <Route path="/show">
        <Show shaken={shaken} />
      </Route>
      {/* <h1>Shaken or Stirred?</h1>  */}
      {/* <Recipe /> 
      <Contact />
      <Footer/> */}
    </div>
  );
}

export default App;

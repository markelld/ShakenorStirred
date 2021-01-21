import axios from "axios";  
import { baseURL, config } from "./services/index";  
import { Link, Route, useHistory } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";  
// import Recipe from "./components/Recipe"; 
import Show from "./components/Show"; 
// import Contact from "./components/Contact";
// import Footer from "./components/Footer"

function App() {  
  const [cocktails, setCocktails] = useState([]); 
  const [shaken, setShaken] = useState([]);   
  const [stirred, setStirred] = useState([]);
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
    getShaken()
  }, []);  
// function for shaken home button to search cocktail data and go to showpage 
  const getShaken = () => { 
    // console.log(cocktails) 
    const resultsShaken =cocktails.filter(cocktail => cocktail.fields.type === "Shaken")  
    //console.log(shaken)
    setShaken(resultsShaken) 
    //console.log(shaken)
    const shakenCocktails = shaken
    //history.push("/show/shaken")
  }  
  
  //console.log(shaken)


  // function for stirred home button to search cocktail data and go to showpage 
  const getStirred = () => { 
    // console.log(cocktails) 
    const resultsStirred =cocktails.filter(cocktail => cocktail.fields.type === "Stirred")  
    //console.log(stirred)
    setStirred(resultsStirred) 
    history.push("/show/stirred")
  }  

  const handleChange = (e) => { 
    console.log(e.target.value) 
    setSearch(e.target.value)

    if (e.target.value.length > 3) {
      const resultsSearch = cocktails.filter(cocktail => cocktail.fields.name.toLowerCase().includes(e.target.value.toLowerCase()))  
      console.log(resultsSearch)
      setSearchResults(resultsSearch)
    }
  } 
  

  return (
    <div className="App">  
      <Nav
        handleChange={handleChange} 
          search={search} 
      />

      <Route exact path="/">
        <Home 
          getShaken={getShaken}  
          getStirred={getStirred}
          searchResults={searchResults}
          

        />
      </Route> 
      <Route path="/show/shaken">
        <Show
          shaken={shaken} 
          
          //getShaken={getShaken}
          //stirred={stirred}
          />
      </Route>
      {/* <h1>Shaken or Stirred?</h1>  */}
      {/* <Recipe /> 
      <Contact />
      <Footer/> */}
    </div>
  );
}

export default App;

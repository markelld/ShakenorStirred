import axios from "axios";  
import { baseURL, config } from "./services/index";  
import { Link, Route, useHistory } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";  
// import Recipe from "./components/Recipe"; 
import Show from "./components/Show";   
import ShowStirred from "./components/ShowStirred";

import Contact from "./components/Contact"; 
import New from "./components/New";
// import Footer from "./components/Footer"

function App() {  
  const [cocktails, setCocktails] = useState([]); 
  const [shaken, setShaken] = useState([]);   
  const [stirred, setStirred] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");  
  //const [toggle, setToggle] = useState(false);

  const history = useHistory();
  
  useEffect(() => { 
    const getCocktails = async () => {
      const resp = await axios.get(baseURL, config); 
      setCocktails(resp.data.records); 
      //console.log(resp.data.records) 
      getShaken(resp.data.records) 
      getStirred(resp.data.records)
      if (localStorage.getItem('searchString').length > 0) { 
      
        searchFilter(localStorage.getItem('searchString'),resp.data.records) 
  
      } 
    } 
    getCocktails()   
  }, []);  
// function for shaken home button to search cocktail data and go to showpage 
  const getShaken = (shakenData) => {
    let data = shakenData || cocktails
    const resultsShaken = data.filter(cocktail => cocktail.fields.type === "Shaken")
    setShaken(resultsShaken)
    const shakenCocktails = shaken
  }  
   
  const getStirred = (stirredData) => {
    let data = stirredData || cocktails 
    const resultsStirred = data.filter(cocktail => cocktail.fields.type === "Stirred") 
    setStirred(resultsStirred) 
    const stirredCocktails = stirred
  }

  const handleChange = (e) => { 
    //console.log(e.target.value) 
    setSearch(e.target.value)

    if (e.target.value.length > 2) {
      let value = e.target.value
      searchFilter(value,cocktails) 

    }
  }  
  const searchFilter = (value, cocktails) => { 
    //console.log(cocktails)
    const resultsSearch = cocktails.filter(cocktail => cocktail.fields.name.toLowerCase().includes(value.toLowerCase())) 
    //console.log(resultsSearch)
      setSearchResults(resultsSearch) 
    localStorage.setItem("searchString", value); 
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
      <Route path="/show/shaken/">
        <Show
          shaken={shaken}  
          //setToggle={setToggle}
          
          //getShaken={getShaken}
          //stirred={stirred}
          />
      </Route>  
      <Route path="/showstirred">
        <ShowStirred
          //shaken={shaken}  
          //setToggle={setToggle}
          
          //getShaken={getShaken}
          stirred={stirred}
          />
      </Route> 
      
      {/* <h1>Shaken or Stirred?</h1>  */}
      {/* <Recipe /> 
      <Contact />
      <Footer/> */} 
      <Route path="/contact">
        <Contact />
      </Route>  
      <Route path="/new">
        <New />
      </Route> 

    </div>
  );
}

export default App;

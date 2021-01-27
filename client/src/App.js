import axios from "axios";  
import { baseURL, config } from "./services/index";  
import { Route } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import './App.css';

import Home from "./components/Home";
import Header from "./components/Header";  
import Recipe from "./components/Recipe"; 
import Show from "./components/Show";   
import ShowStirred from "./components/ShowStirred";
import Contact from "./components/Contact"; 
import New from "./components/New";
import Footer from "./components/Footer"

function App() {  
  const [cocktails, setCocktails] = useState([]); 
  const [shaken, setShaken] = useState([]);   
  const [stirred, setStirred] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");  
  const [toggleFetch, setToggleFetch] = useState(false)

  
  useEffect(() => { 
    const getCocktails = async () => {
      const resp = await axios.get(baseURL, config); 
      setCocktails(resp.data.records); 
       
      getShaken(resp.data.records) 
      getStirred(resp.data.records) 
      
    } 
    getCocktails();   
  }, [toggleFetch]); 
// function for shaken home button to search cocktail data and go to showpage 
  const getShaken = (shakenData) => {
    let data = shakenData || cocktails
    const resultsShaken = data.filter(cocktail => cocktail.fields.type === "Shaken")
    setShaken(resultsShaken)
  }  
// function for stirred home button to search cocktail data and go to showpage 
  const getStirred = (stirredData) => {
    let data = stirredData || cocktails 
    const resultsStirred = data.filter(cocktail => cocktail.fields.type === "Stirred") 
    setStirred(resultsStirred) 
    
  }

  const handleChange = (e) => { 
    
    setSearch(e.target.value)

    if (e.target.value.length > 2) {
      let value = e.target.value
      searchFilter(value,cocktails) 

    }
  }  
  const searchFilter = (value, cocktails) => {
    
      console.log(value, cocktails)
    
      const resultsSearch = cocktails.filter(cocktail => cocktail.fields.name.toLowerCase().includes(value.toLowerCase()))
      
      setSearchResults(resultsSearch)
      
    
     
    }
  

  return (
    <div className="App">  
      <Header
        handleChange={handleChange} 
        search={search}  
        searchResults={searchResults}
        /> 
      <main className="body">
        <Route exact path="/">
          <Home 
            getShaken={getShaken}  
            getStirred={getStirred}
            searchResults={searchResults}/>
        </Route> 
        <Route path="/show/shaken/">
          <Show
            shaken={shaken} />
        </Route>  
        <Route path="/showstirred">
          <ShowStirred stirred={stirred}/>
        </Route> 
        <Route path="/contact">
          <Contact />
        </Route>  
        <Route path="/new">
          <New setToggleFetch={setToggleFetch} /> 
        </Route>  
        <Route path="/recipe/:id" >
          <Recipe 
            cocktails={cocktails}
            shaken={shaken} 
            stirred={stirred} 
            setToggleFetch={setToggleFetch}
          />
        </Route>  
      </main> 
    <Footer />
    </div>
  );
}
export default App;

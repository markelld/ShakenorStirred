import axios from "axios";  
import { baseURL, config } from "./services/index";  
// import { Link, Route } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import './App.css';

import Nav from "./components/Nav";  
import Recipe from "./components/Recipe"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {  
  const [cocktails, setCoctails] = useState([]);
  
  useEffect(() => { 
    const getCoctails = async () => {
      const resp = await axios.get(baseURL, config); 
      setCoctails(resp.data.records); 
      console.log(resp.data.records)
    }
    getCoctails()
  }, []);

  return (
    <div className="App">  
      <Nav />
      <h1>Shaken or Stirred?</h1> 
      <Recipe /> 
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

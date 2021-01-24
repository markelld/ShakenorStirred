import { useState } from "react"; 
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function New(props) {   
  const [name, setName] = useState(""); 
  const [type, setType] = useState(""); 
  const [ingredients, setIngredients] = useState(""); 
  const [build, setBuild] = useState(""); 
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      type,
      ingredients,
      build,
    }; 
    await axios.post(baseURL, { fields }, config); 
    console.log("success!");
    props.setToggleFetch((prev) => !prev); 
    history.push("/")
  };

  //set state for each
  return (
    <div>
      <Form onSubmit={handleSubmit} className="recipeform" >
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control  
    name="name" 
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}    
    size="lg"   
    as="textarea"       
    placeholder="" /> 
     
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type</Form.Label>
    <Form.Control 
      as="select"  
      type="text"
      value={type}
      onChange={(e) => setType(e.target.value)}      
      size="lg"   
      placeholder="">
      <option>Shaken</option>
      <option>Stirred</option>
    </Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Ingredients</Form.Label>
    <Form.Control 
      as="textarea" 
      name="message"
      type="text"
      value={ingredients}
      onChange={(e) => setIngredients(e.target.value)}
      rows={3} 
      size="lg"   
      placeholder=""    />
  </Form.Group> 
  <Form.Group >
    <Form.Label>Build</Form.Label>
    <Form.Control  
      as="textarea" 
      name="message" 
      value={build}
       type="text"  
       onChange={(e) => setBuild(e.target.value)}
       rows={3}       
      size="lg"       
      placeholder=""    />
        </Form.Group> 
        <Button type="submit">submit</Button>
      </Form> 
      {/* <form onSubmit={handleSubmit}>
        <h1>New Recipe</h1> 
        <label htmlFor="name">Name:</label> 
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="type">Type:</label> 
        <input
          name="name"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        /> 
        <label> Type
          <select
            name="name" 
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Shaken</option> 
            <option>Stirred</option>
          </select>
        </label>
        <label htmlFor="ingredients">Ingredients:</label> 
        <input
          name="message"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        /> 
        <label htmlFor="build">Build:</label> 
        <input
          name="message"
          type="text"
          value={build}
          onChange={(e) => setBuild(e.target.value)}
        />
        <button type="submit">submit</button>
      </form> */}
    </div>
  )
} 

export default New;